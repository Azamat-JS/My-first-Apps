const http = require('http');
// const DeviceDetector = require('node-device-detector');

// const port = 4000;

// const detector = new DeviceDetector({
//   clientIndexes: true,
//   deviceIndexes: true,
//   deviceAliasCode: false,
//   deviceTrusted: false,
//   deviceInfo: false,
//   maxUserAgentSize: 500,
// });

// const app = http.createServer((req, res) => {
//     if(req.url === "/"){
//         const agent = req.headers['user-agent'];
//         const result = detector.detect(agent);

//         const os = result.os || {};
//         const client = result.client || {};

//         res.writeHead(200, {"content-type": "text/html"});
//         res.end(`
//             <h1>sistema: <span>${os.name || 'unknown'}</span></h1>
//             <h1>version: <span>${os.version || 'unknown'}</span></h1>
//             <h1>type: <span>${os.platform || 'unknown'}</span></h1>
//             <h1>client: <span>${client.name || 'unknown'}</span></h1>
//         `);
//     }
// });

// app.listen(port, () => {
//     console.log("server is running at http://localhost:" + port);
// });


//--------------- ^^^^^^^^^^^^^^^^ -------------
// const DeviceDetector = require('node-device-detector');
// const port = 5000
// const os = require("os")

// const detector = new DeviceDetector({
//     clientIndexes: true,
//     deviceIndexes: true,
//     deviceAliasCode: false,
//     deviceTrusted: false,
//     deviceInfo: false,
//     maxUserAgentSize: 500,
//   });
// const app = http.createServer((req, res) => {
//  if( req.url === '/'){
// const agent = req.headers['user-agent']
// const result = detector.detect(agent);
// console.log(result);


//     res.writeHead(200, {"content-type": 'text/html'})
//     res.end(`
//                   <h1>sistema: <span>${result.os.name || 'unknown'}</span></h1>
//                    <h1>version: <span>${result.os.version || 'unknown'}</span></h1>
//                    <h1>type: <span>${result.os.platform || 'unknown'}</span></h1>
//                <h1>client: <span>${result.client?.name || 'unknown'}</span></h1>
//             `);
//  }
// })

// app.listen(port, () => {
//     console.log('server is running at http://localhost:' + port);
    
// })

//----------------------------------------

// const server = http.createServer((req, res) => {
// console.log('request event');
// res.end("this finshed")
// })

// server.listen(5000, () => {
//     console.log('server is listening on port : 5000...');
    
// })

//-------------------- ^^^^^

// const server = http.createServer((req, res) => {
// if(req.url === '/'){
//     res.end('home page')    
// }
// if(req.url === '/about'){
//     res.end('about page')
// }
// res.end('error page')
// })
// server.listen(3000, () => {
//     console.log('server is listening on port : 3000...');
// })