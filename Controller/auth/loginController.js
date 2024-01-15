const { getUserModel } = require("../../database/userDB");
const generateToken = require("../../service/authService");
const loginController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const userModel = await getUserModel();
    if (userModel === undefined) {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
      });
      return;
    }
    const user = await userModel.findOne({ username });
    if (!user) {
      res.status(404).json({
        status: "error",
        message: "User not found",
      });
      return;
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
      user: {
        username: user.username,
        email: user.email,
      },
      token: generateToken(user),
    });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
module.exports = loginController;
