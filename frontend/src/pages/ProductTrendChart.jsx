import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProductTrendChart = () => {
    const data = {
        labels: ['Week n-2', 'Week n-1', 'Week n', 'Week n+1', 'Week n+2', 'Week n+3', 'Week n+4', 'Week n+5', 'Week n+6', 'Week n+7', 'Week n+8'],
        datasets: [
            {
                label: 'Actual',
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
                borderColor: 'rgba(0, 123, 255, 1)',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                fill: true,
                tension: 0.4,
            },
            {
                label: 'Predicted',
                data: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Top Product Trend: Forecast vs Reality (Weekly Comparison)',
                font: {
                    size: 16,
                    weight: 'bold',
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 12,
                    },
                },
            },
            y: {
                ticks: {
                    font: {
                        size: 12,
                    },
                },
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default ProductTrendChart;
