import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Plane, 
  BarChart2, 
  Cloud, 
  Calendar, 
  PieChart, 
  Layers,
  Settings,
  HelpCircle
} from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-1 flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
        <div className="flex items-center justify-center px-4">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">FlightOps</span>
          </div>
        </div>
        
        <nav className="mt-8 flex-1 space-y-1 px-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <BarChart2 className="mr-3 h-5 w-5 flex-shrink-0" />
            Dashboard
          </NavLink>
          
          <NavLink
            to="/weather"
            className={({ isActive }) =>
              `group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Cloud className="mr-3 h-5 w-5 flex-shrink-0" />
            Weather Analysis
          </NavLink>
          
          <NavLink
            to="/scheduling"
            className={({ isActive }) =>
              `group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Calendar className="mr-3 h-5 w-5 flex-shrink-0" />
            Flight Scheduling
          </NavLink>
          
          <NavLink
            to="/predictions"
            className={({ isActive }) =>
              `group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <PieChart className="mr-3 h-5 w-5 flex-shrink-0" />
            Predictions
          </NavLink>
          
          <NavLink
            to="/simulation"
            className={({ isActive }) =>
              `group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                isActive
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <Layers className="mr-3 h-5 w-5 flex-shrink-0" />
            Gate Simulation
          </NavLink>
        </nav>
        
        <div className="border-t border-gray-200 p-4">
          <div className="space-y-1">
            <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <Settings className="mr-3 h-5 w-5 flex-shrink-0" />
              Settings
            </button>
            <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <HelpCircle className="mr-3 h-5 w-5 flex-shrink-0" />
              Help & Support
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;