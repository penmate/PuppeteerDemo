const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch({ headless: false})
    const page = await browser.newPage()

    const navigationPromise = page.waitForNavigation()

    // await page.goto('https://outlook.live.com/owa/?nlp=1')
    // await page.goto('https://login.live.com/')
    await page.goto('https://outlook.live.com/owa/')

    await page.waitForTimeout(2000)

    await page.waitForSelector('[data-task="signin"]')
    await page.click('[data-task="signin"]')

    await page.waitForTimeout(2000)
    await page.waitForSelector('input[type="email"]')
    await page.type('input[type="email"]', 'tesztfiok1234@outlook.com', {delay: 50})


    await page.waitForSelector('[id="idSIButton9"]')

    await page.click('[id="idSIButton9"]')

    await page.waitForSelector('[id="i0118"]')
    await page.waitForTimeout(2000)
    await page.type('input[type="password"]', "Tesztfiokvagyok", {delay: 50})
    await page.waitForSelector('input[type="submit"]')
    await page.click('input[type="submit"]')
    await page.waitForTimeout(2000)
    await page.waitForSelector('[id="idBtn_Back"]')
    await page.click('[id="idBtn_Back"]')

    await page.waitForTimeout(2000)
    await page.waitForSelector('[id="id__9"]')
    await page.click('[id="id__9"]')

    await page.waitForTimeout(2000)
    await page.waitForSelector('[aria-label="Címzett"]')
    await page.type('[aria-label="Címzett"]', "nemletezoemailvagyok@gmail.com", {delay: 70})
    await page.waitForTimeout(1000)

    await page.waitForSelector('[aria-label="Adja meg a tárgyat"]')
    await page.type('[aria-label="Adja meg a tárgyat"]', "random subject", {delay: 70})
    await page.waitForTimeout(1000)

    await page.waitForSelector('[aria-label="Üzenet szövege, nyomja meg az Alt+F10 gombot a kilépéshez"]')
    await page.type('[aria-label="Üzenet szövege, nyomja meg az Alt+F10 gombot a kilépéshez"]', "valami szöveg", {delay: 70})
    await page.waitForTimeout(1000)

    await page.waitForSelector('[data-icon-name="send"]')
    await page.click('[data-icon-name="send"]')

    await page.waitForTimeout(1000)
    await page.waitForSelector('[data-icon-name="GlobalNavButton"]')
    await page.click('[data-icon-name="GlobalNavButton"]')

    await page.waitForTimeout(1000)
    await page.waitForSelector('[title="Elküldött elemek"]')
    await page.click('[title="Elküldött elemek"]')

    await page.waitForTimeout(1000)
    await page.waitForSelector('[data-icon-name="StatusCircleCheckmark"]')
    await page.click('[data-icon-name="StatusCircleCheckmark"]')

    await page.waitForTimeout(1000)

    await page.waitForTimeout(1000)
    await page.waitForSelector('[name="Mappa ürítése"]')
    await page.click('[name="Mappa ürítése"]')

    await page.waitForTimeout(1000)
    await page.waitForSelector('[id="ok-1"]')
    await page.click('[id="ok-1"]')

    await page.waitForTimeout(3500)


    await browser.close()

})()