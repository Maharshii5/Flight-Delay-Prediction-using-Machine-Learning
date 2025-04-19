import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Delta', totalDelays: 324, weatherDelays: 120, mechanicalDelays: 84, airTrafficDelays: 120 },
  { name: 'United', totalDelays: 280, weatherDelays: 98, mechanicalDelays: 62, airTrafficDelays: 120 },
  { name: 'American', totalDelays: 410, weatherDelays: 142, mechanicalDelays: 105, airTrafficDelays: 163 },
  { name: 'Southwest', totalDelays: 235, weatherDelays: 75, mechanicalDelays: 55, airTrafficDelays: 105 },
  { name: 'JetBlue', totalDelays: 185, weatherDelays: 60, mechanicalDelays: 45, airTrafficDelays: 80 },
];

const DelaysByAirlineChart: React.FC = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            formatter={(value, name) => {
              const formattedName = name === 'totalDelays' 
                ? 'Total Delays' 
                : name === 'weatherDelays'
                ? 'Weather Delays'
                : name === 'mechanicalDelays'
                ? 'Mechanical Delays'
                : 'Air Traffic Delays';
              return [value, formattedName];
            }}
          />
          <Legend 
            formatter={(value) => {
              const formattedValue = value === 'totalDelays' 
                ? 'Total Delays' 
                : value === 'weatherDelays'
                ? 'Weather Delays'
                : value === 'mechanicalDelays'
                ? 'Mechanical Delays'
                : 'Air Traffic Delays';
              return <span className="text-xs font-medium">{formattedValue}</span>;
            }}
          />
          <Bar dataKey="weatherDelays" stackId="a" fill="#3B82F6" />
          <Bar dataKey="mechanicalDelays" stackId="a" fill="#F97316" />
          <Bar dataKey="airTrafficDelays" stackId="a" fill="#8B5CF6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DelaysByAirlineChart;