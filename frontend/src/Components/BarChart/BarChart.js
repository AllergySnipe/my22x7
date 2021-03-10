import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ timeLine, dataSet, legend }) => {

    const bgColor = ['rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'];
    let backgroundColor = [...bgColor];
    let n = dataSet.length / 6;

    for (let i = 0; i < n; i++) {
        backgroundColor = [...backgroundColor, ...bgColor];
    }

    return (
        <Bar
            data={{
                labels: timeLine,
                datasets: [
                    {
                        label: legend,
                        data: dataSet,
                        borderWidth: 1,
                        backgroundColor: backgroundColor,
                    }
                ]
            }}
            height={600}
            width={800}
            options={{
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }} />
    );
}

export default BarChart;