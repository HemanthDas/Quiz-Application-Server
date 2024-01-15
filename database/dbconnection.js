const mongoose = require("mongoose");
require("dotenv").config();
const connect = async (url) => {
  return new Promise(async (resolve, reject) => {
    let connection;
    try {
      connection = await mongoose.createConnection(url, {}).asPromise();
    } catch (err) {
      reject(err);
    }
    resolve(connection);
  });
};

module.exports = connect;
