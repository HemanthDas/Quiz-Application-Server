const udb = require("../../database/userDB");
const registerController = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const newUser = new udb({
      email,
      username,
      password,
    });
    await newUser.save();
    res.status(201).json({
      status: "success",
      message: "User created successfully, please login to continue",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
module.exports = registerController;
