const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end('welcome to my home page')
//     }
//     if(req.url === '/about'){
//         res.end('here is out short history')
//     }
//     res.end(`
//         <h1>Oops!</h1>
//         <p>we can't seem to find the page you are looking for</p>
//         <a href="/">back home page</a>`)
// })

// server.listen(5000)

//---------------

// const http = require('http');
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
//             <h1>sistema: <span>${os.version || 'unknown'}</span></h1>
//             <h1>sistema: <span>${os.platform || 'unknown'}</span></h1>
//             <h1>client: <span>${client.name || 'unknown'}</span></h1>
//         `);
//     }
// });

// app.listen(port, () => {
//     console.log("server is running at http://localhost:" + port);
// });
