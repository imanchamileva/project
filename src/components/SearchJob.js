import React from 'react'
import {useState} from "react"
var data = require('../assets/data.json')




function SearchJob() {


    // const [jobs, setJobs] = useState ([])
    const [text, setText] = useState('')
    const [proposition, setProposition] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [showResult, setShowResults] = useState('')


   

    //position

    const handleFilter = (e) => {
        setText(e.target.value)
        
    }

    const onSearch = (searchJob) => {
        setText(searchJob)
    
    }

    const onClickButton =() => {

        setShowResults(
            <div className="resultPage">HEY</div>
            )

    }

//locations

const handleLocation = (e) => {
    setProposition(e.target.value)
    
}

const onLocationSearch = (searchLocation) => {
    setProposition(searchLocation)
  
 }

  return (


 <div className="divGenerale">
    <div className="divsEtBouton">
        <div className="divVerticales">
            <div className="premiereColonne">

                <input

                placeholder="Job"
                className="inputName" type="text" 
                onChange={handleFilter}
                value={text}
                
                />

        
        
        {filteredData !== 0 && (
            <div className="dataResult">
                {data.filter(value =>{

                    const searchTerm = text.toLowerCase()
                    const position= value.position.toLowerCase()
                    return searchTerm && position.includes(searchTerm) && position !== searchTerm})

                    .slice(0, 10)
                    .map((value,key) => (

                    <a href
                    
                    className="dataItem"
                    key={key} 
                    onClick={()=> onSearch(value.position)}>
                    <p>{value.position}</p>
                    
                    </a>
                ))}
            </div>
          )}
        </div>
       
                   
            {/* //location */}

            <div className="premiereColonne">

                <input

                placeholder="Location"
                className="inputName" type="text" 
                onChange={handleLocation}
                value={proposition}

                />

                <div className="dataResult">

                {data.filter(value =>{
                const searchTerm = proposition.toLowerCase()
                const location= value.location.toLowerCase()

                return searchTerm && location.includes(searchTerm) && location !== searchTerm})
                .slice(0, 10)
                .map((value,key) => (

                <a href
                className="dataItem"
                key={key} 
                onClick={()=> onLocationSearch(value.location)}>
                <p>
                {value.location}
                </p>

                </a>
                ))}
                </div>

            </div>

            </div>

            <div className="classButton">
               
                <button className="buttonSearch" onClick={() => onClickButton()}>Search Your Dream Job or Your Worst Nightmare ♥</button>
                
            </div>


            <div className="resultPage">
                {showResult}
            </div>
    </div>


</div>



)}





export default SearchJob