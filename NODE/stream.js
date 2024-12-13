// const fs = require('fs')

// //// readable stream
// const readableStream = fs.createReadStream('file.txt')

// readableStream.on('data', (chunk) => {
//     console.log('new part:', chunk.toString());
// })

/////////// writable stream 

// const writableStream = fs.createWriteStream('output.txt')
// writableStream.write('this is the first text')

/////////// duplex stream 

// const { Duplex } = require('stream')

// const duplexStream = new Duplex({
//     read(size){
//         this.push('Ma\'lumot o\'qildi\n')
//         this.push(null)
//     },
//     write(chunk, encoding, callback){
//         console.log('yozilmoqda:', chunk.toString());
//         callback()
//     }
// })
// duplexStream.on('data', (chunk) => {
//     console.log(chunk.toString());
    
// })
// duplexStream.write('new text with duplex')
// duplexStream.end()

/////////// transform stream 

// const { Transform } = require('stream')

// const transformSream = new Transform({
//     transform(chunk, encoding, callback){
//         this.push(chunk.toString().toUpperCase());
//         callback()
//     }
// })
// process.stdin.pipe(transformSream).pipe(process.stdout)

//------------ writing very big text ---------

// const {writeFile, writeFileSync} = require('fs')

// for (let i = 0; i < 10000; i++) {
//     writeFileSync('./content/result-sync.txt', `this num: ${i}\n`, {flag: 'a'})
    
// }