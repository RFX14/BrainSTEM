import '../../lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import '../../../App.css';
import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min";

const { ipcRenderer } = window.require('electron');

const TestMic = () => {
    const sensor = '5';
    const [isRecording, setRecording] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [rawDataArray, setRawDataArray] = useState([]);
    const [audioBuffer, setAudioBuffer] = useState();

    const SAMPLERATE = 512;
    const LIMIT = SAMPLERATE * 5; // Expected length of 5 secs of audio 

    function recordPressed() {
        setRecording(!isRecording); // toggle status

        if (isRecording) {
            // Erase array before recording new data
            if (rawDataArray.length > 0) {
                setRawDataArray([]);
            }
        } else {
            var normalRaw = [];
            let upperRange = 1;
            let lowerRange = -1;
            let maxNum = Math.max(rawDataArray);
            let minNum = Math.min(rawDataArray);

            // Normalize between [-1, 1] because audioBuffer wants that
            for (var i = 0; i < rawDataArray.length; i++) {
                let curr = rawDataArray[i];
                let normCurr = (lowerRange - upperRange) * ((curr - minNum) / (maxNum - minNum)) + lowerRange;
                normalRaw.push(normCurr);
            }

            // Create empty audio buffer to fill
            var audioCtx = new AudioContext();
            var rawLength = normalRaw.length;
            var buffer = audioCtx.createBuffer(1, normalRaw, SAMPLERATE);

            // Fill buffer from rawData (hopefully this works)
            var newBuffer = buffer.getChannelData(0);
            for (var i = 0; i < newBuffer.length; i++) {
                // Audio needs to be in [-1.0; 1.0]
                newBuffer[i] = normalRaw[i];
            }

            setAudioBuffer(newBuffer);
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