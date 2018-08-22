const express = require("express");
const webserver = express();
const bodyParser = require("body-parser");
const PORT = 9000;

webserver.use(bodyParser.urlencoded({ extended: false }));
webserver.use(bodyParser.json());

webserver.use(express.static(__dirname + "/client"));
webserver.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

webserver.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

webserver.post("/apply", (req, res) => {
  const { name, like, positions } = req.body;
  if (!name || !like || !positions) {
    const error = {
      success: false,
      message:
        "Your request body needs something. Try fixing it by modifying the JSON key/value pairs you are POSTing as indicated.",
      errors: {
        like:
          "field required (something you like, such as a piece of tech, style of cuisine, or type of bunny)",
        name: "field required (your full name)",
        positions: "field required (the position(s) you're applying for)"
      }
    };
    res.send(error);
  } else {
    const fakeNewId = Math.floor(Math.random() * 100000);

    res.send({
      success: true,
      uniqueID: fakeNewId,
      message: `Thank you for applying. Your new ID is: ${fakeNewId}`
    });
  }
});

webserver.listen(PORT, () => {
  console.log(`Starting webserver.js at port: ${PORT}`);
});
