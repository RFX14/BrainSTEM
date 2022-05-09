import '../../lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import '../../../App.css';
import { ReactMic } from 'react-mic'
import React from 'react';

const TestMic = () => {
    const [record, updateRecord] = useState(false);
    const [isTimeDomain, updateDomain] = useState(true);

    function onData(recordedBlob) {
        console.log('realtime data: ', recordedBlob)
    }

    function onStop(recordedBlob) {
        console.log('recordedBlob is: ', recordedBlob);
    }

    // ! Consider putting each in its own component to fix issues
    return (
        <div className='container2'>
            <h1>{isTimeDomain ? "Time Domain" : "Freq. Domain"}</h1>
            
            <ReactMic
            record={record}
            className="sound-wave"
            onStop={onStop}
            onData={onData}
            strokeColor="#000000"
            backgroundColor="#FFFFFF" 
            />

            <ReactMic
            record={record}
            visualSetting="frequencyBars"
            className="sound-wave"
            strokeColor="#000000"
            backgroundColor="#FFFFFF" 
            />

            <button className='btn' onClick={() => updateRecord(true)} type="button">Start</button>
            <button className='btn' onClick={() => updateRecord(false)} type="button">Stop</button>

            <button className='btn' onClick={() => updateDomain(isTimeDomain ? false : true)} type="button"> {isTimeDomain ? "View Frequency Domain" : "View Time Domain" }</button>
        </div>
    );
}

export default TestMic