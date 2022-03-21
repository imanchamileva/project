import Footer from "./components/Footer";
import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
import Data from './assets/data.json'
import SearchJob from "./components/SearchJob";
// import SearchLocation from "./components/SearchLocation";
// import Location from "./components/Location";




function App() {
  return (
    <div className="App">
      
     {/* <Header /> */}
     <SearchJob  data={Data}/>
    {/* <SearchLocation data={Data} /> */}
     {/* <SearchBar placeholder="Job search" data={Data}/> */}
    
     <Footer />
    </div>
  );
}

export default App;
