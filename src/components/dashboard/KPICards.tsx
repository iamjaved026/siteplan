
"use client";
import React from 'react';

const KPICards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white border-t-4 border-blue-500 rounded-lg shadow-md p-4">
        <div className="text-sm text-gray-500">Overall progress</div>
        <div className="text-2xl font-bold">67<span className="text-lg">%</span></div>
        <div className="text-sm text-green-500">+4% this week</div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '67%' }}></div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-orange-500 rounded-lg shadow-md p-4">
        <div className="text-sm text-gray-500">Budget spent</div>
        <div className="text-xl font-bold">$4.2M</div>
        <div className="text-sm text-red-500">+$210K over plan</div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: '78%' }}></div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-green-500 rounded-lg shadow-md p-4">
        <div className="text-sm text-gray-500">Tasks complete</div>
        <div className="text-2xl font-bold">18<span className="text-lg">/27</span></div>
        <div className="text-sm text-green-500">3 ahead of schedule</div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '66%' }}></div>
        </div>
      </div>
      <div className="bg-white border-t-4 border-yellow-500 rounded-lg shadow-md p-4">
        <div className="text-sm text-gray-500">Days remaining</div>
        <div className="text-2xl font-bold">42</div>
        <div className="text-sm text-gray-500">ETA: Aug 14, 2025</div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
          <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '55%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default KPICards;
