// const {readFileSync, writeFileSync} = require('fs')

// const first = readFileSync('./content/first.txt', "utf-8")
// const second = readFileSync('./content/subfolder/second.txt', "utf-8")

// writeFileSync(
//     './content/result-sync.txt',
//     `here is the result : ${first}, ${second}`,
//     {flag: 'a'}
// )


//---------------- fs synchronus ----------

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf-8',(err, result)=>{
    if(err){
        console.log(err);
        return
    }
const first = result;
readFile('/content/second.txt', 'utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result
    writeFile('./content/result-sync.txt', `here is the result : ${first}, ${second}`, (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        
    }),
    {flag: 'a'}
})
})
