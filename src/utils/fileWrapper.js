const fs = require('fs');
const mow = require('../mow');

const readInputFile = (path, opts = 'utf8') => new Promise((resolve, reject) => {
  fs.readFile(path, opts, (err, data) => {
    if (err) reject(err);

    const input = data.toString()
      .split('\n')
      .map(str => str.replace(/\s/g, ''));

    let mowers = [];
    const measures = {
      x: parseInt(input[0][0], 10),
      y: parseInt(input[0][1], 10),
    };

    for (let i = 1; i < input.length; i += 2) {
      const coord = input[i];
      const instructions = input[i + 1].split('');

      const mower = {
        coord: {
          x: parseInt(coord[0], 10),
          y: parseInt(coord[1], 10),
          d: coord[2],
        },
        instructions,
      };

      mowers = [...mowers, mower];
    }

    resolve({ measures, mowers });
  });
});

const writeInputFile = (path, result) => {
  const data = result
    .map(({ x, y, d }) => `${x} ${y} ${d}\n`)
    .toString()
    .replace(/,/g, '');

  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};


const fileWrapper = async (input, output) => {
  const data = await readInputFile(input);
  const result = await mow(data);
  return writeInputFile(output, result);
};

module.exports = fileWrapper;
