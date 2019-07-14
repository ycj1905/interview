const mongoose = require("mongoose");
const User = mongoose.model("users");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require('../secret');

module.exports = app => {
  function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  }

  app.post("/api/user/register", async (req, res) => {
    const existingUser = await User.findOne({ accountId: req.body.accountId });

    if (!req.body.accountId || !req.body.pswd || !req.body.age || !req.body.firstName || !req.body.lastName) {
      res.send({
        error_message: 'missing params'
      })
      return;
    }

    if (existingUser) {
      res.send({ message: "duplicated account ID" });
      return;
    }
    const hashedPswd = bcrypt.hashSync(req.body.pswd, saltRounds);

    new User({
      accountId: req.body.accountId,
      password: hashedPswd,
      age:  req.body.age,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }).save((err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send({
          message: 'register success !'
        })
      }
    });
  });

  app.post("/api/user/login", async (req, res) => {
    if (!req.body.accountId || !req.body.pswd) {
      res.send({
        error_message: 'missing params'
      })
    }
    const foundUser = await User.findOne({ accountId: req.body.accountId });
    if (!foundUser) {
      res.send({
        error_message: 'user dosent exist'
      });
    }
    const reuslt = await bcrypt.compare(req.body.pswd, foundUser.password);
    if (reuslt) {
      const payload = {
        user_name: foundUser.name,
        user_email: foundUser.email
      };
      const token = await jwt.sign(
        {
          payload,
          exp: Math.floor(Date.now() / 1000) + 60 * 15
        },
        SECRET_KEY
      );
      res.send({
        token,
        message: "You got the token!"
      });
    } else {
      res.sendStatus(403);
    }
  });

  
  app.get("/api/users", ensureToken, (req, res) => {
    jwt.verify(req.token, SECRET_KEY, async (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const result = await User.find({}).select("-password -_id -__v");
        res.send(result);
      }
    });
  });

  // TEST
  app.get("/api/protected", ensureToken, (req, res) => {
    jwt.verify(req.token, SECRET_KEY, (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          text: "this is protected",
          data: data
        });
      }
    });
  });
};
