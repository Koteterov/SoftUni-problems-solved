const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const { SECTRET, SALT_ROUNDS } = require("../config/constants");

exports.register = async ({ email, password, gender }) => {

  const existingUser = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });


  if (existingUser) {
    throw new Error("This user already exists!")
  }


  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  let createdUser = User.create({
    email,
    password: hashedPassword,
    gender,
  });

  return createdUser;
};

exports.login = async ({ email, password }) => {
  let user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid user or password!");
  }
  let isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid user or password!");
  }
  return user;
};


exports.createToken = (user) => {
  const payload = { _id: user._id, email: user.email };
  const option = { expiresIn: "3d" };

  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECTRET, option, (err, token) => {
      if (err) {
        return reject(err);
      }
      resolve(token);
    });
  });
};