import '../../lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import '../../../App.css';

const { ipcRenderer } = window.require('electron');

const TestMic = () => {
    const sensor = '5';
    const [isRecording, setRecording] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [rawDataArray, setRawDataArray] = useState([]);

    const SAMPLERATE = 512;
    const LIMIT = SAMPLERATE * 5; // Expected length of 5 secs of audio 

    function recordPressed() {
        setRecording(!isRecording); // toggle status

        // Erase array before recording new data
        if (rawDataArray.length > 0) {
            setRawDataArray([]);
        }
    }

    function playPressed() {
        setPlaying(!isPlaying); // toggle status
    }

    // Only used when array isn't full, and button record hasn't been pressed yet
    useEffect(() => {
        if (rawDataArray.length < LIMIT && isRecording) {    
            const addData = data => {
                const newData = ipcRenderer.sendSync('readData', sensor);
                return [...data, newData];
            }
        }
    });

    return (
        <div className='container2'>
            <button className='btn' onClick={recordPressed}> {isRecording ? 'Stop' : 'Record'} </button>
            <button className='btn' onClick={playPressed}> {isPlaying ? 'Pause' : 'Play'} </button>
        </div>
    );
}

export default TestMic