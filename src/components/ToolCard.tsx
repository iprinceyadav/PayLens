import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  category: string;
  features?: string[];
}

export default function ToolCard({ title, description, icon: Icon, category, features }: ToolCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>
        
        {features && (
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm text-gray-500">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                {feature}
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-t border-gray-100">
        <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
          Learn More →
        </button>
      </div>
    </div>
  );
}