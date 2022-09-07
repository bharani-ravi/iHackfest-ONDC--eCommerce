const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the Name"],
  },
  role: {
    type: String,
    default: "user",
  },
  email: {
    type: String,
    required: [true, "Please Enter the Email"],
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "Please Provide a correct Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter the Password"],
    validate: [validator.isStrongPassword, "Please Provide a Strong Password"],
  },
});

//static signup method
userSchema.statics.signup = async function ({ name, email, password }) {
  const exists = await this.findOne({ email });

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = await this.create({ email, password: hash, name });

  return newUser;
};

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password ");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
