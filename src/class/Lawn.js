const model = require('../models/lawnModel');
const isObjectEmpty = require('../utils/isObjectEmpty');

class Lawn {
  constructor({ x, y }, mowers) {
    this.limit = { x, y };
    this.area = model(x, y);
    mowers.map(mower => this._initMower(mower.coord));
  }

  _initMower(coord) {
    const { x, y } = coord;
    const data = [...this.area];
    data[x][y] = coord;
    this.area = [...data];
  }

  isCoordValid({ x, y }) {
    return (x <= this.limit.x && y <= this.limit.y);
  }

  isCoordEmpty({ x, y }) {
    // console.log(x, y);
    // console.log(this.area);
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
