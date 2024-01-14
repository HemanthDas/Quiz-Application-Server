const mongoose = require("mongoose");
require("dotenv").config();
const connect = async (url) => {
  return new Promise(async (resolve, reject) => {
    const connection = await mongoose.createConnection(url, {}).asPromise();
    resolve(connection);
  });
};

module.exports = connect;
