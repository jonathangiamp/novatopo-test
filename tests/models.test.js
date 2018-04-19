const lawnModel = require('../src/models/lawnModel');

describe('Lawn Model', () => {
  const x = 4;
  const y = 3;
  test('return is correct', () => {
    const model = lawnModel(x, y);
    expect(model).toHaveLength(x + 1);
    expect(model[0]).toHaveLength(y + 1);

    model.map(row => row.map(cell => expect(cell).toEqual({})));
  });
});
