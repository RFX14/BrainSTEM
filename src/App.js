import Header from './components/Header';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Button';
import SensorHome from './components/SensorHome';
import QuizPage from './components/QuizPage';

import TestSerial from './components/TestSerial';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <div className="container">
            <h2>Available Sensors</h2> 
            
            <br/>

            <Button text='Test Serial' link='/testserial'/>

            <br/>

            <Button text='Thermistor' link='/thermistor'/>
            <Button text='Microphone' link='/microphone'/>
            <Button text='Motion Sensor' link='/motion'/>
            <Button text='Strain Gauge' link='/strain'/>
            <Button text='Light Sensor' link='/light'/>
          </div>
        }/>

        <Route path='testserial' element={<TestSerial/>} />

        <Route path='/thermistor' element={<SensorHome title='Thermistor' quizLink='/thermistor/prequiz'/>} />
        <Route path='/microphone' element={<SensorHome title='Microphone'/>} />
        <Route path='/motion' element={<SensorHome title='Motion Sensor'/>} />
        <Route path='/strain' element={<SensorHome title='Strain Gauge'/>} />
        <Route path='/light' element={<SensorHome title='Light Sensor'/>} />

        <Route path='/thermistor/prequiz' element={<QuizPage quizName='testQuiz' />} />
      </Routes>
    </Router>
  );
}

export default App;
