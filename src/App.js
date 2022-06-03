import Footer from "./components/Footer";
import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
import Data from './assets/data.json'
import SearchJob from "./components/SearchJob";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Jobs from './components/Jobs';
import Login from './components/Login';
import About from './components/About';
import JobOffers from "./components/JobOffers";
import logo2 from "./assets/logo2.png";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Logout from './components/Logout'



function App() {

 

  return (


    <div className="App">


      <Router>
        <nav className="w-full h-20 flex justify-between items-center mx-auto mr-5">
          <div className="w-60 h-45">
            <img src={logo2} alt="" />
          </div>
          <div>
            <Link className="pr-12 text-pink-700 text-lg" to="/">Home</Link>
            <Link className="pr-12 text-pink-700 text-lg" to="/about">About</Link>
            <Link className="pr-12 text-pink-700 text-lg" to="login">Login</Link>
          </div>

        </nav>
        <Routes>
          <Route path="/" element={<SearchJob />} />
          <Route path="/jobs" element={<JobOffers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
