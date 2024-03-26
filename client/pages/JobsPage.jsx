// import React, { useState, useEffect } from "react";
// // import getJobs from "../utils/Api"; // Assuming getJobs.js is in the same directory

// const JobsPage = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     async function fetchJobs() {
//       try {
//         const response = await fetch("/api/jobs"); // Assuming your API endpoint is '/api/getjobs'
//         if (!response.ok) {
//           throw new Error("Failed to fetch jobs");
//         }
//         const jobs = await response.json();
//         console.log("Jobs:", jobs); // Log the fetched jobs to the console
//         return jobs;
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//         throw error; // Rethrow the error to handle it in the calling code
//       }
//     }

//     fetchJobs();
//   }, []); // Run once on component mount

//   return (
//     <div>
//       <h1>Jobs Page</h1>
//       <ul>
//         {jobs.map((job) => (
//           <li key={job._id}>{job.title}</li> // Adjust 'title' and '_id' based on your Job schema
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default JobsPage;
