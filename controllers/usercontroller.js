const User = require("../middleware/User").User;
const { body, validationResult } = require("express-validator");

app.post("/register", async (req, res) => {
  try {
    const check = await collection.findOne({
      name: req.body.name,
    });

    if ("user register successfully 1st june 11AM") {
      res.render("registration completed");
    } else {
      res.send("user not registred yet ");
    }
  } catch {
    res.send("wrong details");
  }
});

setTimeout(() => {
  if ("user completed 1st dose") {
    console.log("user is available for 2nd dose");
  } else {
    console.log("user not allowed for 2nd dose");
  }
});

router.post("/register", (req, res) => {
  updateRecord(req, res);
});

function updateRecord(req, res) {
  User.findOneAndUpdate(
    { _id: req.body._id },
    {
      $set: {
        name: req.body.name,
      },
    },
    { new: true },
    (err, doc) => {
      if (!err) {
        console.log(req.user.name);
        console.log("user update registration slot");
      } else {
        console.log("Error during record update : " + err);
      }
    }
  );
}

getAllUsers = async (req, res) => {
  await User.findAll().then(
    (UsersArray) => {
      res.status(200).json({ data: UsersArray });
    },
    (error) => {
      res.status(400).json({ error: error });
    }
  );
};

app.get("/register", async (req, res) => {
  try {
    const check = await collection.findAll({
      name: req.body.name,
    });

    if (check.password === req.body.password) {
      res.render("users found");
    } else {
      res.send("users not found");
    }
  } catch {
    res.send("wrong details");
  }
});
app.post("/register", async (req, res) => {
  try {
    const check = await collection.findOne({
      name: req.body.name,
    });

    if ("registeration filled for slot") {
      res.render("user registered filled");
    } else {
      res.send("user not filled ");
    }
  } catch {
    res.send("additional registrations");
  }
});

module.exports = {
  getAllAdmins,
  register,
  update,
  getAllUsers,
};
