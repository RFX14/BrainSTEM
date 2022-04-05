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
        <div className='container2'>
            <h1>Frequency Domain</h1>

            <ReactMic
            record={record}
            visualSetting="frequencyBars"
            className="sound-wave"
            onStop={() => onStop}
            strokeColor="#000000"
            backgroundColor="#FFFFFF" 
            />

            <button className='btn' onClick={() => setRecord(!record)}> {record ? "Stop" : "Play"} </button>
            <Button link='/mic/timedomain' color='black' text='Change View' />
        </div>
    );
}

export default TimeDomain