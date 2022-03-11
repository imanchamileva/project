import React from 'react'
import { useState, useEffect } from 'react'
import data from "../assets/data.json"
import Job from './Job.js'

function JobBoard() {


const [jobs, setJobs] = useState([])

useEffect (() => {
setJobs(data)
}, [])




  return (
    <div>
      {
        jobs.length === 0 ? (
          <p>Jobs are fetching</p>
        ) : (
        jobs.map((job) => (
          <Job job={job} key={job.id}/>
        )) 
        )
      }
      
    </div>
  )
    }

// export default JobB  oard