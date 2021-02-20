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
        profileFields: ["id", "displayName", "name", "emails", "photos"],
      },
      async function (accessToken, refreshToken, profile, cb) {
        const [user] = await model.User.findOrCreate({
          where: { facebookId: profile.id },
          defaults: {
            name: profile.displayName,
            picture: profile._json.picture
              ? profile._json.picture.data.url
              : null,
          },
        });

        cb(null, user);
      }
    )
  );
}

module.exports = {
  auth,
};
