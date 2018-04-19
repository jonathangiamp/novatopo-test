const getTargetPosition = require('../src/modules/getTargetPosition');

describe('Return position', () => {
  const truthyData = [
    {
      current: {
        x: 2,
        y: 2,
        d: 'N',
      },
      result: {
        x: 2,
        y: 3,
        d: 'N',
      },
    },
    {
      current: {
        x: 2,
        y: 2,
        d: 'E',
      },
      result: {
        x: 3,
        y: 2,
        d: 'E',
      },
    },
    {
      current: {
        x: 2,
        y: 2,
        d: 'S',
      },
      result: {
        x: 2,
        y: 1,
        d: 'S',
      },
    },
    {
      current: {
        x: 2,
        y: 2,
        d: 'W',
      },
      result: {
        x: 1,
        y: 2,
        d: 'W',
      },
    },
  ];

  const falsyData = {
    current: {
      x: 2,
      y: 2,
      d: 'P',
    },
  };

  test('truthy value returns are correct', () => {
    truthyData.map(data => expect(getTargetPosition(data)).toEqual(data.result));
  });

  test('falsy value returns are correct', () => {
    const errorMessage = 'Incorrect instruction';
    return expect(() => getTargetPosition(falsyData)).toThrow(errorMessage);
  });
});

