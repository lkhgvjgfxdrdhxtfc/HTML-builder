const fs = require('fs');
const path = require("path");
/*
var fileName = path.normalize('../HTML-builder/03-files-in-folder');
var extension = path.extname(fileName);
var file = path.basename(fileName,extension);

console.log(file); 
*/

const testFolder = path.normalize('../HTML-builder/03-files-in-folder/secret-folder');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    let extension = path.extname(file);
    let filename = path.basename(file,extension);
   
    // console.log(path.resolve('03-files-in-folder/secret-folder',file));
    fs.stat(path.resolve('03-files-in-folder/secret-folder',file), (err, stats) => {
        if (err) {
          console.log(`File doesn't exist.`);
        } else if (stats.isFile()) {
            console.log(filename + ' - ' + file.substring(file.indexOf('.')+1) + ' - ' + (stats.size/1024).toFixed(2) +' kb');
        
          }
        
      });


   // console.log(file.substring(file.indexOf('.')+1));
    //console.log(file.substring(file.indexOf('.')+1));
/*
    fs.stat(filename, function(err, stats) {
        if (err) {
            console.log("Файл не найден");
        } else {
            console.log("Файл найден");
        }
    });
*/


  });


});

