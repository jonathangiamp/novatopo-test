const { getNewDirection, getTargetPosition } = require('../modules');

class Mower {
  constructor(paramsMower, lawn) {
    const { x, y, d } = paramsMower.coord;
    this.coord = {
      init: { x, y, d },
      current: { x, y, d },
    };
    this.instructions = [...paramsMower.instructions];
    this.lawn = lawn;
  }

  getNextInstruction() {
    return this.instructions[0];
  }

  getNewCoord(instruction) {
    try {
      if (instruction === 'L' || instruction === 'R') {
        const { current } = this.coord;
        const newDirection = getNewDirection(instruction, this.coord.current);
        return Object.assign({}, current, { d: newDirection });
      }
      if (instruction === 'F') {
        return getTargetPosition(this.coord);
      }
    } catch (e) {
      throw new Error(e);
    }
  }

  launch() {
    return new Promise((resolve, reject) => {
      try {
        const instruction = this.getNextInstruction();
        const newCoord = this.getNewCoord(instruction);
        const isValid = this.lawn.isCoordValid(newCoord);

        // Bloc if valid
        if (isValid) {
          const isTargetEmpty = instruction === 'F' ?
            this.lawn.isCoordEmpty(newCoord) :
            true;

          // Bloc reload
          if (instruction === 'F' && !isTargetEmpty) {
            resolve(this.launch);
          }

          this.lawn.updatePosition(this.coord.current, newCoord);
          this.coord.current = Object.assign({}, newCoord);
        }

        // Splice instructions
        this.instructions = [...this.instructions.splice(1)];

        // Resolve bloc
        if (this.instructions.length === 0) {
          resolve(this.coord.current);
        } else {
          resolve(this.launch());
        }
      } catch (e) {
        reject(e);
      }
    });
  }
}

module.exports = Mower;
