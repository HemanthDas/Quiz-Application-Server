const User = require("../model/User");
const loginController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    console.log(user);
    if (!user) {
      res.status(404).json({
        status: "error",
        message: "User not found",
      });
    }
    const isPasswordCorrect = user.password === password;
    if (!isPasswordCorrect) {
      res.status(401).json({
        status: "error",
        message: "Incorrect password",
      });
    }
    res.status(200).json({
      status: "success",
      message: "User logged in successfully",
      token: "token",
    });
  } catch {}
};
module.exports = loginController;
