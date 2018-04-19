module.exports = (data) => {
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

  return { measures, mowers };
};
