import '../../lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import '../../../App.css';
import { ReactMic } from 'react-mic'
import React from 'react';
import Button from '../../Button';
import * as Tone from 'tone'
import Slider from '@material-ui/core/Slider'

var player = null;
var bits = 4;
var pitch = 0;
const EffectsDemo = () => {
    const [record, setRecord] = useState(false);
    const [recordedData, setData] = useState();
    const [bitDepth, changeBits] = useState(bits);
    const [pitchShift, changePitch] = useState(pitch);

    function updateBitStuff(data) {
        changeBits(data);
        bits = data;
    }

    function updatePitchStuff(data) {
        changePitch(data);
        pitch = data;
    }

    function onData(data) {
        console.log(bitDepth);
        if(player != null) {
            player.stop();
        }
    }

    function onStop(data) {
        setData(data);
        console.log('recordedBlob is: ', bits);

        const blobUrl = URL.createObjectURL(data.blob);
        console.log(blobUrl)
        if(player != null) {
            player.dispose();
        }
        player = new Tone.Player(blobUrl, () => {
            console.log(player.loaded)
            const shifted = new Tone.PitchShift(pitch);
            const filter = new Tone.BitCrusher(bits);
            const distor = new Tone.Distortion(1);

            player.chain(shifted, filter, distor, Tone.Destination);
            player.loop = true
            player.start()
        }).toDestination()
    }

    return (
        <div>
            <div className='container2'>
                <p>Record some audio using your computer's microphone, after selecting what effects to apply! Notice how bitrate effects audio quality! And play around with some pitch shifting!</p>
            </div>

            <div className='container2'>
                <h1>Effects Demo</h1>

                <ReactMic
                record={record}
                visualSetting="sinewave"
                className="sound-wave"
                mimeType="audio/webm"
                onData={(recordedData) => onData(recordedData)}
                onStop={(recordedData) => onStop(recordedData)}
                strokeColor="#000000"
                backgroundColor="#FFFFFF" 
                />

                <button className='btn' onClick={() => setRecord(!record)}> {record ? "Stop" : "Record"} </button>
                
                <br />
                <br />

                <h3>Audio Bit Depth</h3>
                <Slider
                aria-label="Bit Depth"
                value={bitDepth}
                onChange={(e, value) => updateBitStuff(value)}
                valueLabelDisplay="auto"
                marks={true}
                step={1}
                min={4}
                max={16}
                />

                <br />
                <br />

                <h3>Pitch Shift</h3>
                <Slider
                aria-label="Pitch Shift"
                value={pitchShift}
                onChange={(e, value) => updatePitchStuff(value)}
                valueLabelDisplay="auto"
                marks={true}
                step={1}
                min={-8}
                max={8}
                />
            </div>
        </div>
    );
}

export default EffectsDemo