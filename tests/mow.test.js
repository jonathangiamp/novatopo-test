const mow = require('../src/mow');
const { inputModel, outputModel } = require('./models');

describe('Mow test', () => {
  test('output is correct', async () => {
    const output = await mow(inputModel);
    expect(output).toEqual(outputModel);
  });
});
