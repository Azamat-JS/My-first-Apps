const path = require('path')

// console.log(path.sep);

// const filePath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
// console.log(absolute);

// const http = require("http")
// const DeviceDetector = require('node-device-detector');

// const port = 3000

// const detector = new DeviceDetector({
//     clientIndexes: true,
//     deviceIndexes: true,
//     deviceAliasCode: false,
//     deviceTrusted: false,
//     deviceInfo: false,
//     maxUserAgentSize: 500,
// });


// const app = http.createServer((req, res) => {
//     if (req.url === "/") {
//         const agent = req.headers["user-agent"]
//         const result = detector.detect(agent)

//         res.writeHead(200, { "content-type": "text/html" })
//         res.end(`
//             <h1>sistema: <span>${result.os.name}</span></h1>
//             <h1>version: <span>${result.os.version}</span></h1>
//             <h1>platform: <span>${result.os.platform}</span></h1>
//             <h1>Browser_name: <span>${result.client.name}</span></h1>
//             `)
//     }
// })

// app.listen(port, () => {
//     console.log("server is running at http://localhost:" + port);    
// })
