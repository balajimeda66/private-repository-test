const User = require("../middleware/User");
const bcrypt = require("bcryptjs");

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedpass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let user = new User({
      name: req.body.name,
      password: hashedpass,
    });
    console.log(req.body, "fg");
    user
      .save()
      .then((user) => {
        res.json({
          status: 201,
          message: "user register successfully",
          data: user,
        });
      })
      .catch((error) => {
        res.json({
          message: "user registration not found",
        });
      });
  });
};

module.exports = {
  register,
};
