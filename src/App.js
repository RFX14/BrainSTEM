import Header from './components/Header';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Button from './components/Button';

function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={
          <div className="container">
            <h2>Available Sensors</h2> 
            
            <br/>

            <Button text='Thermistor'/>
            <Button text='Microphone'/>
            <Button text='Motion Sensor'/>
            <Button text='Strain Gauge'/>
            <Button text='Light Sensor'/>
          </div>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
