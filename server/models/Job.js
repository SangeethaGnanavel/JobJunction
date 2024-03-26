const { Schema, model } = require("mongoose");

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  workstyle: {
    type: String,
  },
  salary: {
    type: String,
  },
  description: {
    type: String,
  },
  skill: {
    type: String,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const Job = model("job", jobSchema);

module.exports = Job;
