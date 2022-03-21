import Footer from "./components/Footer";
import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
import Data from './assets/data.json'
import SearchItem from "./components/SearchItem";
// import Location from "./components/Location";




function App() {
  return (
    <div className="App">
      
     {/* <Header /> */}
     <SearchItem  data={Data}/>
     {/* <SearchBar placeholder="Job search" data={Data}/> */}
    
     <Footer />
    </div>
  );
}

export default App;
