import React from 'react';
import { TrendingUp, Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 min-h-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {/* Hindalco Logo */}
              <img
                src="/Hindalco_Logo.svg.png"
                alt="Hindalco Logo"
                className="h-20 w-auto rounded shadow-2xl shadow-blue-500/30"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Aditya Aluminium Plant</h1>
              <p className="text-sm text-gray-600">Hindalco Industries | Aditya Birla Group</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Overview</a>
            <a href="#operations" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Operations</a>
            <a href="#analytics" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Analytics</a>
            <a href="#compliance" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Compliance</a>
            <a href="#logistics" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Logistics</a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#overview" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Overview</a>
              <a href="#operations" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Operations</a>
              <a href="#analytics" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Analytics</a>
              <a href="#compliance" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Compliance</a>
              <a href="#logistics" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Logistics</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}