const fs = require('fs');

module.exports = (path, result, format) => {
  const data = format(result);
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};
