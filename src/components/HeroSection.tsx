import React from 'react';
import { Zap, Target, Award, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              {/* Hindalco Logo */}
              <img
                src="/Hindalco_Logo.svg.png"
                alt="Hindalco Logo"
                className="h-14 w-auto rounded shadow"
              />
              <div className="text-left">
                <div className="text-xl font-bold text-white">HINDALCO INDUSTRIES LTD</div>
                <div className="text-sm text-blue-200">Aditya Birla Group</div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 border border-blue-400/30">
              <Zap className="w-4 h-4 mr-2" />
              Digital Finance Transformation
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering Finance
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Through Digital Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforming traditional finance operations into intelligent, automated workflows. 
            Our finance team is leading the digital revolution at Aditya Aluminium Plant.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Target className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">28+ Digital Tools</h3>
              <p className="text-blue-100">Comprehensive suite of finance automation systems</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Award className="w-12 h-12 text-green-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">100% Digital Ready</h3>
              <p className="text-blue-100">Fully integrated paperless finance operations</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Users className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Future-Ready Team</h3>
              <p className="text-blue-100">Continuously evolving with cutting-edge technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}