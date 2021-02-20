const passport = require("passport");
const FacebookStrategy = require("passport-facebook-token");

function auth(app, model) {
  app.use(passport.initialize());

  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        fbGraphVersion: "v3.0",
      },
      async function (accessToken, refreshToken, profile, cb) {
        console.log("Facebook stuff", profile);
        const [user] = await model.User.findOrCreate({
          where: { facebookId: profile.id, name: profile.displayName },
        });

        cb(null, user);
      }
    )
  );
}

module.exports = {
  auth,
};
