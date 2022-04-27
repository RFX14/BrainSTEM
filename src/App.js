import Header from './components/Header';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Button from './components/Button';
import SensorHome from './components/SensorHome';
import QuizPage from './components/QuizPage';

import TestSerial from './components/TestSerial';
import TestMic from './components/lessons/microphone/testMic';

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
import ThermistorAdvancedLessonPlan from './components/lessons/thermistor/ThermistorAdvancedLessonPlan';
import MicrophoneAdvancedLessonPlan from './components/lessons/microphone/MicrophoneAdvacnedLessonPlan';
import PIRAdvancedLessonPlan from './components/lessons/pir/PIRAdvancedLessonPlan';
import FreqDomain from './components/lessons/microphone/FreqDomain';
import TimeDomain from './components/lessons/microphone/TimeDomain';
import MicDemo1 from './components/lessons/microphone/Demo1';
import EffectsDemo from './components/lessons/microphone/EffectsDemo';
import ThermistorDemo2 from './components/lessons/thermistor/Demo2';
import StrainDemo2 from './components/lessons/strain/Demo2';
import StrainAdvancedLessonPlan from './components/lessons/strain/StrainAdvanced';
import PhotocellDemo2 from './components/lessons/photocell/Demo2';
import MicAdvDemo2 from './components/lessons/microphone/Demo2Adv';
import PIRDemo2 from './components/lessons/pir/Demo2';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={
          <div className="container">
            <h2>Available Sensors</h2> 
            
            { /*
            <br/>
            <Button text='Test Serial' link='/testserial' color='red'/>
            <Button text='Test Mic' link='/mic/effectsdemo' color='red'/>
            
            <br/>
            */ }
            <br/>

            <Button text='Thermistor' link='/thermistor'/>
            <Button text='Microphone' link='/microphone'/>
            <Button text='Motion Sensor' link='/motion'/>
            <Button text='Strain Gauge' link='/strain'/>
            <Button text='Light Sensor' link='/light'/>
          </div>
        }/>

        <Route path='testserial' element={<TestSerial useResistorValue={true} sensor='0'/>} />
        <Route path='/testmic' element={<TestMic />}/>

        {/* Sensor Page Links */}
        <Route path='/thermistor' element={<SensorHome title='Thermistor' quizLink='/thermistor/quizB' quizLinkA='/thermistor/quizA' beginnerLink='/thermistor/blesson' advancedLink='/thermistor/alesson'/>} />
        <Route path='/microphone' element={<SensorHome title='Microphone' quizLink='/microphone/quizB' quizLinkA='/microphone/quizA' beginnerLink='/microphone/blesson' advancedLink='/microphone/alesson'/>} />
        <Route path='/motion' element={<SensorHome title='Motion Sensor' quizLink='/motion/quizB' quizLinkA='/motion/quizA' beginnerLink='/motion/blesson' advancedLink='/motion/alesson'/>} />
        <Route path='/strain' element={<SensorHome title='Strain Gauge' quizLink='/strain/quizB' quizLinkA='/strain/quizA' beginnerLink='/strain/blesson' advancedLink='/strain/alesson'/>} />
        <Route path='/light' element={<SensorHome title='Light Sensor' quizLink='/photocell/quizB' quizLinkA='/photocell/quizA' beginnerLink='/photocell/blesson' advancedLink='/photocell/alesson'/>} />


        {/* Assesment Quiz Links */}
        <Route path='/thermistor/quizB' element={<QuizPage quizName='thermB' />} />
        <Route path='/thermistor/quizA' element={<QuizPage quizName='thermA' />} />

        <Route path='/microphone/quizB' element={<QuizPage quizName='microB' />} />
        <Route path='/microphone/quizA' element={<QuizPage quizName='microA' />} />

        <Route path='/motion/quizB' element={<QuizPage quizName='pirB' />} />
        <Route path='/motion/quizA' element={<QuizPage quizName='pirA' />} />

        <Route path='/strain/quizB' element={<QuizPage quizName='strainB' />} />
        <Route path='/strain/quizA' element={<QuizPage quizName='strainA' />} />

        <Route path='/photocell/quizB' element={<QuizPage quizName='photoB' />} />
        <Route path='/photocell/quizA' element={<QuizPage quizName='photoA' />} />
        

        {/* Lesson Plan Links */}
        <Route path='/thermistor/blesson' element={<ThermistorLessonPlan />} />
        <Route path='/thermistor/alesson' element={<ThermistorAdvancedLessonPlan />} />

        <Route path='/microphone/blesson' element={<MicrophoneLessonPlan />} />
        <Route path='/microphone/alesson' element={<MicrophoneAdvancedLessonPlan />} />

        <Route path='/motion/blesson' element={<PIRLessonPlan />} />
        <Route path='/motion/alesson' element={<PIRAdvancedLessonPlan />} />

        <Route path='/strain/blesson' element={<StrainLessonPlan />} />
        <Route path='/strain/alesson' element={<StrainAdvancedLessonPlan />} />

        <Route path='/photocell/blesson' element={<PhotocellLessonPlan />} />
        <Route path='/photocell/alesson' element={<PhotocellAdvancedLessonPlan />} />

        {/* Sensor Demo Links */}
        <Route path='/thermistor/demo1' element={<ThermistorDemo1/>} />
        <Route path='/thermistor/demo2' element={<ThermistorDemo2 />} />
        
        <Route path='/mic/demo1' element={<MicDemo1 />} />
        <Route path='/mic/demo2' element={<TimeDomain />} />
        <Route path='/mic/timedomain' element={<TimeDomain />} />
        <Route path='/mic/freqdomain' element={<FreqDomain />} />
        <Route path='/mic/effectsdemo' element={<EffectsDemo />} />
        <Route path='/mic/demoAdv2' element={<MicAdvDemo2 />} />

        <Route path='/motion/demo1' element={<PIRDemo1/>} />
        <Route path='/motion/demo2' element={<PIRDemo2 />} />

        <Route path='/strain/demo1' element={<StrainDemo1/>} />
        <Route path='/strain/demo2' element={<StrainDemo2 />} />

        <Route path='/photocell/demo1' element={<PhotocellDemo1/>} />
        <Route path='/photocell/demo2' element={<PhotocellDemo2 />} />

      </Routes>
    </Router>
  );
}

export default App;
