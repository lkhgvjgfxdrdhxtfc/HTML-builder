const fs = require('fs');
const path = require("path");
var fs_Extra = require('fs-extra');

var sourceDir = path.join(__dirname, "../04-copy-directory/files");
var destinationDir = path.join(__dirname, "../04-copy-directory/files-copy");

/*
if (!fs.existsSync(destinationDir)){
    fs.mkdirSync(destinationDir, { recursive: true });
}
*/
/*
fs_Extra.remove(destinationDir, err => {
    console.error(err)
  })
*/
/*
if (fs.access(destinationDir)) {
    console.log('ýes');
}
*/
/*
fs.access(destinationDir, err => {
if (err) {
//console.log(false);
return false;
} else {

//    console.log(true);
    return true;
}
 
});
*/



/*
fs_Extra.remove(destinationDir, err => {
    console.error(err);
  });

*/
/*
    fs_Extra.remove(destinationDir, err => {
        console.error(err);
      });
*/

fs_Extra.copy(sourceDir, destinationDir, function(error) {
    if (error) {
        throw error;
    } else {
      console.log("success!");
    }
});




