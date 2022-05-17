import './App.css';


import Navbar from "./components/Navbar";
import InfoCard from './components/InfoCard';
import Animation from './components/Animation';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <Animation />
        <InfoCard />
      </div>
    </div>
  );
}

export default App;
