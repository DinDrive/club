/**
 * Compare baseline (prod) screenshots with current ($mol) screenshots.
 *
 * Usage: node club/screenshots/diff.js
 *
 * Outputs diff images to club/screenshots/diff/ and prints a summary.
 * Note: since prod and $mol have different layouts, this compares
 * structural similarity rather than expecting pixel-perfect match.
 */

const fs = require('fs')
const path = require('path')
const { PNG } = require('pngjs')
const pixelmatch = require('pixelmatch').default || require('pixelmatch')

const BASELINE_DIR = path.join(__dirname, 'baseline')
const CURRENT_DIR = path.join(__dirname, 'current')
const DIFF_DIR = path.join(__dirname, 'diff')

function loadPNG(filepath) {
	const data = fs.readFileSync(filepath)
	return PNG.sync.read(data)
}

function run() {
	fs.mkdirSync(DIFF_DIR, { recursive: true })

	if (!fs.existsSync(BASELINE_DIR)) {
		console.error('No baseline dir. Run capture-baseline.js first.')
		process.exit(1)
	}
	if (!fs.existsSync(CURRENT_DIR)) {
		console.error('No current dir. Run capture-current.js first.')
		process.exit(1)
	}

	const baselineFiles = fs.readdirSync(BASELINE_DIR).filter(f => f.endsWith('.png'))
	const currentFiles = new Set(fs.readdirSync(CURRENT_DIR).filter(f => f.endsWith('.png')))

	const results = []

	for (const file of baselineFiles) {
		if (!currentFiles.has(file)) {
			results.push({ file, status: 'MISSING', diffPercent: 100 })
			continue
		}

		try {
			const img1 = loadPNG(path.join(BASELINE_DIR, file))
			const img2 = loadPNG(path.join(CURRENT_DIR, file))

			// Use the smaller dimensions for comparison
			const width = Math.min(img1.width, img2.width)
			const height = Math.min(img1.height, img2.height)

			// Crop both to same size
			const crop = (img, w, h) => {
				const out = new PNG({ width: w, height: h })
				for (let y = 0; y < h; y++) {
					for (let x = 0; x < w; x++) {
						const srcIdx = (y * img.width + x) * 4
						const dstIdx = (y * w + x) * 4
						out.data[dstIdx] = img.data[srcIdx]
						out.data[dstIdx + 1] = img.data[srcIdx + 1]
						out.data[dstIdx + 2] = img.data[srcIdx + 2]
						out.data[dstIdx + 3] = img.data[srcIdx + 3]
					}
				}
				return out
			}

			const cropped1 = img1.width === width && img1.height === height ? img1 : crop(img1, width, height)
			const cropped2 = img2.width === width && img2.height === height ? img2 : crop(img2, width, height)

			const diff = new PNG({ width, height })
			const numDiffPixels = pixelmatch(cropped1.data, cropped2.data, diff.data, width, height, {
				threshold: 0.3,
				alpha: 0.5,
			})

			const totalPixels = width * height
			const diffPercent = ((numDiffPixels / totalPixels) * 100).toFixed(2)

			// Save diff image
			const diffPath = path.join(DIFF_DIR, file)
			fs.writeFileSync(diffPath, PNG.sync.write(diff))

			const sizeDiff = img1.height !== img2.height ? ` (height: ${img1.height} vs ${img2.height})` : ''

			results.push({
				file,
				status: numDiffPixels === 0 ? 'MATCH' : 'DIFF',
				diffPercent: parseFloat(diffPercent),
				numDiffPixels,
				sizeDiff,
			})
		} catch (err) {
			results.push({ file, status: 'ERROR', error: err.message })
		}
	}

	// Print results sorted by diff percentage (worst first)
	results.sort((a, b) => (b.diffPercent || 0) - (a.diffPercent || 0))

	console.log('\n=== PIXEL DIFF REPORT ===\n')
	console.log(`${'File'.padEnd(45)} ${'Status'.padEnd(10)} Diff%`)
	console.log('-'.repeat(70))

	let totalMatch = 0
	let totalDiff = 0

	for (const r of results) {
		const icon =
			r.status === 'MATCH' ? 'OK' : r.status === 'DIFF' ? 'DIFF' : r.status === 'MISSING' ? 'MISS' : 'ERR'
		const pct = r.diffPercent != null ? `${r.diffPercent}%` : ''
		const extra = r.sizeDiff || r.error || ''
		console.log(`${r.file.padEnd(45)} ${icon.padEnd(10)} ${pct.padStart(8)} ${extra}`)

		if (r.status === 'MATCH') totalMatch++
		else totalDiff++
	}

	console.log('-'.repeat(70))
	console.log(`Total: ${results.length} | Match: ${totalMatch} | Diff/Missing: ${totalDiff}`)
	console.log(`\nDiff images saved to: ${DIFF_DIR}`)
}

run()
