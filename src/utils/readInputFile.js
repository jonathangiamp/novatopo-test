const fs = require('fs');

module.exports = (path, format, opts = 'utf8') => new Promise((resolve, reject) => {
  fs.readFile(path, opts, (err, data) => {
    if (err) reject(err);

    const result = format(data);
    resolve(result);
  });
});
