const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  const linklist = [
    "http://naufalfadlan.my.id/",
    "https://samehadaku.email/"
  ];

  let filename = ""

  for ( link of linklist) {
    filename = link.match(/\/\/([^/]+)\//)[1];
    console.log(filename)
    await page.goto(link);
    await page.screenshot({
      path: './screenshot/' + filename + ".png", 
      fullPage: true });

  }

  // // Set screenshot
  // await page.screenshot({ path: 'ome.png'});

  await browser.close();
})();