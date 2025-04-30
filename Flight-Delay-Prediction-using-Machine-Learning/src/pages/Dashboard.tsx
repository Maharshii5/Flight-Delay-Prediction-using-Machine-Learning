import React from 'react';
import { Clock, Plane, Cloud, AlertTriangle } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import DelaysByAirlineChart from '../components/dashboard/DelaysByAirlineChart';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Flight Delay Analytics</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Last updated:</span>
          <span className="text-sm font-medium">March 15, 2024 09:30 AM EST</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Average Delay Time"
          value="32.5 min"
          change="+5.2%"
          trend="up"
          icon={<Clock className="h-6 w-6 text-blue-600" />}
        />
        <StatCard
          title="Total Delayed Flights"
          value="1,432"
          change="-2.3%"
          trend="down"
          icon={<Plane className="h-6 w-6 text-blue-600" />}
        />
        <StatCard
          title="Weather-Related Delays"
          value="495"
          change="+8.7%"
          trend="up"
          icon={<Cloud className="h-6 w-6 text-blue-600" />}
        />
        <StatCard
          title="Critical Delays (>2h)"
          value="89"
          change="-12.4%"
          trend="down"
          icon={<AlertTriangle className="h-6 w-6 text-blue-600" />}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Delays by Airline</h2>
          <DelaysByAirlineChart />
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">Weather Impact Analysis</h2>
          <div className="flex h-[300px] items-center justify-center">
            <p className="text-gray-500">Weather impact chart will be implemented next</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recent Flight Delays</h2>
          <button className="rounded-md bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-100">
            View All
          </button>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Flight
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Route
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Delay
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {[
                {
                  flight: 'DL1234',
                  route: 'JFK → LAX',
                  delay: '45 min',
                  reason: 'Weather',
                  status: 'Departed',
                },
                {
                  flight: 'UA789',
                  route: 'ORD → SFO',
                  delay: '120 min',
                  reason: 'Technical',
                  status: 'Scheduled',
                },
                {
                  flight: 'AA456',
                  route: 'MIA → DFW',
                  delay: '30 min',
                  reason: 'Air Traffic',
                  status: 'Boarding',
                },
              ].map((flight, idx) => (
                <tr key={idx}>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">{flight.flight}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {flight.route}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {flight.delay}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {flight.reason}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      flight.status === 'Departed'
                        ? 'bg-green-100 text-green-800'
                        : flight.status === 'Boarding'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {flight.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
