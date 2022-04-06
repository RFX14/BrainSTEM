import '../../lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import '../../../App.css';
import { ReactMic } from 'react-mic'
import React from 'react';
import Button from '../../Button';
import * as Tone from 'tone'

var player = null;
const EffectsDemo = () => {
    const [record, setRecord] = useState(false);
    const [recordedData, setData] = useState();

    function onData(data) {
        if(player != null) {
            player.stop();
        }
    }

    function onStop(data) {
        setData(data);
        console.log('recordedBlob is: ', data);

        const blobUrl = URL.createObjectURL(data.blob);
        console.log(blobUrl)
        if(player != null) {
            player.dispose();
        }
        player = new Tone.Player(blobUrl, () => {
            console.log(player.loaded)
            const filter = new Tone.AutoFilter(10, 300, 4).start();
            const og = new Tone.Distortion(0.1);
            player.loop = true
            player.chain(filter, Tone.Destination);
            player.start()
        }).toDestination()
    }

    return (
        <div>
            <div className='container2'>
                <p>Record some audio, after selecting what effects to apply! Notice how bitrate effects audio quality! And play around with some pitch shifting!</p>
            </div>

            <div className='container2'>
                <h1>Time Domain</h1>

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

                <button className='btn' onClick={() => setRecord(!record)}> {record ? "Stop" : "Start"} </button>
                <Button link='/mic/freqdomain' color='black' text='Change View' />
            </div>
        </div>
    );
}

export default EffectsDemo