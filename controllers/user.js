const passport = require("passport");

function user(app, model) {
  app.get(
    "/api/user",
    passport.authenticate("facebook-token", { session: false }),
    async (req, res) => {
      res.json(req.user);
    }
  );
}

module.exports = { user };
