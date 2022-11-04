
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


test('Choices div shows up when you click "draw"', async () => {
    const choices = await driver.findElement(By.id('choices'))
    await driver.sleep(800)

    await driver.findElement(By.id('draw')).click()
    await driver.sleep(800)

    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(500)
})


test('player-duo div is shown when you add a bot', async () => {
    await driver.sleep(800)

    await driver.findElement(By.id('draw')).click()
    await driver.sleep(800)

    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(800)

    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(800)
})
