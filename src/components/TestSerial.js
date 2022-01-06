import ReactDropdown from 'react-dropdown';
import './lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import RealtimeLineChart from './RealtimeLineChart';

const { ipcRenderer } = window.require('electron');

/*
    TODO: 
        [] Figure out ChartJS
 */

const TIME_RANGE_IN_MS = 500;
const ADD_NEW_DATA_IN_MS = 1000;

const TestSerial = () => {
    //const [selectedMode, updateSelection] = useState(-1);
    //const [data, updateData] = useState('no-data');

    const nameList = ['a', 'b', 'c'];
    const defaultDataList = nameList.map(name => ({
        name: name,
        data: []
    }));
    const [dataList, setDataList] = useState(defaultDataList);

/* 
    //Update Mode
    useEffect(() => {
        ipcRenderer.sendSync('updateMode', selectedMode);
    }, [selectedMode]);

    //Read Data
    ipcRenderer.send('requestData', 'gimmie data');
    ipcRenderer.on('readData', (event, args) => {
        updateData(args);
    });
*/
    //Update Chart when new data available
    useEffect(() => {
        console.log('UseEffect update chart!')
        const addData = data => {
            const newData = ipcRenderer.sendSync('readData');
            return [...data, {
                x: new Date(),
                y: newData
            }];
        };

        const interval = setInterval(() => {
            setDataList(
                dataList.map(val => {
                    return {
                        name: val.name,
                        data: addData(val.data)
                    };
                })
            );
        }, ADD_NEW_DATA_IN_MS);

        return () => clearInterval(interval);
    });

    return (
        <div className='container2'>
            <h3>Recieved Msg: </h3>
            

            <br/>

            <RealtimeLineChart dataList={dataList} range={TIME_RANGE_IN_MS} />
        </div>
    );
}

export default TestSerial
