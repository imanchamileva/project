import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
var data = require('../assets/data.json');




function SearchJob() {

    // const [jobs, setJobs] = useState ([])
    const [text, setText] = useState('')
    const [proposition, setProposition] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [showResult, setShowResults] = useState('')
    const navigate = useNavigate();

    

    //position

    const handleFilter = (e) => {
        setText(e.target.value)

    }

    const onSearch = (searchJob) => {
        setText(searchJob)

    }

    const onClickButton = () => {

        setShowResults(
            navigate('/jobs')
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



        <div className="w-full h-screen flex flex-col flex content-center flex items-center bg-green-100">
            <div className="w-2/4 h-screen flex justify-between flex items-center flex content-center flex">
                <div className="">

                    <input

                        placeholder="Job"
                        className="w-72 h-12 border-1 shadow-lg rounded"
                        type="text"
                        onChange={handleFilter}
                        value={text}

                    />



                    {filteredData !== 0 && (
                        <div className="dataResult">
                            {data.filter(value => {

                                const searchTerm = text.toLowerCase()
                                const position = value.position.toLowerCase()
                                return searchTerm && position.includes(searchTerm) && position !== searchTerm
                            })

                                .slice(0, 10)
                                .map((value, key) => (

                                    <a href

                                        className="dataItem"
                                        key={key}
                                        onClick={() => onSearch(value.position)}>
                                        <p>{value.position}</p>

                                    </a>
                                ))}
                        </div>
                    )}
                </div>


                {/* //location */}

                <div className="">

                    <input

                        placeholder="Location"
                        className="w-72 h-12 border-1 shadow-lg rounded"
                        type="text"
                        onChange={handleLocation}
                        value={proposition}

                    />

                    <div className="dataResult">

                        {data.filter(value => {
                            const searchTerm = proposition.toLowerCase()
                            const location = value.location.toLowerCase()

                            return searchTerm && location.includes(searchTerm) && location !== searchTerm
                        })
                            .slice(0, 10)
                            .map((value, key) => (

                                <a href
                                    className="dataItem"
                                    key={key}
                                    onClick={() => onLocationSearch(value.location)}>
                                    <p>
                                        {value.location}
                                    </p>

                                </a>
                            ))}
                    </div>

                </div>

            </div>

            <div className="w-full h-screen flex justify-center">
                <button className="h-12 bg-green-400 rounded hover:bg-green-300" onClick={() => onClickButton()}>Find Your Dream Job or Your Worst Nightmare ♥</button>
            </div>


            <div className="resultPage">
                {showResult}
            </div>
        </div>






    )
}





export default SearchJob;