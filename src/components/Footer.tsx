import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/Hindalco_Logo.svg.png"
                alt="Hindalco Logo"
                className="h-10 w-auto rounded shadow"
              />
              <div>
                <h3 className="text-xl font-bold">Aditya Aluminium Plant</h3>
                <p className="text-gray-400">Hindalco Industries | Aditya Birla Group</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the digital transformation in finance operations through innovative technology 
              solutions and intelligent automation systems.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Lapanga,Sambalpur,Odisha</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#operations" className="hover:text-white transition-colors">Finance Operations</a></li>
              <li><a href="#analytics" className="hover:text-white transition-colors">Reports & Analytics</a></li>
              <li><a href="#compliance" className="hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#logistics" className="hover:text-white transition-colors">Logistics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Digital Excellence</h4>
            <ul className="space-y-2 text-gray-300">
              <li>28+ Digital Tools</li>
              <li>100% Automated Workflows</li>
              <li>Real-time Reporting</li>
              <li>Paperless Operations</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Aditya Aluminium Plant, Hindalco Industries Limited, Aditya Birla Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Powered by Digital Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}