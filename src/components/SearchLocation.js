import React from 'react'
import {useState} from "react"
var data = require('../assets/data.json')






function SearchLocation() {

    const [jobs, setJobs] = useState ([])
    const [text, setText] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const handleFilter = (e) => {
        setText(e.target.value)
        
    }

    const onSearch = (searchJob) => {
        setText(searchJob)
    }

  return (
   
    <div>

    <input
    className="inputName" type="text" 

    onChange={handleFilter}
    value={text}

    
    />

   
    <div >
        {data.filter(value =>{
            const searchTerm = text.toLowerCase()
            const location= value.location.toLowerCase()

            return searchTerm && location.includes(searchTerm) && location !== searchTerm})
        .slice(0, 10)
        .map((value,key) => (
            <p 
            key={key} 
            onClick={()=> onSearch(value.location)}>
            {value.location}
            </p>
        ))}
    </div>
</div>




      

    

  )



}




export default SearchLocation