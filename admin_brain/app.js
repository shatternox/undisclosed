const express = require('express')
const puppeteer = require('puppeteer')
const app = express()

const port = 3000

const cookie = {
    'name': 'special_admin_cookie',
    'value': 'nYyjJdJoeMvftXFuY9mt',
}

const sleep = (ms) => {
  return new Promise(resolve => {setTimeout(resolve, ms)})
}

app.get('/adminspecialpath', async (req, res) => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    
    const url = "http://localhost:1234/order.php?id=" + req.query.id 

    await page.goto("http://localhost:3000");
    await page.setCookie(cookie);

    try{
      await page.goto(url,{waitUntil:"load"});
    } catch(err){
      console.log(err);
    }

    await sleep(5000);
    await browser.close();

    
})


app.listen(port, () => {
  console.log(`Admin server running on ${port}`)
  
})



