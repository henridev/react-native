const { Track } = require("../../../models");

class authService {
  constructor() {}

  async listTracks(userId) {
    const tracks = await Track.find({
      _user_id: userId,
    });
    return tracks;
  }

  async createTrack(name, locations, userId) {
    const track = new Track({
      name,
      locations,
      _user_id: userId,
    });
    track.save();
    return track;
  }
}

module.exports = new authService();
