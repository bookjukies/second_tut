const { rejects } = require('assert');
const { writeFile, readFile } = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async () => {
  try {
    const first = await getText('./test/first.txt');
    const second = await getText('./test/see/file.txt');

    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();
