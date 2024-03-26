const { ObjectId } = require("mongoose").Types;
const { User } = require("../models");

module.exports = {
  // Get a single student
  async getSingleUser(req, res) {
    try {
      const user = await Student.User({ _id: req.params.userId })
        .select("-__v")
        .lean();

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json({
        user,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
