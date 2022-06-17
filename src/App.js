import Footer from "./components/Footer";
import SearchJob from "./components/SearchJob";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import About from './components/About';
import JobOffers from "./components/JobOffers";
import logo2 from "./assets/logo2.png";
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { logout, setUserName } from './components/features/loginSlice'




function App() {


  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.isLogin);
  const userName = useSelector((state) => state.user.userName);



  const logoutHandler = (e) => {


    e.preventDefault();
    { dispatch(logout()) }
    { dispatch(setUserName({ name: '' })) }
    <Link to='/' className="cursor-pointer"></Link>
  }


  return (


    <div className="App">

      <div className="pl-4">

        {userName.name}
        {isLogin ? (
          <button onClick={logoutHandler} className="bg-pink-400 hover:bg-pink-500 text-white w-20 h-10  rounded ">Logout</button>) : ''}
      </div>

      <Router>
        <nav className="w-full h-20 flex justify-between items-center mx-auto mr-5">
          <div className="w-60 h-45">
            <img src={logo2} alt="" />
          </div>
          <div>
            <Link className="pr-12 text-pink-700 text-lg" to="/project">Home</Link>
            <Link className="pr-12 text-pink-700 text-lg" to="/about">About</Link>
            <Link className="pr-12 text-pink-700 text-lg" to="login">Login</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/project" element={<SearchJob />} />
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
