/**
 * Capture screenshots from the local $mol dev server
 *
 * Usage: node club/screenshots/capture-current.js
 *
 * Creates full-page screenshots in club/screenshots/current/
 * Assumes dev server is running at http://localhost:9080/club/app/-/test.html
 */

const { chromium } = require('playwright')
const path = require('path')
const fs = require('fs')

const TOKEN = 'u67Q6bYwMbasP7r5h88ElCPYpzmjTquG'
const BASE = 'http://localhost:9080/club/app/-/test.html'
const OUT = path.join(__dirname, 'current')

const VIEWPORTS = {
	desktop: { width: 1280, height: 900 },
	tablet: { width: 768, height: 1024 },
	mobile: { width: 375, height: 812 },
}

// Map prod pages to SPA hash routes
// Only pages implemented in the $mol app
const PAGES = [
	// Feed variants
	{ name: 'feed-activity', hash: '' },
	{ name: 'feed-new', hash: '#!ordering=new' },
	{ name: 'feed-hot', hash: '#!ordering=hot' },
	{ name: 'feed-top-month', hash: '#!ordering=top_month' },

	// Feed by content type
	{ name: 'feed-posts', hash: '#!type=post' },
	{ name: 'feed-questions', hash: '#!type=question' },
	{ name: 'feed-threads', hash: '#!type=thread' },
	{ name: 'feed-projects', hash: '#!type=project' },
	{ name: 'feed-events', hash: '#!type=event' },
	{ name: 'feed-guides', hash: '#!type=guide' },
	{ name: 'feed-battles', hash: '#!type=battle' },
	{ name: 'feed-links', hash: '#!type=link' },
	{ name: 'feed-ideas', hash: '#!type=idea' },

	// Post page — same slugs as baseline
	// NOTE: / must be encoded as %2F because $mol_state_arg uses / as key-value separator
	{ name: 'post-post', hash: '#!post=post%2F30806' },
	{ name: 'post-question', hash: '#!post=question%2F30850' },
	{ name: 'post-project', hash: '#!post=project%2F30824' },
	{ name: 'post-battle', hash: '#!post=battle%2F30575' },
	{ name: 'post-thread', hash: '#!post=thread%2F30705' },
	{ name: 'post-event', hash: '#!post=event%2F30731' },
	{ name: 'post-guide', hash: '#!post=guide%2F30443' },
	{ name: 'post-link', hash: '#!post=link%2F30843' },
	{ name: 'post-intro', hash: '#!post=intro%2Fvas3k' },

	// Profile
	{ name: 'profile', hash: '#!user=vas3k' },

	// Other pages
	{ name: 'bookmarks', hash: '#!bookmarks=1' },
	{ name: 'rooms', hash: '#!rooms=1' },

	// Not implemented in $mol yet:
	// people, room-ai, docs-about
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
		})
		const page = await context.newPage()

		// Set auth token in localStorage before navigating
		await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 15000 }).catch(() => {})
		await page.evaluate(token => {
			localStorage.setItem('club_token', JSON.stringify(token))
		}, TOKEN)
		await page.waitForTimeout(500)

		for (const pg of PAGES) {
			const url = `${BASE}${pg.hash}`
			const filename = `${pg.name}--${vpName}.png`
			const filepath = path.join(OUT, filename)

			done++

			// Skip already captured (pass --fresh to recapture all)
			if (!process.argv.includes('--fresh') && fs.existsSync(filepath)) {
				console.log(`[${done}/${total}] SKIP ${filename} (exists)`)
				continue
			}

			console.log(`[${done}/${total}] ${vpName} ${pg.name} -> ${filename}`)

			try {
				await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 })
				// Wait for API data to load and render
				await page.waitForTimeout(2000)
				// Wait for content to appear (cards, post body, profile, etc.)
				await page
					.waitForFunction(
						() => {
							const h = document.documentElement.scrollHeight
							const cards = document.querySelectorAll('[club_card]').length
							const post = document.querySelectorAll('[club_post]').length
							const profile = document.querySelectorAll('[club_profile]').length
							const rooms = document.querySelectorAll('[club_rooms]').length
							return h > 1000 || cards > 0 || post > 0 || profile > 0 || rooms > 0
						},
						{ timeout: 15000 },
					)
					.catch(() => {})
				// Extra wait for images and lazy content
				await page.waitForTimeout(2000)

				// $mol uses overflow:auto scrollable containers — expand them for fullPage screenshot
				await page.evaluate(() => {
					const root = document.querySelector('[mol_view_root]')
					if (root) root.style.height = 'auto'
					document.querySelectorAll('[mol_scroll]').forEach(s => {
						s.style.height = 'auto'
						s.style.overflow = 'visible'
					})
				})
				await page.waitForTimeout(500)
				await page.screenshot({ path: filepath, fullPage: true })
			} catch (err) {
				console.error(`  ERROR: ${err.message}`)
				try {
					await page.waitForTimeout(3000)
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
