const fs = require("fs");
const path = require('node:path');



//const streamWrite = new fs.WriteStream(path.normalize('../HTML-builder/02-write-file/text.txt')); // _filename - имя файла

const readline = require('node:readline');
const {
    stdin: input,
    stdout: output,
} = require('node:process');


const rl = readline.createInterface({ input, output });

//const process = require('node:process');

/*
   
    rl.question('Введите текст:', (answer) => {
    
        console.log(
            `Ваш текст: ${answer}`
            );
            
           streamWrite.write(answer); // записываем данные в файл
           rl.close();
    });
    
*/

    
    
    



rl.question('Введите текст:', (answer) => {
    
    console.log(
        `Ваш текст: ${answer}`
        );
        let data = answer;
        console.log(data);

        fs.appendFile(path.normalize('../HTML-builder/02-write-file/text.txt'), data, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    
rl.close();
});



