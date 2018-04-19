const {
  readInputFile,
  writeInputFile,
  formatInputData,
  formatOutputData,
} = require('../utils');

const fileWrapper = async (input, fn, output) => {
  const data = await readInputFile(input, formatInputData);
  const result = await fn(data);
  return writeInputFile(output, result, formatOutputData);
};

module.exports = fileWrapper;
