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

function App() {
  return (

    <div className="App">

      <Router>
        <nav className="w-full h-20 flex justify-end items-center mx-auto">
          <Link className="pr-12" to="/">Home</Link>
          <Link className="pr-12" to="/about">About</Link>
          <Link className="pr-12" to="login">Login</Link>
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
