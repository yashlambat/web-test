
import './App.css';
import Speedmeter from'./Components/Speedmeter';
import SpeedTest from './Components/SpeedTest';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/SpeedTest" element={<SpeedTest />} />
        <Route exact path="/Speedmeter" element={<Speedmeter />} />
      </Routes>
    </Router>
  );
}

export default App;
