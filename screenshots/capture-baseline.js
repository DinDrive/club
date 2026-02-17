/**
 * Capture baseline screenshots from production vas3k.club
 *
 * Usage: node club/screenshots/capture-baseline.js
 *
 * Creates full-page screenshots in club/screenshots/baseline/
 * for desktop (1280), tablet (768), mobile (375) viewports.
 */

const { chromium } = require('playwright')
const path = require('path')
const fs = require('fs')

const TOKEN = 'u67Q6bYwMbasP7r5h88ElCPYpzmjTquG'
const BASE = 'https://vas3k.club'
const OUT = path.join(__dirname, 'baseline')

const VIEWPORTS = {
	desktop: { width: 1280, height: 900 },
	tablet: { width: 768, height: 1024 },
	mobile: { width: 375, height: 812 },
}

// All unique page types to screenshot
const PAGES = [
	// Feed variants
	{ name: 'feed-activity', path: '/' },
	{ name: 'feed-new', path: '/all/new/' },
	{ name: 'feed-hot', path: '/all/hot/' },
	{ name: 'feed-top-month', path: '/all/top_month/' },

	// Feed by content type
	{ name: 'feed-posts', path: '/post/' },
	{ name: 'feed-questions', path: '/question/' },
	{ name: 'feed-threads', path: '/thread/' },
	{ name: 'feed-projects', path: '/project/' },
	{ name: 'feed-events', path: '/event/' },
	{ name: 'feed-guides', path: '/guide/' },
	{ name: 'feed-battles', path: '/battle/' },
	{ name: 'feed-links', path: '/link/' },
	{ name: 'feed-ideas', path: '/idea/' },

	// Post page — one example of each type
	{ name: 'post-post', path: '/post/30806/' },
	{ name: 'post-question', path: '/question/30850/' },
	{ name: 'post-project', path: '/project/30824/' },
	{ name: 'post-battle', path: '/battle/30575/' },
	{ name: 'post-thread', path: '/thread/30705/' },
	{ name: 'post-event', path: '/event/30731/' },
	{ name: 'post-guide', path: '/guide/30443/' },
	{ name: 'post-link', path: '/link/30843/' },
	{ name: 'post-intro', path: '/intro/vas3k/' },

	// Profile
	{ name: 'profile', path: '/user/vas3k/' },

	// Other pages
	{ name: 'people', path: '/people/' },
	{ name: 'rooms', path: '/rooms/' },
	{ name: 'room-ai', path: '/room/ai/' },
	{ name: 'bookmarks', path: '/bookmarks/' },
	{ name: 'docs-about', path: '/docs/about/' },
]

async function run() {
	fs.mkdirSync(OUT, { recursive: true })

	const browser = await chromium.launch()
	const total = PAGES.length * Object.keys(VIEWPORTS).length
	let done = 0

	for (const [vpName, vpSize] of Object.entries(VIEWPORTS)) {
		const context = await browser.newContext({
			viewport: vpSize,
			deviceScaleFactor: 2,
			colorScheme: 'light',
		})
		const page = await context.newPage()

		// Set auth cookie/token
		await page.goto(`${BASE}/?token=${TOKEN}`, { waitUntil: 'networkidle', timeout: 30000 }).catch(() => {})
		// Force light theme
		await page.evaluate(() => {
			localStorage.setItem('theme', 'light')
			document.documentElement.setAttribute('theme', 'light')
		})
		// Wait for auth to settle
		await page.waitForTimeout(1000)

		for (const pg of PAGES) {
			const url = `${BASE}${pg.path}`
			const filename = `${pg.name}--${vpName}.png`
			const filepath = path.join(OUT, filename)

			done++

			// Skip already captured
			if (fs.existsSync(filepath)) {
				console.log(`[${done}/${total}] SKIP ${filename} (exists)`)
				continue
			}

			console.log(`[${done}/${total}] ${vpName} ${pg.name} -> ${filename}`)

			try {
				await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
				// Force light theme on each page
				await page.evaluate(() => {
					document.documentElement.setAttribute('theme', 'light')
				})
				// Wait for lazy images and animations
				await page.waitForTimeout(2500)
				await page.screenshot({ path: filepath, fullPage: true })
			} catch (err) {
				console.error(`  ERROR: ${err.message}`)
				// Take whatever we can
				try {
					await page.screenshot({ path: filepath, fullPage: true })
				} catch {}
			}
		}

		await context.close()
	}

	await browser.close()
	console.log(`\nDone! ${done} screenshots saved to ${OUT}`)
}

run().catch(err => {
	console.error(err)
	process.exit(1)
})
