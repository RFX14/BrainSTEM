import '../../lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import '../../../App.css';

const { ipcRenderer } = window.require('electron');

const TestMic = () => {
    const sensor = '5';
    const [isRecording, setRecording] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [rawDataArray, setRawDataArray] = useState([]);

    function recordPressed() {
        setRecording(!isRecording); // toggle status
    }

    function playPressed() {
        setPlaying(!isPlaying) // toggle status
    }
/* 
    if (false) {
        useEffect(() => {
            const addData = data => {
                const newData = ipcRenderer.sendSync('readData', sensor);
                return [...data, newData];
            }
        });
    }
    */

    return (
        <div className='container2'>
            <button className='btn' onClick={recordPressed}> {isRecording ? 'Stop' : 'Record'} </button>
            <button className='btn' onClick={playPressed}> {isPlaying ? 'Pause' : 'Play'} </button>
        </div>
    );
}

export default TestMic