const { readFile, writeFile } = require("fs").promises
// const util = require("util")
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)



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
