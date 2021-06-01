const dotenv = require("dotenv");
dotenv.config();
const mongodb = require("mongodb");

mongodb.connect(process.env.CONNECTIONSTRING, { useUnifiedTopology: true }, function (err, client) {
  module.exports = client;
  
  const PORT = 4e3;
  const app = require("./app.js");
  app.listen(process.env.PORT || PORT, () => console.log(`http://localhost:${PORT}/`));

});
