import React from 'react';

function GateSimulation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Gate Simulation</h1>
        <p className="mt-2 text-gray-600">Real-time gate allocation and simulation dashboard</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Gate Allocation Map</h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Interactive gate map will be displayed here</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Simulation Controls</h2>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Simulation Speed</label>
              <input 
                type="range" 
                min="1" 
                max="10" 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Start Simulation
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Current Statistics</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Active Gates</p>
              <p className="text-2xl font-bold text-gray-900">24/32</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Waiting Aircraft</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Average Wait Time</p>
              <p className="text-2xl font-bold text-gray-900">12m</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Efficiency Score</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Event Log</h2>
          <div className="space-y-3 max-h-[300px] overflow-y-auto">
            {[
              { time: '12:45', event: 'Gate A3 assigned to Flight AA123' },
              { time: '12:42', event: 'Flight UA456 departed from Gate B2' },
              { time: '12:38', event: 'New arrival: Flight DL789 requesting gate' },
              { time: '12:35', event: 'Gate C1 maintenance completed' },
            ].map((log, index) => (
              <div key={index} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded">
                <span className="text-sm font-medium text-gray-500">{log.time}</span>
                <span className="text-sm text-gray-700">{log.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GateSimulation;
