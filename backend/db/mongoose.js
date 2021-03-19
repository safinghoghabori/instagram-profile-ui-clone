const mongoose = require("mongoose");
const { MONGOURI } = require("../keys");

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Database connected successfully....!");
});

mongoose.connection.on("error", (error) => {
  console.log(`Error...${error}`);
});
