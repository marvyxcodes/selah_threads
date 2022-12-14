let bcrypt = require("bcryptjs");

function createUser(username, password, uid) {
  const password = password;
  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, function (saltError, salt) {
    if (saltError) {
      throw saltError;
    } else {
      bcrypt.hash(password, salt, function (hashError, hash) {
        if (hashError) {
          throw hashError;
        } else {
          console.log(hash);
        }
      });
    }
  });
}

export default createUser;
