import ReactDropdown from 'react-dropdown';
import './lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import RealtimeLineChart from './RealtimeLineChart';

const { ipcRenderer } = window.require('electron');
const TIME_RANGE_IN_MS = 20;
const ADD_NEW_DATA_IN_MS = 1000;

const c1 = 1.009249522e-03
const c2 = 2.378405444e-04
const c3 = 2.019202697e-07
const RESISTOR = 10000

const TestSerial = ({useResistorValue, sensor}) => {
    //const [selectedMode, updateSelection] = useState(-1);
    //const [data, updateData] = useState('no-data');

    const nameList = ['a'];
    const defaultDataList = nameList.map(name => ({
        name: name,
        data: []
    }));
    const [dataList, setDataList] = useState(defaultDataList);

    //Update Chart when new data available
    useEffect(() => {
        console.log('UseEffect update chart!')
        const addData = data => {
            //const newData = ipcRenderer.sendSync('readData');
            const newData = ipcRenderer.sendSync('readData', sensor);
            console.log(newData);
            const resistorValue = RESISTOR / (1023.0 / newData - 1.0);
            const voltage = .0005 * resistorValue

            return [...data, {
                x: new Date(),
                y: (useResistorValue) ? resistorValue : voltage
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

            <RealtimeLineChart dataList={dataList} range={TIME_RANGE_IN_MS} yAxisLabel={(useResistorValue ? 'Resistance' : 'Voltage')}/>
        </div>
    );
}

export default TestSerial
