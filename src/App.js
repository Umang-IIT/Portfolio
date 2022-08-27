import './App.css';


import Navbar from "./components/Navbar";
import InfoCard from './components/InfoCard';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <InfoCard name = "Umang Singla" />
      </div>
    </div>
  );
}

export default App;
