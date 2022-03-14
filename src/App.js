import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Data from './assets/data.json'




function App() {
  return (
    <div className="App">
      
     <Header />
    <SearchBar placeholder="Search a job" data={Data}/>
     <Footer />
    </div>
  );
}

export default App;
