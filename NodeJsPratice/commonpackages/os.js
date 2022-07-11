/* eslint-disable no-undef */
const os = require('os');

const host = os.hostname();
console.log(host);
const user = os.userInfo().username;
console.log(user);
const home = os.homedir();
console.log(home);
// eslint-disable-next-line camelcase
const path_log = path.join(home, '.log');
console.log(path_log);

const cpudeatil = os.cpus();
console.log(cpudeatil);
const totalmem = os.totalmem();
console.log(totalmem);
const freemem = os.freemem();
console.log(freemem);
