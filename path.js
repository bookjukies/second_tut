const path = require('path');

// console.log(path.sep);

const filePath = path.join('/test', 'see', 'file.txt');

const base = path.basename(filePath);

// const absolute = path.resolve(__dirname, 'test', 'see', 'file.txt');
const absolute = path.resolve(path.join(__dirname, filePath));

console.log(absolute);
