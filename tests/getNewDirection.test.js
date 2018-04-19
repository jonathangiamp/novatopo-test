const getNewDirection = require('../src/modules/getNewDirection');

describe('New Direction', () => {
  const truthyData = [
    {
      instruction: 'L',
      coord: { d: 'N' },
      result: 'W',
    },
    {
      instruction: 'L',
      coord: { d: 'E' },
      result: 'N',
    },
    {
      instruction: 'R',
      coord: { d: 'S' },
      result: 'W',
    },
    {
      instruction: 'R',
      coord: { d: 'W' },
      result: 'N',
    },
  ];

  const falsyData = {
    instruction: 'L',
    coord: { d: 'Y' },
  };

  test('truthy value returns are correct', () => {
    truthyData.map(({ instruction, coord, result }) => {
      expect(getNewDirection(instruction, coord)).toBe(result);
    });
  });

  test('falsy value returns are correct', () => {
    const { instruction, coord } = falsyData;
    const errorMessage = 'Incorrect direction';
    return expect(() => getNewDirection(instruction, coord)).toThrow(errorMessage);
  });
});

