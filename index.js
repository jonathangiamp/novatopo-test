const mow = require('./src/mow');
const fileWrapper = require('./src/modules/fileWrapper');

const input = process.argv[2] || './data/input.txt';
const output = process.argv[3] || './data/output.txt';

fileWrapper(input, mow, output);
