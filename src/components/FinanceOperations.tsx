import React from 'react';
import { Building2, Shield, CheckCircle, Truck, CreditCard, Calculator, Package, Users, Archive, DollarSign, FolderOpen } from 'lucide-react';
import ToolCard from './ToolCard';

export default function FinanceOperations() {
  const tools = [
    {
      title: "MSME Tracker",
      description: "Track and manage vendor payments and dues for micro, small, and medium enterprises with automated reminders and compliance tracking.",
      icon: Building2,
      features: ["Payment tracking", "Due date alerts", "Compliance reports"]
    },
    {
      title: "Insurance Register",
      description: "Comprehensive management and registration of all insurance-related entries with automated premium tracking and renewal alerts.",
      icon: Shield,
      features: ["Policy management", "Premium tracking", "Renewal alerts"]
    },
    {
      title: "FMMS NFA Approval",
      description: "Streamlined approval workflows for Financial Management and Material System Non-Financial Activities with digital signatures.",
      icon: CheckCircle,
      features: ["Digital approvals", "Workflow automation", "Audit trails"]
    },
    {
      title: "Bank Guarantee Auto-Mailer",
      description: "Automated tracking and management of bank guarantees with smart email notifications for renewals and expirations.",
      icon: CreditCard,
      features: ["Auto notifications", "Expiry tracking", "Document management"]
    },
    {
      title: "Daily Fund Requirement",
      description: "Real-time calculation and tracking of daily cash and fund requirements with predictive analytics and cash flow forecasting.",
      icon: Calculator,
      features: ["Cash flow prediction", "Real-time tracking", "Budget optimization"]
    },
    {
      title: "Freight Register Automation",
      description: "Automated freight-related accounting entries with integration to transport management systems and cost allocation.",
      icon: Truck,
      features: ["Cost allocation", "Transport integration", "Automated entries"]
    },
    {
      title: "Customerwise EMD Ledger",
      description: "Track and reconcile Earnest Money Deposits by customer with automated matching and settlement processes.",
      icon: Package,
      features: ["Customer tracking", "Auto reconciliation", "Settlement automation"]
    },
    {
      title: "Stores Inventory Ledger Reco",
      description: "Reconcile Stores Inventory Ledger with General Ledger for accurate stock valuation and variance analysis.",
      icon: Archive,
      features: ["Stock valuation", "Variance analysis", "GL reconciliation"]
    },
    {
      title: "Customer Balance Tracker",
      description: "Real-time tracking of customer balances with credit/debit note integration and aging analysis.",
      icon: Users,
      features: ["Real-time balances", "Aging analysis", "Credit management"]
    },
    {
      title: "Central Repository of Documents",
      description: "Centralized digital repository for all finance documents with advanced search and version control capabilities.",
      icon: FolderOpen,
      features: ["Document search", "Version control", "Access management"]
    }
  ];

  return (
    <section id="operations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Finance Operations Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Digitally transforming core finance operations with intelligent automation and real-time insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              category="Operations"
              features={tool.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}