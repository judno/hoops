require("dotenv").config();
const express = require("express");
const path = require("path");
const { auth } = require("./controllers/auth");
const createModel = require("./model");
const cors = require("cors");
const { user } = require("./controllers/user");
const { hoop } = require("./controllers/hoop");

const PORT = process.env.PORT || 3001;
const app = express();

async function init() {
  const model = await createModel();

  // Define middleware here
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  auth(app, model);
  user(app, model);
  hoop(app, model);

  // Serve up static assets (usually on heroku)
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  // Send every other request to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
}

init();
