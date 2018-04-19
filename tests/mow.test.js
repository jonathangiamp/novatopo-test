const mow = require('../src/mow');
const { inputModel, outputModel } = require('./models');

describe('simple test for test algorithm', () => {
  test('output is correct', async () => {
    const output = await mow(inputModel);
    expect(output).toEqual(outputModel);
  });
});
