const { Router } = require("express");
const service = require("../services");
const logger = require("../../../utils/logger");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const tracks = await service.listTracks(req.user._id);
    res.send(tracks);
  } catch (error) {
    const msg = "track lookup failed";
    logger.error(error.message);
    res.status(418).send(msg);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, locations } = req.body;
    if (!name || !locations) return res.status(418).send("invalid track");
    await service.createTrack(name, locations, req.user._id);
    res.send("track created");
  } catch (error) {
    const msg = "track creation failed";
    logger.error(error.message);
    res.status(418).send(msg);
  }
});

module.exports = router;
