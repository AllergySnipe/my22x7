import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Button } from 'antd';

const DoughnutChart = ({ timeLine, legend, dataSet, height, width, downloadAsImage }) => {
    let chartReference = React.createRef();
    const backgroundColor = [
        "#0074D9",
        "#FF4136",
        "#2ECC40",
        "#FF851B",
        "#7FDBFF",
        "#B10DC9",
        "#FFDC00",
        "#001f3f",
        "#39CCCC",
        "#01FF70",
        "#85144b",
        "#F012BE",
        "#3D9970",
        "#111111",
        "#AAAAAA"
    ];

    const chart = <Doughnut
        data={
            {
                labels: timeLine,
                datasets: [
                    {
                        label: legend,
                        data: dataSet,
                        borderWidth: 1,
                        backgroundColor: backgroundColor,
                    }
                ]
            }
        }
        height={height}
        width={width}
        ref={chartReference}
        options={
            {
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },

            }
        }
    />;

    const download = () => {
        const imageLink = chartReference.current.chartInstance.toBase64Image();
        downloadAsImage(imageLink);
    }

    const final = (
        <>
            <Button onClick={download} >Download Chart</Button>
            {chart}
        </>
    )


    return (
        final
    );
}

export default DoughnutChart;