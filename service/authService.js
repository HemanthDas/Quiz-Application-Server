const jwt = require("jsonwebtoken");
const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
  return token;
};
module.exports = generateToken;
