/**
 * @param {object} obj
 * @return {boolean}
 */
module.exports = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

