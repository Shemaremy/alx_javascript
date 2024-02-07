const request = require('request')
const url = process.argv[2]

request.get(url)
 .on('response', resp => {
    console.log("code:", resp.statusCode)
 })

 
