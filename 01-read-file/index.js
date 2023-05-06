const fs = require("fs");
const path = require('node:path');

/*
fs.readFile('/Users/Я/Documents/GitHub/HTML-builder/01-read-file/text.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })
*/
/*
fs.readFile(path.normalize('../HTML-builder/01-read-file/text.txt'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(data)
  })
*/

let data = ''; 
 
 let readStream = fs.createReadStream(path.normalize('../HTML-builder/01-read-file/text.txt'), 'utf8'); 
 
 readStream.on('data', function(chunk) { 
 data += chunk; 
 }).on('end', function() { 
 console.log(data); 
 }); 