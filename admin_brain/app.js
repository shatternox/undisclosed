const express = require('express')
const puppeteer = require('puppeteer')
const app = express()

const port = 3000

const cookies = [{
    'name': 'special_admin_cookie',
    'value': 'nYyjJdJoeMvftXFuY9mt'
}]

app.get('/', async (req, res) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setCookie(...cookie);

    const response = await page.goto("localhost:1234/order.php?id=");     
    const responseBody = await response.text();
    console.log(responseBody);
    res.send(responseBody);
})

app.listen(port, () => {
  console.log(`Admin server running on ${port}`)
  
})



