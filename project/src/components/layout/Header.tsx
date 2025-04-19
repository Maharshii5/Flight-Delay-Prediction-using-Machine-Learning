import React, { useState } from 'react';
import { Search, BellRing, User, ChevronDown, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between bg-white px-4 shadow-sm">
      <div className="flex items-center md:hidden">
        <button className="p-2 text-gray-500 hover:text-blue-600">
          <Menu size={24} />
        </button>
      </div>
      
      <div className="hidden md:flex md:flex-1 md:items-center md:justify-start">
        <div className="relative max-w-md flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search airports, flights..."
            className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-blue-600">
          <BellRing size={20} />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        
        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center space-x-2 rounded-full text-sm text-gray-700 focus:outline-none"
          >
            <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <User size={16} />
            </div>
            <span className="hidden md:block font-medium">Admin</span>
            <ChevronDown size={16} className="hidden md:block text-gray-500" />
          </button>
          
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;