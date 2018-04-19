module.exports = ({ current }) => {
  const { d: direction } = current;

  if (direction === 'N') {
    return Object.assign(current, { y: current.y + 1 });
  }
  if (direction === 'E') {
    return Object.assign({}, current, { x: current.x + 1 });
  }
  if (direction === 'S') {
    return Object.assign({}, current, { y: current.y - 1 });
  }
  if (direction === 'W') {
    return Object.assign({}, current, { x: current.x - 1 });
  }
  throw new Error('Incorrect instruction');
};
