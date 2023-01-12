
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('button show up when page loads', async () => {
    const button = await driver.findElement(By.id('draw'))
    const showing = await button.isDisplayed()
    expect(showing).toBe(true)


})

test('button displays the div with id ="choices"', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    const cards = await driver.findElement(By.id('choices'))
    await drawButton.click()
    const showCards = await cards.isDisplayed();

    expect(showCards).toBe(true)


})