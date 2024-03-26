const { ObjectId } = require("mongoose").Types;
const { Job } = require("../models");

module.exports = {
  async getjobs(req, res) {
    try {
      const jobs = await Job.find();
      return res.json(jobs);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
