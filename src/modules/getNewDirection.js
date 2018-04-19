module.exports = (instruction, { d: direction }) => {
  if (direction === 'N') {
    return instruction === 'L' ? 'W' : 'E';
  }
  if (direction === 'E') {
    return instruction === 'L' ? 'N' : 'S';
  }
  if (direction === 'S') {
    return instruction === 'L' ? 'E' : 'W';
  }
  if (direction === 'W') {
    return instruction === 'L' ? 'S' : 'N';
  }
  throw new Error('Incorrect direction');
};
