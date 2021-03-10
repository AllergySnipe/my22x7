import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({ timeLine, legend, dataSet }) => {

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


    return (
        <Doughnut
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
            height={600}
            width={800}
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
        />
    );
}

export default DoughnutChart;