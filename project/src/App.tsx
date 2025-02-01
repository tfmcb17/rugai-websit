import React, { useEffect } from 'react';
import { Brain, Shield, TrendingUp, AlertTriangle, BarChart3, Lock, FileText, Download, ChevronRight, Twitter, Instagram as Telegram, Disc as Discord, Github } from 'lucide-react';

function CyberBackground() {
  useEffect(() => {
    const createCircle = () => {
      const circle = document.createElement('div');
      circle.className = 'cyber-circle';
      const size = Math.random() * 100 + 50;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      circle.style.left = `${Math.random() * 100}%`;
      circle.style.top = `${Math.random() * 100}%`;
      
      document.querySelector('.cyber-circles')?.appendChild(circle);
      
      setTimeout(() => {
        circle.remove();
      }, 4000);
    };

    const interval = setInterval(createCircle, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="cyber-grid" />
      <div className="cyber-circles" />
      <div className="cyber-scanline" />
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/10 to-cyber-red/10" />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-cyber-gray relative">
      <CyberBackground />
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <img 
              src="https://i.imgur.com/LOGO_URL.png" 
              alt="RugAI Logo" 
              className="w-32 h-32 animate-pulse-slow"
            />
            <h1 className="text-8xl font-black gradient-text tracking-wider" style={{ textShadow: '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(255, 0, 60, 0.3)' }}>
              RUGAI
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Advanced AI-driven crypto analytics protecting your investments through predictive intelligence
            </p>
            <button className="cyber-border bg-gray-900 text-cyber-cyan px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
              Launch Platform
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Powered by Advanced AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Brain className="w-8 h-8 text-cyber-cyan" />}
              title="AI Analysis"
              description="Advanced machine learning algorithms analyze patterns and detect potential risks"
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-cyber-red" />}
              title="Rug Pull Detection"
              description="Early warning system for suspicious project behavior and potential scams"
            />
            <FeatureCard 
              icon={<TrendingUp className="w-8 h-8 text-cyber-cyan" />}
              title="Market Insights"
              description="Real-time market analysis and trading opportunities identification"
            />
            <FeatureCard 
              icon={<AlertTriangle className="w-8 h-8 text-cyber-red" />}
              title="Risk Assessment"
              description="Comprehensive project risk scoring and vulnerability analysis"
            />
            <FeatureCard 
              icon={<BarChart3 className="w-8 h-8 text-cyber-cyan" />}
              title="Analytics Dashboard"
              description="Advanced visualization tools for market trends and patterns"
            />
            <FeatureCard 
              icon={<Lock className="w-8 h-8 text-cyber-red" />}
              title="Security First"
              description="Enterprise-grade security protecting your investments"
            />
          </div>
        </div>
      </section>

      {/* Whitepaper Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="cyber-border bg-gray-800/50 p-12 rounded-xl backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-cyber-cyan" />
                  <h2 className="text-4xl font-bold gradient-text">Whitepaper</h2>
                </div>
                <p className="text-xl text-gray-300 mb-8">
                  Dive deep into the technology behind RugAI. Our comprehensive whitepaper details our AI architecture, risk assessment methodologies, and market analysis algorithms.
                </p>
                <div className="space-y-4">
                  <WhitepaperFeature 
                    title="AI Architecture"
                    description="Learn about our advanced neural networks and machine learning models"
                  />
                  <WhitepaperFeature 
                    title="Risk Assessment Framework"
                    description="Understand how we identify and quantify project risks"
                  />
                  <WhitepaperFeature 
                    title="Market Analysis"
                    description="Explore our real-time data processing and pattern recognition systems"
                  />
                </div>
                <button className="mt-8 cyber-border bg-gray-900 text-cyber-cyan px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Whitepaper
                </button>
              </div>
              <div className="flex-1 relative">
                <div className="cyber-border bg-gray-900/80 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6 text-cyber-cyan">Table of Contents</h3>
                  <div className="space-y-4">
                    <TocItem number="01" title="Executive Summary" />
                    <TocItem number="02" title="Technology Overview" />
                    <TocItem number="03" title="AI Architecture" />
                    <TocItem number="04" title="Risk Assessment Models" />
                    <TocItem number="05" title="Market Analysis Systems" />
                    <TocItem number="06" title="Security Measures" />
                    <TocItem number="07" title="Future Development" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="cyber-border bg-gray-800/50 p-12 rounded-xl backdrop-blur-sm max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Start Trading Safely Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of traders using RugAI to protect their investments and maximize returns
            </p>
            <button className="cyber-border bg-gray-900 text-cyber-cyan px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer with Social Media */}
      <footer className="bg-gray-900/80 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-8">
            {/* Social Media Links */}
            <div className="flex items-center gap-6">
              <SocialLink href="https://twitter.com/rugai" icon={<Twitter />} label="Twitter" />
              <SocialLink href="https://t.me/rugai" icon={<Telegram />} label="Telegram" />
              <SocialLink href="https://discord.gg/rugai" icon={<Discord />} label="Discord" />
              <SocialLink href="https://github.com/rugai" icon={<Github />} label="GitHub" />
            </div>
            
            {/* Social Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
              <SocialStat platform="Twitter" count="15.2K" label="Followers" />
              <SocialStat platform="Telegram" count="8.5K" label="Members" />
              <SocialStat platform="Discord" count="12.3K" label="Users" />
              <SocialStat platform="GitHub" count="2.1K" label="Stars" />
            </div>

            <div className="pt-8 border-t border-gray-800 w-full text-center">
              <p className="text-gray-400">© 2024 RugAI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg relative backdrop-blur-sm transform transition-all duration-300 hover:scale-105">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function WhitepaperFeature({ title, description }: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1.5">
        <div className="w-2 h-2 rounded-full bg-cyber-cyan" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-cyber-cyan">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function TocItem({ number, title }: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-800/50 p-2 rounded-lg transition-colors">
      <div className="flex items-center gap-4">
        <span className="text-sm text-cyber-red font-mono">{number}</span>
        <span className="text-gray-300 group-hover:text-cyber-cyan transition-colors">{title}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyber-cyan transition-colors" />
    </div>
  );
}

function SocialLink({ href, icon, label }: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      aria-label={label}
    >
      <div className="relative bg-gray-900 p-3 rounded-lg transform transition-all duration-300 hover:scale-110 before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500 before:to-red-500 before:-z-10 before:blur-sm before:opacity-50 before:rounded-lg before:-m-[2px]">
        <div className="w-6 h-6 text-gray-400 group-hover:text-cyber-cyan transition-colors">
          {icon}
        </div>
      </div>
    </a>
  );
}

function SocialStat({ platform, count, label }: {
  platform: string;
  count: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <p className="text-2xl font-bold gradient-text">{count}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

export default App;