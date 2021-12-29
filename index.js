const puppeteer = require('puppeteer');


async function getBunnies() {

  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "C:/Program Files/Google/Chrome Dev/Application/chrome",
  });
  const page = await browser.newPage();

  const returnError = async () => {
    await page.waitForTimeout(6000);

    await page.type("#identifierId", 'jonathanr12345@gmail.com')

    await page.waitForTimeout(3000);

    await page.click("#identifierNext > div > button > span")

    await page.waitForTimeout(1000);

  }

  const buttonReturn = async () => {
    await page.evaluate(() => {
      const buuton = document.querySelector('[jsname="V67aGc"]')



      if (buuton.tagName === "SPAN") {

        setTimeout(async () => {
          await buuton.click()
          await page.waitForTimeout(5000)
          await returnError()
        }, 3000)
      }
      return buuton


    })

  }

  const url = 'https://google.com'

  await page.goto(url);

  await page.waitForTimeout(2000);

  await page.click('#gb > div > div.gb_Me > a')

  await returnError()

  await buttonReturn()
  
  await page.waitForTimeout(7000);
  
  await browser.close()
}

getBunnies()

setInterval(async () => {
getBunnies()
}, 30000)

