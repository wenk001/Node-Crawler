const request = require('request')
const cheerio = require('cheerio')

let handel = function (error, response, body) {
    if(error){
        console.log('statusCode:', response && response.statusCode)
        console.error('error:', error)
    }else if(!error && response.statusCode == 200){
        // console.log('body:', body)
        handleCheerio(body)
    }
  }
let handleCheerio = function(body){
    // console.log(body)
    let $ = cheerio.load(body)
    $('.normal_1fQqB').find($('.c-single-text-ellipsis')).each((i,el)=>{
        console.log($(el).text())
    })
}
request('https://top.baidu.com/board?platform=pc&sa=pcindex_entry', handel)
