module.exports = data => data
  .map(({ x, y, d }) => `${x} ${y} ${d}\n`)
  .toString()
  .replace(/,/g, '');
