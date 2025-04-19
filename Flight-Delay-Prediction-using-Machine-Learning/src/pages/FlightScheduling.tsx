import React from 'react';
import { Calendar, Clock, Plane } from 'lucide-react';

const FlightScheduling = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Flight Scheduling</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Plane className="h-5 w-5" />
          Schedule New Flight
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-6 w-6 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-800">Today's Schedule</h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((flight) => (
              <div key={flight} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="font-medium text-gray-900">Flight AA{flight}23</p>
                  <p className="text-sm text-gray-600">LAX → JFK</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">09:0{flight} AM</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="h-6 w-6 text-green-600" />
            <h2 className="text-lg font-semibold text-gray-800">Available Aircraft</h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((aircraft) => (
              <div key={aircraft} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="font-medium text-gray-900">Boeing 73{aircraft}</p>
                  <p className="text-sm text-gray-600">Registration: N{aircraft}23AA</p>
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Available
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-6 w-6 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-800">Upcoming Maintenance</h2>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((maintenance) => (
              <div key={maintenance} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <p className="font-medium text-gray-900">Aircraft N{maintenance}45AA</p>
                  <p className="text-sm text-gray-600">Type: Routine Check</p>
                </div>
                <span className="text-sm text-gray-600">In {maintenance} days</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightScheduling;