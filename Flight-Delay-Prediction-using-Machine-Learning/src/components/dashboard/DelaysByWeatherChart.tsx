import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { format, subDays } from 'date-fns';

// Generate sample data for the last 7 days
const data = Array.from({ length: 7 }, (_, i) => {
  const date = subDays(new Date(), i);
  return {
    date: format(date, 'MMM dd'),
    precipitation: Math.floor(Math.random() * 40) + 10,
    visibility: Math.floor(Math.random() * 30) + 20,
    windSpeed: Math.floor(Math.random() * 25) + 15,
    delayMinutes: Math.floor(Math.random() * 60) + 30,
  };
}).reverse();

const DelaysByWeatherChart: React.FC = () => {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="delayMinutes"
            stroke="#3B82F6"
            name="Avg Delay (min)"
            strokeWidth={2}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="precipitation"
            stroke="#8B5CF6"
            name="Precipitation (%)"
            strokeWidth={2}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="visibility"
            stroke="#10B981"
            name="Visibility (%)"
            strokeWidth={2}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="windSpeed"
            stroke="#F97316"
            name="Wind Speed (mph)"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DelaysByWeatherChart;