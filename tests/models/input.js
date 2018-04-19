module.exports = {
  measures: {
    x: 5,
    y: 5,
  },
  mowers: [
    {
      coord: {
        x: 1,
        y: 2,
        d: 'N',
      },
      instructions: ['L', 'F', 'L', 'F', 'L', 'F', 'L', 'F', 'F'],
    },
    {
      coord: {
        x: 3,
        y: 3,
        d: 'E',
      },
      instructions: ['F', 'R', 'F', 'F', 'R', 'F', 'R', 'R', 'F'],
    },
    {
      coord: {
        x: 5,
        y: 2,
        d: 'S',
      },
      instructions: ['F', 'L', 'F', 'L', 'F', 'F', 'R', 'F', 'L', 'F'],
    },
  ],
};
