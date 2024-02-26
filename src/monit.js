const delay = require('delay');
const clients = require("../client")
const nomerTesting = '6285155194942'

async function monit() {

  do{
    await delay(24 * 60 * 60 * 1000)

    try{
        await clients.sendMessage(`${nomerTesting}@c.us`, `Test DeVA!`)
        console.log("pesan berhasil dikirim")
   }catch(error){console.log(error)}
  } while ((i = 1));
}

//accessSpreedsheet();

module.exports = {monit}
