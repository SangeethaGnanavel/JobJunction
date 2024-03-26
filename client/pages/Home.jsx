import React, { useState, useEffect } from "react";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/api/jobs"); // Assuming your API endpoint is '/api/jobs'
        console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const jobsData = await response.json();
        setJobs(jobsData); // Set the fetched jobs into state
      } catch (error) {}
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Jobs Page</h1>
      {error && <div>Error: {error}</div>}
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>{job.title}</li> // Adjust 'title' and '_id' based on your Job schema
        ))}
      </ul>
    </div>
  );
};

export default Home;
