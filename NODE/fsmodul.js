const {readFileSync, writeFileSync} = require('fs')
console.log('start');

const first = readFileSync('./content/first.txt', "utf-8")
const second = readFileSync('./content/subfolder/second.txt', "utf-8")

writeFileSync(
    './content/result-sync.txt',
    `here is the result : ${first}, ${second}`,
    {flag: 'a'}
)
console.log('done with this task');
console.log('starting the next one');



//---------------- fs asynchronus ---------
// const {readFile, writeFile} = require('fs')


// readFile('./content/first.txt', 'utf-8',(err, result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
// const first = result
// readFile('./content/subfolder/second.txt', 'utf-8', (err, result)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     const second = result
   
    
//     writeFile(
//         './content/result-sync.txt', 
//         `here is the result : ${first}, ${second}`, (err, result)=>{
//         if(err){
//             console.log(err);
//             return
//         }
//         console.log(result)
       
        
//     })
// })
// })

//--------------- creating file -----------

const fs = require("fs")
// fs.appendFile('message.txt', 'are you ready', (error) => {
//     if(error) throw error
//     console.log('file created');   
// })

//--^^^^^^
// fs.appendFileSync('keys.doc', 'where are the keys?')

///------------- reading very big file -------

// const {createReadStream} = require('fs');
// const stream = createReadStream('./content/result-sync.txt', {
//     highWaterMark: 90000,
//    encoding: 'utf-8'})

// stream.on('data', (result) => {
//     console.log(result);   
// })
// stream.on('error', (err) => console.log(err))