const request = require("request");
const done = require("./bash");

const curl = (done, url) => {
  request(url, (err, res, body) => {
    if (err) {
      done(err);
    } else {
      done(body);
    }
  });
};

module.exports = curl;
