import Chart from 'react-apexcharts';

const RealtimeLineChart = ({dataList, range}) => {
    const options = {
        chart: {
            zoom: {
                enabled: false
            },
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            xaxis: {
                type: 'datatime',
                range: range
            },
            yaxis: {
                labels: {
                    formatter: val => val.toFixed(0)
                },
                title: {
                    text: 'Value'
                }
            },
            toolbar: {
                show: false
            },
            stroke: {
                curve: 'smooth'
            },
        },
    };
    
    return (
        <Chart type='line' options={options} series={dataList} />
    );
}

export default RealtimeLineChart