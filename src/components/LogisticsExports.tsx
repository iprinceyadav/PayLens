import React from 'react';
import { Globe, MapPin, AlertTriangle } from 'lucide-react';
import ToolCard from './ToolCard';

export default function LogisticsExports() {
  const tools = [
    {
      title: "Export Master",
      description: "Comprehensive maintenance of export master data with automated compliance checks and documentation management.",
      icon: Globe,
      features: ["Compliance automation", "Document management", "Export tracking"]
    },
    {
      title: "Integrated Logistics Tracker",
      description: "Unified view integrating GPS, RFID, and shipment information for complete supply chain visibility and optimization.",
      icon: MapPin,
      features: ["Real-time tracking", "Supply chain visibility", "Route optimization"]
    },
    {
      title: "Coal BG & LC Reminder",
      description: "Automated tracking and reminders for coal Bank Guarantees and Letters of Credit with smart notification systems.",
      icon: AlertTriangle,
      features: ["Smart notifications", "Document tracking", "Compliance alerts"]
    }
  ];

  return (
    <section id="logistics" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Logistics & Export Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing logistics operations with integrated tracking and intelligent automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              category="Logistics"
              features={tool.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}