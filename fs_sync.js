const { writeFileSync, readFileSync } = require('fs');

const first = readFileSync('./test/first.txt', 'utf8');

writeFileSync('./test/result.txt', `\nthis is me`, { flag: 'a' });
