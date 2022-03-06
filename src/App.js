import Header from './components/Header';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Button';
import SensorHome from './components/SensorHome';
import QuizPage from './components/QuizPage';

import TestSerial from './components/TestSerial';
import ThermistorDemo1 from './components/lessons/thermistor/Demo1';
import ThermistorLessonPlan from './components/lessons/thermistor/ThermistorLessonPlan';
import PhotocellLessonPlan from './components/lessons/photocell/PhotocellLessonPlan';
import PhotocellAdvancedLessonPlan from './components/lessons/photocell/PhotocellAdvancedLessonPlan';
import MicrophoneLessonPlan from './components/lessons/microphone/MicroponeLessonPlan';
import PIRLessonPlan from './components/lessons/pir/PIRLessonPlan';
import PhotocellDemo1 from './components/lessons/photocell/Demo1';
import PIRDemo1 from './components/lessons/pir/Demo1';
import StrainLessonPlan from './components/lessons/strain/StrainLessonPlan';
import StrainDemo1 from './components/lessons/strain/Demo1';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <div className="container">
            <h2>Available Sensors</h2> 
            
            <br/>

            <Button text='Test Serial' link='/testserial' color='red'/>

            <br/>
            <br/>

            <Button text='Thermistor' link='/thermistor'/>
            <Button text='Microphone' link='/microphone'/>
            <Button text='Motion Sensor' link='/motion'/>
            <Button text='Strain Gauge' link='/strain'/>
            <Button text='Light Sensor' link='/light'/>
          </div>
        }/>

        <Route path='testserial' element={<TestSerial useResistorValue={true} sensor='0'/>} />

        {/* Sensor Page Links */}
        <Route path='/thermistor' element={<SensorHome title='Thermistor' quizLink='/thermistor/prequiz' beginnerLink='/thermistor/blesson'/>} />
        <Route path='/microphone' element={<SensorHome title='Microphone' beginnerLink='/microphone/blesson' />}/>
        <Route path='/motion' element={<SensorHome title='Motion Sensor' beginnerLink='/motion/blesson' />} />
        <Route path='/strain' element={<SensorHome title='Strain Gauge' beginnerLink='/strain/blesson'/>} />
        <Route path='/light' element={<SensorHome title='Light Sensor' beginnerLink='/photocell/blesson' advancedLink='/photocell/alesson'/>} />

        {/* Assesment Quiz Links */}
        <Route path='/thermistor/prequiz' element={<QuizPage quizName='testQuiz' />} />

        {/* Lesson Plan Links */}
        <Route path='/thermistor/blesson' element={<ThermistorLessonPlan />} />

        <Route path='/microphone/blesson' element={<MicrophoneLessonPlan />} />

        <Route path='/motion/blesson' element={<PIRLessonPlan />} />

        <Route path='/strain/blesson' element={<StrainLessonPlan />} />

        <Route path='/photocell/blesson' element={<PhotocellLessonPlan />} />
        <Route path='/photocell/alesson' element={<PhotocellAdvancedLessonPlan />} />

        {/* Sensor Demo Links */}
        <Route path='/thermistor/demo1' element={<ThermistorDemo1/>} />

        <Route path='/motion/demo1' element={<PIRDemo1/>} />

        <Route path='/strain/demo1' element={<StrainDemo1/>} />

        <Route path='/photocell/demo1' element={<PhotocellDemo1/>} />

      </Routes>
    </Router>
  );
}

export default App;
