const http = require('http');

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
