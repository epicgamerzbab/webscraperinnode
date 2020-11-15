const cheerio = require('cheerio')
const req = require('request')
const targ = 'http://martyazilim.com.tr/'

req(targ,(err,res,html)=>{
    if (!err&&res.statusCode == 200){
        const dollar = cheerio.load(html)
        const number = dollar('.row-fourty')
        const output = number.text()
        console.log(`Hakkimizda : ${output}`)

    }
})