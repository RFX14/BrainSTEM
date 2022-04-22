import '../../lib/dropdownStyles.css';
import { useState } from 'react';
import '../../../App.css';
import image1 from '../pir/images/advPhoto.jpg';

const { ipcRenderer } = window.require('electron');

const PIRDemo2 = () => {
    const sensor = '3';
    const [measurement, setMeasurement] = useState(0.0);
    setInterval(getNewData, 500);

    function getNewData() {
        setMeasurement(ipcRenderer.sendSync('readData', sensor));
        console.log(measurement);
    }
    return (
        <div className='container2'>
            <p>Using the image below as reference play with the different dials, and notice how it affects when the LED will light up!</p>
            <img src={image1} width='500' />
        </div>
    );
}

export default PIRDemo2