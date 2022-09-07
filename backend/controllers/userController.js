const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

exports.signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await User.signup({ name, email, password });

    const token = createToken(newUser._id);
    res.status(200).json({ name, email, token });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

//login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
