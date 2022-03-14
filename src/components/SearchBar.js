import React from 'react'
import {useState} from "react"




function SearchBar({placeholder, data}) {


    const [filteredData, setFilteredData] = useState ([])

    const handleFilter = (e) => {
        const searchWord = e.target.value
        const newFilter= data.filter((value) => {
            return value.position.toLowerCase().includes(searchWord.toLowerCase())
        })

        if (searchWord === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
        
    }



    return(

        <div className="divGenerale">

            <div className="jobsearch">
                <input placeholder={placeholder} onChange={handleFilter}/>
                
            {filteredData.length != 0 && (
               <div className="dataResult">
                   {filteredData.slice(0,15).map((value,key) => {
                       return (<a href className="dataItem" >
                          <p> {value.position}</p>
                           </a>
                       )
                   })}
               </div>)
}
</div>      

            <div className="location">
                <input placeholder="Location"></input>
            </div>

        </div>
    )
}






export default SearchBar


