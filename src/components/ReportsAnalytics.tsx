import React from 'react';
import { TrendingUp, FileText, Receipt, Download, BarChart3, Package2, Calculator, Truck, BarChart } from 'lucide-react';
import ToolCard from './ToolCard';

export default function ReportsAnalytics() {
  const tools = [
    {
      title: "Daily Metal Cost",
      description: "Generate comprehensive daily reports on metal cost trends with market analysis and price forecasting capabilities.",
      icon: TrendingUp,
      features: ["Market analysis", "Price forecasting", "Trend visualization"]
    },
    {
      title: "TCS Payable on Scrap Sales Report",
      description: "Automated extraction of Tax Collected at Source reports for scrap sales with compliance tracking and filing assistance.",
      icon: FileText,
      features: ["Tax compliance", "Auto calculations", "Filing assistance"]
    },
    {
      title: "GST TDS on Scrap Sales Report",
      description: "Comprehensive GST and TDS reporting for scrap sales with integrated tax calculations and regulatory compliance.",
      icon: Receipt,
      features: ["GST compliance", "TDS tracking", "Regulatory reporting"]
    },
    {
      title: "Extract of IRN PDF Invoices",
      description: "Extract invoice details from IRN PDFs to Excel format with automated data parsing and validation.",
      icon: Download,
      features: ["PDF parsing", "Excel export", "Data validation"]
    },
    {
      title: "Sales Dashboard (Category-wise)",
      description: "Interactive sales reports by product category with real-time analytics and performance metrics.",
      icon: BarChart3,
      features: ["Real-time analytics", "Category insights", "Performance tracking"]
    },
    {
      title: "Raw Material Quality Report",
      description: "Track and generate detailed quality reports for raw materials with supplier performance analysis.",
      icon: Package2,
      features: ["Quality metrics", "Supplier analysis", "Compliance tracking"]
    },
    {
      title: "OTM Data Register",
      description: "Generate detailed Outbound Transport Management register with shipment tracking and cost analysis.",
      icon: Truck,
      features: ["Shipment tracking", "Cost analysis", "Performance metrics"]
    },
    {
      title: "Stock Status Report (Purchase Order Based)",
      description: "Extract comprehensive stock status and last move order details based on purchase orders with inventory optimization.",
      icon: BarChart,
      features: ["Stock optimization", "Order tracking", "Inventory insights"]
    }
  ];

  return (
    <section id="analytics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Reporting & Analytics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Harness the power of data with intelligent reporting systems and predictive analytics
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              category="Analytics"
              features={tool.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}