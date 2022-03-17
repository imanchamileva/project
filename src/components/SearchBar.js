import React from 'react'
import {useState} from "react"




function SearchBar({placeholder, data}) {


    const [filteredData, setFilteredData] = useState ([])
    const [filteredDataLocation, setFilteredDataLocation] = useState ([])
    const [text, setText] = useState('')

    const onSuggestedHandler =(text) => {

        setText(text)
        setFilteredData([])
    }
    

    // jobsearch input
    const handleFilter = (e) => {
        // le mot qu'on rentre dans input= searchWord
        const searchWord = e.target.value
        const newFilter= data.filter((value) => {
            // est-ce que le searchWord correspond au nom de la position?
            return value.position.toLowerCase().includes(searchWord.toLowerCase())
        })

        // si on tape rien dans l'input => rien s'affiche

        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
        
    }

    //location input
    const handleLocation = (e) => {
        // le mot qu'on rentre dans input= searchWord
        const searchWord = e.target.value
        const newFilter= data.filter((value) => {
            // est-ce que le searchWord correspond au nom de la position?
            return value.location.toLowerCase().includes(searchWord.toLowerCase())
        })

        // si on tape rien dans l'input => rien s'affiche

        if (searchWord === "") {
            setFilteredDataLocation([])
        } else {
            setFilteredDataLocation(newFilter)
        }
        
    }



  

    return(

        <div className="divGenerale">

    <div className="divInputs">
            <div className="jobsearch">
                <input 
              
                placeholder={placeholder} 
                onChange={handleFilter} 
                value={text}
              
                />
                
                {/* if array not empty, show the following */}
                {filteredData.length !== 0 &&  (
               <div className="dataResult">
                   {filteredData.slice(0,15).map((value,key) => {
                       return (
                            <a href  className="dataItem">   
                           
                            <p onClick={() =>onSuggestedHandler(value.position)} >{value.position} </p>
                            </a>
                       )
                   })}
               </div>)
                    }
                </div>      




             <div className="location">
             {filteredDataLocation.length !== 0 && (
               <div className="dataResult">
                   {filteredDataLocation.slice(0,15).map((value,key) => {
                       return (
                            <a href  target="_blank" className="dataItem">
                            <p> {value.location}</p>
                           </a>
                       )
                   })}
               </div>)
                    }
                <input placeholder="Location"   onChange={handleLocation}></input>
            </div>

         </div>

            <div className="button">
                <button className="bouton">Search</button> 
            </div>
        </div>
       
    )
}
    





export default SearchBar


