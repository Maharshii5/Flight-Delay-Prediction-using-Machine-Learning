import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Cloud, Wind, Thermometer, Clock, AlertTriangle } from 'lucide-react';
import * as tf from '@tensorflow/tfjs';

interface PredictionData {
  temperature: number;
  windSpeed: number;
  precipitation: number;
  timeOfDay: number;
  predictedDelay: number;
}

function Predictions() {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [predictionData, setPredictionData] = useState<PredictionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFlight, setSelectedFlight] = useState('AA123');

  // Initialize TensorFlow model
  useEffect(() => {
    async function initModel() {
      const model = tf.sequential({
        layers: [
          tf.layers.dense({ inputShape: [4], units: 64, activation: 'relu' }),
          tf.layers.dense({ units: 32, activation: 'relu' }),
          tf.layers.dense({ units: 1 })
        ]
      });
      
      model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });
      setModel(model);
      setLoading(false);
    }
    
    initModel();
  }, []);

  // Generate predictions based on current conditions
  const generatePredictions = () => {
    if (!model) return;

    const newPredictions = Array.from({ length: 24 }, (_, i) => {
      const temperature = 20 + Math.sin(i / 24 * Math.PI * 2) * 5;
      const windSpeed = 10 + Math.sin(i / 24 * Math.PI * 2) * 3;
      const precipitation = Math.max(0, Math.sin(i / 24 * Math.PI * 2) * 50);
      const timeOfDay = i;

      const input = tf.tensor2d([[temperature, windSpeed, precipitation, timeOfDay]]);
      const prediction = model.predict(input) as tf.Tensor;
      const predictedDelay = Math.max(0, Number(prediction.dataSync()[0]));

      return {
        temperature,
        windSpeed,
        precipitation,
        timeOfDay,
        predictedDelay
      };
    });

    setPredictionData(newPredictions);
  };

  useEffect(() => {
    if (!loading) {
      generatePredictions();
    }
  }, [loading]);

  const flights = [
    { id: 'AA123', route: 'JFK → LAX', time: '14:30' },
    { id: 'UA456', route: 'ORD → SFO', time: '15:45' },
    { id: 'DL789', route: 'ATL → MIA', time: '16:15' },
  ];

  return (
    <div className="space-y-6 p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Delay Predictions</h1>
          <p className="text-gray-600 mt-2">AI-powered flight delay predictions based on weather conditions</p>
        </div>
        <button 
          onClick={generatePredictions}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Clock className="h-5 w-5" />
          Update Predictions
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2"
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Delay Forecast</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={predictionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="timeOfDay" 
                    tickFormatter={(value) => `${value}:00`}
                  />
                  <YAxis label={{ value: 'Predicted Delay (minutes)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    formatter={(value: number) => [`${Math.round(value)} minutes`, 'Predicted Delay']}
                    labelFormatter={(value) => `${value}:00`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predictedDelay" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Flight Selection</h2>
            <div className="space-y-4">
              {flights.map((flight) => (
                <motion.div
                  key={flight.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedFlight === flight.id 
                      ? 'bg-blue-50 border-2 border-blue-500' 
                      : 'bg-gray-50 border-2 border-transparent'
                  }`}
                  onClick={() => setSelectedFlight(flight.id)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-900">{flight.id}</p>
                      <p className="text-sm text-gray-600">{flight.route}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{flight.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            icon: <Thermometer className="h-6 w-6 text-red-500" />,
            label: 'Temperature',
            value: '72°F',
            impact: 'Low Impact'
          },
          {
            icon: <Wind className="h-6 w-6 text-blue-500" />,
            label: 'Wind Speed',
            value: '15 mph',
            impact: 'Medium Impact'
          },
          {
            icon: <Cloud className="h-6 w-6 text-gray-500" />,
            label: 'Precipitation',
            value: '30%',
            impact: 'High Impact'
          },
          {
            icon: <AlertTriangle className="h-6 w-6 text-yellow-500" />,
            label: 'Risk Level',
            value: 'Moderate',
            impact: 'Monitor'
          }
        ].map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-50 rounded-full">
                {metric.icon}
              </div>
              <div>
                <p className="text-sm text-gray-600">{metric.label}</p>
                <p className="text-xl font-bold text-gray-900">{metric.value}</p>
                <p className="text-sm text-gray-500">{metric.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Predictions;
