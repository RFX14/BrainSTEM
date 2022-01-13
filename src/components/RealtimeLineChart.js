import Chart from 'react-apexcharts';

const RealtimeLineChart = ({dataList, range, yAxisLabel}) => {
    const options = {
        chart: {
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            toolbar: {
                show: false
            },
            stroke: {
                curve: 'smooth'
            },
        },
        zoom: {
            enabled: false
        },
        xaxis: {
            labels: {
                show: false
            },
            range: range
        },
        yaxis: {
            decimalsInFloat: '2',
            title: {
                text: yAxisLabel
            }
        },
    };
    
    return (
        <Chart type='line' options={options} series={dataList} />
    );
}

export default RealtimeLineChart