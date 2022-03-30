import '../../lib/dropdownStyles.css';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import '../../../App.css';
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import TimelinePlugin from "wavesurfer.js/dist/plugin/wavesurfer.timeline.min";


const { ipcRenderer } = window.require('electron');

const TestMic = () => {
    const sensor = '5';
    const [isRecording, setRecording] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [rawDataArray, setRawDataArray] = useState([]);
    const [audioBuffer, setAudioBuffer] = useState();

    const SAMPLERATE = 16000;
    const LIMIT = SAMPLERATE * 5; // Expected length of 5 secs of audio 

    function recordPressed() {
        setRecording(!isRecording); // toggle status

        if (isRecording) {
            // Erase array before recording new data
            if (rawDataArray.length > 0) {
                setRawDataArray([]);
            }
        } else if (!isRecording && rawDataArray.length > 0) {
            // Create buffer once done recording
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
            console.log(newBuffer);
        }
    }

    function playPressed() {
        if (rawDataArray.length > 0 && !isRecording) {
            setPlaying(true);
            play();
            console.log('playing!')
        } else {
            setPlaying(false);
            console.log('noothing to play');
        }
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

    // Wave stuff 
    const plugins = useMemo(() => {
        return [
            true && {
                plugin: TimelinePlugin,
                options: {
                container: "#timeline"
                }
            }
        ].filter(Boolean);
    }, []);

    const wavesurferRef = useRef();
    const handleWSMount = useCallback((waveSurfer) => {
        wavesurferRef.current = waveSurfer;

        if (wavesurferRef.current) {
            //wavesurferRef.current.load("/bensound-ukulele.mp3");
            wavesurferRef.current.loadDecodedBuffer(audioBuffer);

            wavesurferRef.current.on("ready", () => {
                console.log("WaveSurfer is ready");
            });

            wavesurferRef.current.on("loading", (data) => {
                console.log("loading --> ", data);
            });

            if (window) {
                window.surferidze = wavesurferRef.current;
            }
        }
    }, []);

    const play = useCallback(() => {
        wavesurferRef.current.playPause();
    }, []);

    return (
        <div className='container2'>
            <WaveSurfer plugins={plugins} onMount={handleWSMount}>
                <WaveForm id="waveform" hideCursor cursorColor="transparent"></WaveForm>
                <div id="timeline" />
            </WaveSurfer>


            <button className='btn' onClick={recordPressed}> {isRecording ? 'Stop' : 'Record'} </button>
            <button className='btn' onClick={playPressed}> {isPlaying ? 'Pause' : 'Play'} </button>
        </div>
    );
}

export default TestMic