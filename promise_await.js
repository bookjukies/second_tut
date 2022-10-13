const { writeFile, readFile } = require('fs').promises;

const start = async () => {
  try {
    const first = await readFile('./test/first.txt', 'utf8');
    const second = await readFile('./test/see/file.txt', 'utf8');

    await writeFile('./test/await.txt', `${first} ${second}`, { flag: 'a' });

    const newF = await readFile(`./test/await.txt`, 'utf8');
    console.log(newF);
  } catch (err) {
    console.log(err);
  }
};

start();
