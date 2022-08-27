import './App.css';


import Navbar from "./components/Navbar";
import InfoCard from './components/InfoCard';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <InfoCard />
      </div>
    </div>
  );
}

export default App;
