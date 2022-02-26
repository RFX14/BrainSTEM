import './lib/dropdownStyles.css';
import { useState, useEffect } from 'react';
import RealtimeLineChart from './RealtimeLineChart';

const { ipcRenderer } = window.require('electron');
const TIME_RANGE_IN_MS = 20;
const ADD_NEW_DATA_IN_MS = 1000;

const SerialPlot = ({useConvertedValue, getVoltageValue, getConvertedValue, convertedUnits, sensor}) => {
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
            const newData = ipcRenderer.sendSync('readData', sensor);

            return [...data, {
                x: new Date(),
                y: (useConvertedValue) ? getConvertedValue(newData) : getVoltageValue(newData)
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
            <RealtimeLineChart dataList={dataList} range={TIME_RANGE_IN_MS} yAxisLabel={(useConvertedValue ? convertedUnits : 'Voltage')}/>
        </div>
    );
}

export default SerialPlot
