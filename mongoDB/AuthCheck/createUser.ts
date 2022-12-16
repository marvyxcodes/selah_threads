const bcrypt = require("bcrypt");
// let bcrypt = require("bcryptjs");

function hashPass(password: string) {
  const salt = 10;

  bcrypt.hash(password, salt, function (hashError, hash) {
    if (hashError) {
      throw hashError;
    } else {
      console.log("hash from bcryptfile: ", hash);
      return hash;
    }
  });
}

export default hashPass;
