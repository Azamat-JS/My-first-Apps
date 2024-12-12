//  -------------------------- reading a file 1 - method
// const { readFile } = require("fs")

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };


// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))

  //--------------------- reading a file 2 - method and writing it

//   const start = async () => {
//     try{
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/subfolder/second.txt')
//         console.log(first, second);
//     }
//     catch (err){
//    console.log(err);
   
//     }
//   }
//   start()

  //------------------ reading a file 3 - method with util

//   const { readFile, writeFile } = require("fs")
//   const util = require('util');
//   const readFilePromise = util.promisify(readFile)
//   const writeFilePromise = util.promisify(writeFile)

//   const start = async () => {
//     try{
//         const first = await readFilePromise('./content/first.txt', 'utf-8')
//         const second = await readFilePromise('./content/subfolder/second.txt', 'utf-8')
//         await writeFilePromise('./content/result-async.txt', `this is awesome: ${first}
//             ${second}`)
//         console.log(first, second);
//     }
//     catch (err){
//    console.log(err);
   
//     }
//   }
//   start()

//---------- reading and writing a file 4 - method

// const { readFile, writeFile } = require("fs").promises

//   const start = async () => {
//       try{
//           const first = await readFile('./content/first.txt', 'utf-8')
//           const second = await readFile('./content/subfolder/second.txt', 'utf-8')
//           await writeFile('./content/result-async.txt', `this is awesome: ${first}
//        ${second}`, {flag: 'a' })
//           console.log(first, second);
//       }
//       catch (err){
//      console.log(err);
     
//       }
//     }
//     start()