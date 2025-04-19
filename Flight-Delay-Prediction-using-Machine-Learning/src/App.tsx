import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Plane } from 'lucide-react';

// Layout components
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

// Pages
import Dashboard from './pages/Dashboard';
import WeatherAnalysis from './pages/WeatherAnalysis';
import FlightScheduling from './pages/FlightScheduling';
import Predictions from './pages/Predictions';
import GateSimulation from './pages/GateSimulation';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/weather" element={<WeatherAnalysis />} />
              <Route path="/scheduling" element={<FlightScheduling />} />
              <Route path="/predictions" element={<Predictions />} />
              <Route path="/simulation" element={<GateSimulation />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;