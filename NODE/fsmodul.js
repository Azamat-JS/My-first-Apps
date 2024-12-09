// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/first.txt', "utf-8")
// const second = readFileSync('./content/subfolder/second.txt', "utf-8")

// writeFileSync(
//     './content/result-sync.txt',
//     `here is the result : ${first}, ${second}`,
//     {flag: 'a'}
// )


//---------------- fs asynchronus ---------
const {readFile, writeFile} = require('fs')

console.log('start');


readFile('./content/first.txt', 'utf-8',(err, result)=>{
    if(err){
        console.log(err);
        return
    }
const first = result
readFile('./content/subfolder/second.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    const second = result
   
    
    writeFile(
        './content/result-sync.txt', 
        `here is the result : ${first}, ${second}`, (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        // console.log(result)
       setTimeout(()=>{  console.log('done') }, 1000)
        
    })
})
})
console.log('next');

