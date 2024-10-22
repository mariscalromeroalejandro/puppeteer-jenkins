const puppeteer = require('puppeteer')

describe('E2E browser', () => {
	let browser
	let page

	before(async () => {
		browser = await puppeteer.launch()
		page = await browser.newPage()
		page.setDefaultTimeout(10000)
	})

	after(async () => {
		await browser.close()
	})

	it('should submit form', async () => {
		await page.goto('https://devexpress.github.io/testcafe/example/')
		await page.waitForSelector('#main-form')
		await page.type('#developer-name', 'alex')
		await page.click('#tried-test-cafe')
		await page.click('#submit-button')
		await page.waitForSelector('.result-content')
	})

	it('should select value from select box', async () => {
		await page.goto('https://devexpress.github.io/testcafe/example/')
		await page.waitForSelector('#main-form')
		await page.select('#preferred-interface', 'Javascript API')
	})
})
