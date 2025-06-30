import React from 'react';
import { FileCheck, GitMerge, FileBarChart, Receipt, CheckSquare } from 'lucide-react';
import ToolCard from './ToolCard';

export default function InvoicingCompliance() {
  const tools = [
    {
      title: "GSTR-2B Reconciliation",
      description: "Automated reconciliation of vendor invoices with GSTR-2B data for seamless tax compliance and error detection.",
      icon: GitMerge,
      features: ["Auto reconciliation", "Error detection", "Tax compliance"]
    },
    {
      title: "Annexure to HOT Metal Invoice Report",
      description: "Modify and manage invoice numbers in reports like APAR with integrated hot metal invoice processing and validation.",
      icon: FileBarChart,
      features: ["Invoice modification", "APAR integration", "Validation checks"]
    },
    {
      title: "Customer Balance Tracking",
      description: "Track invoice-wise customer dues including unapplied credits with automated aging and collection management.",
      icon: FileCheck,
      features: ["Due tracking", "Credit management", "Collection automation"]
    },
    {
      title: "GST/TCS Reports",
      description: "Comprehensive TDS and GST compliance reporting for scrap-related invoices with automated tax calculations.",
      icon: Receipt,
      features: ["Tax calculations", "Compliance reporting", "Audit trails"]
    },
    {
      title: "Project Closure Automation",
      description: "Automated project closure financial reconciliation with comprehensive settlement processing and documentation.",
      icon: CheckSquare,
      features: ["Auto reconciliation", "Settlement processing", "Closure documentation"]
    }
  ];

  return (
    <section id="compliance" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Invoicing & Compliance Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensuring perfect compliance with automated invoicing systems and regulatory reporting
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              category="Compliance"
              features={tool.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}