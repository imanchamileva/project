import React from 'react'
import {useState} from "react"
var data = require('../assets/data.json')




function SearchItem() {


    const [jobs, setJobs] = useState ([])
    const [text, setText] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const handleFilter = (e) => {
        setText(e.target.value)
        
    }

    const onSearch = (searchJob) => {
        setText(searchJob)
        console.log('search', searchJob);

    }


  return (

    <div>

        <input
        className="inputName" type="text" 

        onChange={handleFilter}
        value={text}

        
        />

        <button className="buttonSearch" onClick={() => onSearch(text)}>Search Your Dream Job or Your Worst Nightmare</button>
        <div className="dataResult">
            {data.filter(value =>{
                const searchTerm = text.toLowerCase()
                const position= value.position.toLowerCase()

                return searchTerm && position.includes(searchTerm) && position !== searchTerm
            }).slice(0, 10)
            .map((value,key) => (
                <p 
                key={key} 
                onClick={()=> onSearch(value.position)}>
                {value.position}
                </p>
            ))}
        </div>
    </div>







  )




}





export default SearchItem