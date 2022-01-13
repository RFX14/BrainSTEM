import ReactDropdown from 'react-dropdown';
import './lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import RealtimeLineChart from './RealtimeLineChart';

const { ipcRenderer } = window.require('electron');
const TIME_RANGE_IN_MS = 500;
const ADD_NEW_DATA_IN_MS = 1000;

const c1 = 1.009249522e-03
const c2 = 2.378405444e-04
const c3 = 2.019202697e-07
const RESISTOR = 10000

const TestSerial = ({useResistorValue}) => {
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
            const newData = ipcRenderer.sendSync('readData');
            const resistorValue = RESISTOR * (1023.0 / newData - 1.0);
            const logResistor = Math.log(resistorValue);
            var farenheit = (1.0 / (c1 + c2*logResistor + c3*Math.pow(logResistor, 3)));
            farenheit = farenheit - 273.15;
            farenheit = ((farenheit * 9.0) / 5.0) + 32.0;

            return [...data, {
                x: new Date(),
                y: (useResistorValue) ? resistorValue : farenheit
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

            <RealtimeLineChart dataList={dataList} range={TIME_RANGE_IN_MS} yAxisLabel={(useResistorValue ? 'Resistance' : 'Temperature (F)')}/>
        </div>
    );
}

export default TestSerial
