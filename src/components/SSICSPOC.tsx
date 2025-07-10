import React, { useState } from 'react';
import { User, ChevronDown, Check } from 'lucide-react';

interface SPOCData {
  id: string;
  name: string;
  department: string;
  contact: string;
  email: string;
}

export default function SSICSPOC() {
  const [selectedSPOC, setSelectedSPOC] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const spocList: SPOCData[] = [
    { id: '1', name: 'John Doe', department: 'Finance', contact: '+91 98765 43210', email: 'john.doe@hindalco.com' },
    { id: '2', name: 'Jane Smith', department: 'Operations', contact: '+91 98765 43211', email: 'jane.smith@hindalco.com' },
    { id: '3', name: 'Mike Johnson', department: 'Compliance', contact: '+91 98765 43212', email: 'mike.johnson@hindalco.com' },
    { id: '4', name: 'Sarah Wilson', department: 'Logistics', contact: '+91 98765 43213', email: 'sarah.wilson@hindalco.com' },
    { id: '5', name: 'David Brown', department: 'Analytics', contact: '+91 98765 43214', email: 'david.brown@hindalco.com' },
  ];

  const selectedSPOCData = spocList.find(spoc => spoc.id === selectedSPOC);

  return (
    <section id="ssic-spoc" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            SSIC SPOC Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select and manage Single Point of Contact (SPOC) for various departments and operations
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select SPOC
              </label>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-gray-400 mr-3" />
                    <span className={selectedSPOC ? 'text-gray-900' : 'text-gray-500'}>
                      {selectedSPOCData ? selectedSPOCData.name : 'Select a SPOC...'}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {spocList.map((spoc) => (
                      <button
                        key={spoc.id}
                        onClick={() => {
                          setSelectedSPOC(spoc.id);
                          setIsDropdownOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      >
                        <div className="flex items-center">
                          <User className="w-5 h-5 text-gray-400 mr-3" />
                          <div>
                            <div className="font-medium text-gray-900">{spoc.name}</div>
                            <div className="text-sm text-gray-500">{spoc.department}</div>
                          </div>
                        </div>
                        {selectedSPOC === spoc.id && (
                          <Check className="w-5 h-5 text-blue-500" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {selectedSPOCData && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">SPOC Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                    <p className="text-gray-900 font-medium">{selectedSPOCData.name}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Department</label>
                    <p className="text-gray-900 font-medium">{selectedSPOCData.department}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Contact</label>
                    <p className="text-gray-900 font-medium">{selectedSPOCData.contact}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                    <p className="text-gray-900 font-medium">{selectedSPOCData.email}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 