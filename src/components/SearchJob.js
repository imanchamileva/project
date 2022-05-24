import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation, Link } from "react-router-dom";
var data = require('../assets/data.json');




function SearchJob(props) {

    // const [jobs, setJobs] = useState ([])
    const [text, setText] = useState('')
    const [proposition, setProposition] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [showResult, setShowResults] = useState('')
    const navigate = useNavigate();

    const location = useLocation();
    const state = location.state;


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

        <div className="w-full h-screen flex flex-col  content-center  items-center bg-lime-100">
            {state && (
                <div className="text-pink-600 text-lg">
                    <p>{state.message}</p>
                </div>
            )}
            <div className="w-2/4 h-screen flex justify-between  items-center  content-center ">
                <div className="">
                    <input

                        placeholder="Job"
                        className="w-72 h-12 border-1 shadow-lg rounded top-0"
                        type="text"
                        onChange={handleFilter}
                        value={text}

                    />



                    {filteredData !== 0 && (
                        <div className="dataResult absolute">
                            {data.filter(value => {

                                const searchTerm = text.toLowerCase()
                                const position = value.position.toLowerCase()
                                return searchTerm && position.includes(searchTerm) && position !== searchTerm
                            })

                                .slice(0, 10)
                                .map((value, key) => (
                                    <a href
                                        className="dataItem cursor-pointer width-100% height-50px flex align-items-center text-color-black bg-white w-72 py-2 hover:bg-gray-50"
                                        key={key}
                                        onClick={() => onSearch(value.position)}>
                                        <p>{value.position}</p>
                                    </a>

                                ))}
                        </div>
                    )}
                </div>


                {/* //location */}

                <div className="static">

                    <input

                        placeholder="Location"
                        className="w-72 h-12 border-1 shadow-lg rounded"
                        type="text"
                        onChange={handleLocation}
                        value={proposition}

                    />

                    <div className="dataResult absolute">

                        {data.filter(value => {
                            const searchTerm = proposition.toLowerCase()
                            const location = value.location.toLowerCase()

                            return searchTerm && location.includes(searchTerm) && location !== searchTerm
                        })
                            .slice(0, 10)
                            .map((value, key) => (

                                <a href
                                    className="dataItem cursor-pointer width-100% height-50px flex align-items-center text-color-black bg-white w-72 py-2 hover:bg-gray-50"
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
                <button className="h-12 bg-pink-400 rounded hover:bg-pink-500 text-white" onClick={() => onClickButton()}>Find Your Dream Job or Your Worst Nightmare ♥</button>
            </div>


            <div className="resultPage">
                {showResult}
            </div>
        </div>






    )
}





export default SearchJob;