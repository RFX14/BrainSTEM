import '../../lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import '../../../App.css';
import { ReactMic } from 'react-mic'
import React from 'react';
import Button from '../../Button';

const TimeDomain = () => {
    const [record, setRecord] = useState(false);

    function onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
    }

    return (
        <div>
            <div className='container2'>
                <p>Click the play button, and notice how your voice affects the chart! Notice that we can view audio in two different domains time and frequency, you can switch between them using the button down below!</p>
            </div>

            <div className='container2'>
                <h1>Time Domain</h1>

                <ReactMic
                record={record}
                visualSetting="sinewave"
                className="sound-wave"
                onStop={() => onStop}
                strokeColor="#000000"
                backgroundColor="#FFFFFF" 
                />

                <button className='btn' onClick={() => setRecord(!record)}> {record ? "Stop" : "Play"} </button>
                <Button link='/mic/freqdomain' color='black' text='Change View' />
            </div>
        </div>
    );
}

export default TimeDomain