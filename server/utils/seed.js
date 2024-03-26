const db = require("../config/connection");
const { User, Job } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  // Seed Users (3 company owners, 5 jobseekers)
  const users = await User.insertMany([
    // Company Owners
    {
      username: "test",
      email: "test@aol.com",
      password: "password",
      role: "company",
    },
    // Job Seekers
    {
      username: "test1",
      email: "test1@aol.com",
      password: "password",
      role: "jobseeker",
    },
  ]);

  console.log("Users seeded");

  // Seed jobPostings
  const jobs = await Job.insertMany([
    // For Tech Innovate
    {
      title: "Senior Frontend Developer",
      company: "Google",
      location: "Toronto",
      workstyle: "Remote",
      salary: "80,000 - 100,000",
      description: "Crafting high-quality front-end experiences.",
      skill: ".Net,React,NodeJs",
      isActive: true,
    },
    {
      title: "Senior Backend Developer",
      company: "Google",
      location: "Toronto",
      workstyle: "Remote",
      salary: "80,000 - 100,000",
      description: "Crafting high-quality Back-end experiences.",
      skill: ".Net,React,NodeJs",
      isActive: true,
    },

    // Eco Sustain / company 2 will purposefully not have any jobs so we can see how to render that case
  ]);

  console.log("Job Postings seeded");
  process.exit();
});
