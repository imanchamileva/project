import React from 'react'
import { useState } from 'react';
import JobInfos from './Job-Infos/JobInfos';
import JobInfos2 from './Job-Infos/JobInfos2';
import JobInfos3 from './Job-Infos/JobInfos3';
import JobInfos4 from './Job-Infos/JobInfos4';
import JobInfos5 from './Job-Infos/JobInfos5';
import JobInfos6 from './Job-Infos/JobInfos6';
import JobOffers from './JobOffers';


const Jobs = (props) => {


  const [lala, setLala] = useState('')
  const [showInfos1, setShowInfos1] = useState(false);
  const [showInfos2, setShowInfos2] = useState(false);
  const [showInfos3, setShowInfos3] = useState(false);
  const [showInfos4, setShowInfos4] = useState(false);
  const [showInfos5, setShowInfos5] = useState(false);
  const [showInfos6, setShowInfos6] = useState(false);
  const [showInfos7, setShowInfos7] = useState(false);
  const [displayInfos, setDisplayInfos] = useState('')
  const infos = props.datas;

  const handleClick1 = () => {
    setShowInfos1(true);
    setShowInfos2(false);
    setShowInfos3(false);
    setShowInfos4(false);
    setShowInfos5(false);
    setShowInfos6(false);
    setShowInfos7(false);

  }

  const handleClick2 = () => {
    setShowInfos1(false);
    setShowInfos2(true);
    setShowInfos3(false);
    setShowInfos4(false);
    setShowInfos5(false);
    setShowInfos6(false);
    setShowInfos7(false);
  }
  const handleClick3 = () => {
    setShowInfos1(false);
    setShowInfos2(false);
    setShowInfos3(true);
    setShowInfos4(false);
    setShowInfos5(false);
    setShowInfos6(false);
    setShowInfos7(false);
  }
  const handleClick4 = () => {
    setShowInfos1(false);
    setShowInfos2(false);
    setShowInfos3(false);
    setShowInfos4(true);
    setShowInfos5(false);
    setShowInfos6(false);
    setShowInfos7(false);
  }
  const handleClick5 = () => {
    setShowInfos1(false);
    setShowInfos2(false);
    setShowInfos3(false);
    setShowInfos4(false);
    setShowInfos5(true);
    setShowInfos6(false);
    setShowInfos7(false);
  }
  const handleClick6 = () => {
    setShowInfos1(false);
    setShowInfos2(false);
    setShowInfos3(false);
    setShowInfos4(false);
    setShowInfos5(false);
    setShowInfos6(true);
    setShowInfos7(false);
  }
  const handleClick7 = () => {
    setShowInfos1(false);
    setShowInfos2(false);
    setShowInfos3(false);
    setShowInfos4(false);
    setShowInfos5(false);
    setShowInfos6(false);
    setShowInfos7(true);
  }


  return (

    <div className="flex flex-row pt-12">
      <div className="overflow-y-auto h-screen ml-48 mr-48 w-1/3">
        <div className="border-2 h-18 w-80 p-4">
          {infos.slice(0, 1).map((info, i) => (
            <div key={i}>
              <p className="text-bold">{info.position}</p>
              <p>{info.company}</p>
              <p>{info.location}</p>
              <button onClick={handleClick1} className="bg-green-200 rounded">See more</button>
            </div>
          ))}
        </div>
        <div className="border-2 h-18 p-4 cursor-pointer">
          {infos.slice(1, 2).map((info, i) => (
            <div key={i}>
              <p className="text-bold">{info.position}</p>
              <p>{info.company}</p>
              <p>{info.location}</p>
              <button onClick={handleClick2} className="bg-green-200 rounded">See more</button>
            </div>
          ))}
        </div>
        <div className="border-2 h-18 p-4 cursor-pointer">
          {infos.slice(2, 3).map((info, i) => (
            <div key={i}>
              <p className="text-bold">{info.position}</p>
              <p>{info.company}</p>
              <p>{info.location}</p>
              <button onClick={handleClick3} className="bg-green-200 rounded">See more</button>
            </div>
          ))}
        </div>

        <div className="border-2 h-18 p-4 cursor-pointer">
          {infos.slice(3, 4).map((info, i) => (
            <div key={i}>
              <p className="text-bold">{info.position}</p>
              <p>{info.company}</p>
              <p>{info.location}</p>
              <button onClick={handleClick4} className="bg-green-200 rounded">See more</button>
            </div>
          ))}
        </div>

        <div className="border-2 h-18 p-4 cursor-pointer">
          {infos.slice(4, 5).map((info, i) => (
            <div key={i}>
              <p className="text-bold">{info.position}</p>
              <p>{info.company}</p>
              <p>{info.location}</p>
              <button onClick={handleClick5} className="bg-green-200 rounded">See more</button>
            </div>
          ))}
        </div>

        <div className="border-2 h-18 p-4 cursor-pointer">
          {infos.slice(5, 6).map((info, i) => (
            <div key={i}>
              <p className="text-bold">{info.position}</p>
              <p>{info.company}</p>
              <p>{info.location}</p>
              <button onClick={handleClick6} className="bg-green-200 rounded">See more</button>
            </div>
          ))}
        </div>

        <div className="border-2 h-18 p-4 cursor-pointer">
          {infos.slice(6, 7).map((info, i) => (
            <div key={i}>
              <p className="text-bold">{info.position}</p>
              <p>{info.company}</p>
              <p>{info.location}</p>
              <button onClick={handleClick7} className="bg-green-200 rounded">See more</button>
            </div>
          ))}
        </div>
      </div>
      {showInfos1 ? <div className="flex justify-end  p-4 mr-48 border-2 pt-4 w-2/3 overflow-y-auto h-screen	"> <JobInfos /></div> : ''}

      {showInfos2 ? <div className="flex justify-end  p-4 mr-48 border-2 pt-4 w-2/3 overflow-y-auto h-screen	"> <JobInfos2 /></div> : ''}

      {showInfos3 ? <div className="flex justify-end  p-4 mr-48 border-2 pt-4 w-2/3 overflow-y-auto h-screen	"> <JobInfos3 /></div> : ''}

      {showInfos4 ? <div className="flex justify-end  p-4 mr-48 border-2 pt-4 w-2/3 overflow-y-auto h-screen	"> <JobInfos4 /></div> : ''}

      {showInfos5 ? <div className="flex justify-end  p-4 mr-48 border-2 pt-4 w-2/3 overflow-y-auto h-screen	"> <JobInfos5 /></div> : ''}

      {showInfos6 ? <div className="flex justify-end  p-4 mr-48 border-2 pt-4 w-2/3 overflow-y-auto h-screen	"> <JobInfos6 /></div> : ''}

    </div>


  )
}

export default Jobs