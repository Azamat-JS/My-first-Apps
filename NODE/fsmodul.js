// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/first.txt', "utf-8")
// const second = readFileSync('./content/subfolder/second.txt', "utf-8")

// writeFileSync(
//     './content/result-sync.txt',
//     `here is the result : ${first}, ${second}`,
//     {flag: 'a'}
// )


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
const path = require("path")
const fs = require("fs")
// fs.appendFile('message.txt', 'are you ready', (error) => {
//     if(error) throw error
//     console.log('file created');   
// })

//--^^^^^^
// fs.appendFileSync('keys.doc', 'where are the keys?')

//------------ creating file inside of a folder ------

// fs.mkdir("./folder", () => {
//     console.log('folder created');  
// })

// fs.appendFile(path.join(__dirname, "./folder/index.html"), 'text', () => {
//     console.log('created file')
// })


