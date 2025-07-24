import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Holdings',
        },
    },
    scales: {
        x: {
            ticks: {
                maxRotation: 45, // Rotate up to 45 degrees
                minRotation: 45,
                autoSkip: true,  // Automatically skip some labels
            },
        },
    }
};


export function VericalGraph({ data }) {
    return <div style={{ overflowX: "auto", width: "100%" }}>
        <Bar options={options} data={data} />
    </div>
}
