
'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const data = {
    labels: ['On-time', 'At risk', 'Delayed'],
    datasets: [
      {
        data: [15, 7, 5],
        backgroundColor: ['#639922', '#EF9F27', '#D85A30'],
        borderColor: ['#EAF3DE', '#FAEEDA', '#FAECE7'],
        borderWidth: 3,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '62%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (c: any) {
            const total = c.dataset.data.reduce((a: any, b: any) => a + b, 0);
            const pct = Math.round((c.parsed / total) * 100);
            return c.label + ': ' + c.parsed + ' tasks (' + pct + '%)';
          },
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Time prediction</h3>
          <span className="text-sm text-gray-500">27 tasks</span>
        </div>
        <div className="relative h-40">
          <Doughnut data={data} options={options} />
        </div>
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <div className="flex items-center"><span className="w-3 h-3 bg-green-500 rounded-sm mr-2"></span>On-time</div>
            <div><span className="font-bold text-green-800">15 tasks</span> <span className="text-gray-500">56%</span></div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center"><span className="w-3 h-3 bg-yellow-500 rounded-sm mr-2"></span>At risk</div>
            <div><span className="font-bold text-yellow-800">7 tasks</span> <span className="text-gray-500">26%</span></div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center"><span className="w-3 h-3 bg-orange-500 rounded-sm mr-2"></span>Delayed</div>
            <div><span className="font-bold text-orange-800">5 tasks</span> <span className="text-gray-500">18%</span></div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Weather impact</h3>
          <a href="#" className="text-sm text-gray-500">7-day</a>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-100 p-2 rounded-lg">
            <div className="w-8 h-8 mx-auto bg-yellow-200 rounded-full flex items-center justify-center">☀️</div>
            <div className="font-bold">38°C</div>
            <div className="text-sm text-gray-500">Today</div>
            <div className="text-xs text-yellow-700">Heat delay</div>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg">
            <div className="w-8 h-8 mx-auto bg-blue-200 rounded-full flex items-center justify-center">🌧️</div>
            <div className="font-bold">Heavy</div>
            <div className="text-sm text-gray-500">Thu–Fri</div>
            <div className="text-xs text-red-700">Concrete hold</div>
          </div>
          <div className="bg-gray-100 p-2 rounded-lg">
            <div className="w-8 h-8 mx-auto bg-green-200 rounded-full flex items-center justify-center">☁️</div>
            <div className="font-bold">28°C</div>
            <div className="text-sm text-gray-500">Weekend</div>
            <div className="text-xs text-green-700">Clear to work</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
