import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Player from './components/Player';
import Collections from "./pages/collections/Collections";
import Homepage from './pages/home/Homepage';

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/MyCollections" element={<Collections />} />
          
        </Routes>

        <Player />
      </Router>
    






     
      
    
    </div>
  );
}

export default App;
