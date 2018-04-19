const Lawn = require('./class/Lawn');
const Mower = require('./class/Mower');

const Mow = async (data) => {
  try {
    const lawn = new Lawn(data.measures, data.mowers);
    const mowers = data.mowers
      .map(mower => new Mower(mower, lawn));
    const promises = mowers.map(mower => mower.launch());

    const newMowersPosition = await Promise.all(promises);
    return newMowersPosition;
  } catch (e) {
    console.error(e);
  }
};

module.exports = Mow;
