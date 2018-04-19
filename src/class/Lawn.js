const lawnModel = require('../models/lawnModel');
const { initMower } = require('../modules');
const { isObjectEmpty } = require('../utils');

class Lawn {
  constructor({ x, y }, mowers) {
    const model = lawnModel(x, y);
    const mowersLocation = mowers.map(({ coord }) => initMower(coord, model));
    this.area = [...model, ...mowersLocation];
    this.limit = { x, y };
  }

  isCoordValid({ x, y }) {
    return (x <= this.limit.x && y <= this.limit.y);
  }

  isCoordEmpty({ x, y }) {
    const box = this.area[x][y];
    return isObjectEmpty(box);
  }

  updatePosition(coord, nextcoord) {
    const data = [...this.area];
    data[coord.x][coord.y] = {};
    data[nextcoord.x][nextcoord.y] = Object.assign({}, coord);
    this.area = [...data];
    return this.area;
  }

  updateDirection(coord, items) {
    const data = [...this.area];
    data[coord.x][coord.y] = Object.assign({}, items);
    return this;
  }

  getArea() {
    return this.area;
  }
}

module.exports = Lawn;
