import '../../lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import '../../../App.css';
import Button from '../../Button';

const { ipcRenderer } = window.require('electron');

const MicDemo1 = () => {
    const sensor = '5';
    const [measurement, setMeasurement] = useState(0.0);
    setInterval(getNewData, 500);

    function getNewData() {
        setMeasurement(ipcRenderer.sendSync('readData', sensor));
        console.log(measurement);
    }

    return (
        <div>
            <div className='container2'>
                <p>Try getting the LED to light up! By clapping your hands!</p>

                <br/>
                <br/>

                <Button text='DEMO 2' link='/mic/demo2' />
            </div>
        </div>
    );
}

export default MicDemo1