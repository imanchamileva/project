import { useState } from "react";
import axios from "axios";


const JobSearch = () => {

    const [errorMessage, setErrorMessage] = useState ('');
    const [indeedData, setIndeedData] = useState(null);

 
    const handleIndeedData = () => {

        setErrorMessage('')
        setIndeedData(null)
    }
 
    axios.get('https://indreed.herokuapp.com/api/jobs')



    return(

        <div className="divGenerale">
            <div className="jobsearch">
                {/* <label>Job Search</label> */}
                <input placeholder="Job Search"></input>
            </div>

            <div className="location">
                {/* <label>Location</label> */}
                <input placeholder="Location"></input>
            </div>
        </div>

    )
}

export default JobSearch