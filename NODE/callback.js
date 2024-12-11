// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/first.txt', "utf-8")
// const second = readFileSync('./content/subfolder/second.txt', "utf-8")

// writeFileSync(
//     './content/result-sync.txt',
//     `here is the result : ${first}, ${second}`,
//     {flag: 'a'}
// )
// console.log("");

//------------- callback with fs ----------

// const {readFile} = require("fs")

// console.log('started a first task');

// readFile('./content/first.txt', 'utf-8', (err, res) => {
//     if(err){
//         console.log(err);
//         return        
//     }
//     console.log(res);
//     console.log('completed first task');
    
// })
// console.log('starting next task');

//------------ asynchronus event -------------

// const { readFile, writeFile } = require('fs')
// console.log('start');

// readFile('./content/subfolder/test.txt', 'utf8', (err, result) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     const first = result
//     readFile('./content/subfolder/second.txt', 'utf8', (err, result) => {
//         if(err){
//             console.log(err);
//             return
//         }
//         const second = result
//         writeFile(
//             './content/result-sync.txt',
//         `here is the result : ${first}, ${second}`,
//     (err, result) => {
//         if(err){
//             console.log(err);
//             return
//         }
//         console.log('done with this task');
        
//     })
//     })
// })
// console.log('starting next task');

// ---
