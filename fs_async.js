const { writeFile, readFile } = require('fs');

readFile('./test/result.txt', 'utf8', (err, result) => {
  if (err) {
    console.error(err);
    return;
  }

  const first = result;
  readFile('./test/first.txt', 'utf8', (err, result) => {
    if (err) {
      console.error(err);
    }

    const second = result;

    writeFile(
      './test/result_sync.txt',
      `\n${first} and ${second}`,
      { flag: 'a ' },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log(result);
      }
    );
  });
});
