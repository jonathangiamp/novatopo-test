module.exports = (coord, area) => {
  const { x, y } = coord;
  const data = [...area];
  data[x][y] = coord;
  return [...data];
};
