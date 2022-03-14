import React from 'react'





function SearchBar({placeholder, data}) {


    return(

        <div className="divGenerale">

            <div className="jobsearch">
                <input placeholder={placeholder} ></input>
               <div className="dataResult">
                   {data.map((value,key) => {
                       return (<a href className="dataItem" >
                          <p> {value.company}</p>
                           </a>
                       )
                   })}
               </div>
            </div>

            <div className="location">
                <input placeholder="Location"></input>
            </div>

        </div>
    )
}






export default SearchBar


