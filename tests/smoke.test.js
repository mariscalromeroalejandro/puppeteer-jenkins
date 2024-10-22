const puppeteer = require('puppeteer')

describe('smoke test', () => {
	it('should load website', async () => {
		const browser = await puppeteer.launch({
			headless: false,
		})
		const page = await browser.newPage()
		page.setDefaultTimeout(10000)
		await page.goto('https://devexpress.github.io/testcafe/example/')
		await page.waitForSelector('#main-form')
		await browser.close()
	})
})
