
const { log } = require("console");
const os = require("os");
// ------------user info--------
// const user = os.userInfo()
// console.log(user);

//---------- info about user's operation system ------
// const curretnOs = {
//     name: os.type(),
//     releAse: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }
// console.log(curretnOs.freeMem);

//------ info about user's system uptime (last reboot)

console.log(`the system uptime is ${os.uptime()} seconds`);

//------- node js proces uptime -----

console.log(process.uptime());
