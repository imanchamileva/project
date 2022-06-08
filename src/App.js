import Footer from "./components/Footer";
// import SearchBar from "./components/SearchBar";
import Data from './assets/data.json'
import SearchJob from "./components/SearchJob";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Jobs from './components/Jobs';
import Login from './Pages/Login';
import About from './components/About';
import JobOffers from "./components/JobOffers";
import logo2 from "./assets/logo2.png";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Logout from './Pages/Logout'
import { useState } from 'react'
import { logout } from './components/features/loginSlice'
import { useNavigate } from 'react-router-dom';



function App() {


  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value)
  const [loggedIn, setLoggedIn] = useState('')


  const handleSubmit = (e) => {

    setLoggedIn('lala')
    e.preventDefault();
    { dispatch(logout({ name: '' })) }
    <Link to='/' className="cursor-pointer"></Link>
  }


  return (


    <div className="App">

      <div className="pl-4">

        {user.name}

        ({loggedIn ? <button onClick={handleSubmit} className="bg-pink-500 text-white px-3 py-1 rounded cursor-pointer">Logout</button> : ''})
      </div>

      <Router>
        <nav className="w-full h-20 flex justify-between items-center mx-auto mr-5">
          <div className="w-60 h-45">
            <img src={logo2} alt="" />
          </div>
          <div>
            <Link className="pr-12 text-pink-700 text-lg" to="/">Home</Link>
            <Link className="pr-12 text-pink-700 text-lg" to="/about">About</Link>
            <Link className="pr-12 text-pink-700 text-lg" to="login">Login</Link>
            <Link className="pr-12 text-pink-700 text-lg" to="profile">Profile</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<SearchJob />} />
          <Route path="/jobs" element={<JobOffers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
