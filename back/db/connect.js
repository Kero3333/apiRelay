const mangoose = require("mongoose");

module.exports = async () => {
  const dbUrl = process.env.dbUrl;
  try {
    await mangoose.connect(dbUrl);
    console.log("Database connected");
  } catch (err) {
    console.log(err.message);
  }
};
