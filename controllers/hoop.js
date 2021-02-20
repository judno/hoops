const passport = require("passport");
const { getBoundingBox } = require("geolocation-utils");
const { Op } = require("sequelize");

const SEARCH_MARGIN = 5 * 1000; // 5 KMs

function hoop(app, model) {
  app.post(
    "/api/hoops",
    passport.authenticate("facebook-token", { session: false }),
    async (req, res) => {
      try {
        await model.Hoop.create({
          name: req.body.name,
          description: req.body.description,
          locationName: req.body.location.name,
          longitude: req.body.location.location[0],
          latitude: req.body.location.location[1],
          ownerId: req.user.id,
        });

        res.sendStatus(200);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  );

  app.get("/api/hoops", async (req, res) => {
    try {
      const { lat, lon } = req.query;

      const { topLeft, bottomRight } = getBoundingBox(
        [{ lat: parseFloat(lat, 10), lon: parseFloat(lon, 10) }],
        SEARCH_MARGIN
      );

      const results = await model.Hoop.findAll({
        where: {
          [Op.and]: [
            { latitude: { [Op.lte]: topLeft.lat } },
            { latitude: { [Op.gte]: bottomRight.lat } },
            { longitude: { [Op.gte]: topLeft.lon } },
            { longitude: { [Op.lte]: bottomRight.lon } },
          ],
        },
      });

      res.json(results);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  });
}

module.exports = {
  hoop,
};
