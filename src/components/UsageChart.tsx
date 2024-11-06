import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function UsageChart() {
  const data = {
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label: 'Registrations',
        data: [600, 500, 550, 700, 650, 600, 580],
        borderColor: 'rgba(59, 130, 246, 1)', // blue color for registrations
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
      },
      {
        label: 'Referrals',
        data: [200, 180, 190, 250, 230, 220, 210],
        borderColor: 'rgba(236, 72, 153, 1)', // pink color for referrals
        backgroundColor: 'rgba(236, 72, 153, 0.2)',
        pointBackgroundColor: 'rgba(236, 72, 153, 1)',
        pointBorderColor: '#fff',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white', // set legend text color to white
        },
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    scales: {
      x: {
        ticks: { color: 'white' }, // set x-axis text color to white
        grid: {
          display: false, // optional: remove x-axis grid lines for a cleaner look
        },
      },
      y: {
        ticks: { color: 'white' }, // set y-axis text color to white
        beginAtZero: true,
        grid: {
          display: false, // optional: remove y-axis grid lines for a cleaner look
        },
      },
    },
  };
  
  return (
    <div className="w-full h-80 bg-black/90 rounded-lg p-4 text-white">
      <h2 className="text-lg font-semibold mb-4">Last 7 Days: Registrations vs Referrals</h2>
      <Line data={data} options={options} />
    </div>
  );
}
