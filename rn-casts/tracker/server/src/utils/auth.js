const bcrypt = require("bcrypt");

function hashPw(password) {
  return new Promise((res, rej) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) return rej(err);
      bcrypt.hash(password, salt, (err, encrypted) => {
        if (err) return rej(err);
        res(encrypted);
      });
    });
  });
}

function dehashPw(pw) {
  const user = this;
  return new Promise((res, rej) => {
    bcrypt.compare(pw, user.password, (err, isMatch) => {
      if (err) return rej(err);
      return isMatch ? res(true) : res(false);
    });
  });
}

module.exports = {
  hashPw,
  dehashPw,
};
