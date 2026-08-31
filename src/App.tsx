import { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Activity, Video, Code, ShieldCheck, Zap, Layers, RefreshCw, Sparkles, Mic, Cpu, Film, Database, TrendingUp, BarChart3, LineChart, PieChart, Shield, Server, Lock, Cloud, CheckCircle2, Network, MapPin, Phone, Mail } from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productItems = [
    { 
      name: 'QuantX', 
      href: 'https://quantxai.co.in/lander',
      desc: 'Probability Intelligence & Trading'
    },
    { 
      name: 'Vectra', 
      href: 'https://vectrav1.akhil718.workers.dev/',
      desc: 'Create Cinematic Magic'
    },
    { 
      name: 'Spectre', 
      href: 'https://spectre-venture-pro.ai.studio',
      desc: 'Business Intelligence & CRM'
    },
    { 
      name: 'Concierge', 
      href: '#',
      desc: 'A Revolution in AI Advertising'
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer select-none group">
              <div className="flex flex-col items-center">
                <svg width="80" height="40" viewBox="0 0 100 50" className="mb-2 fill-red-600 transition-transform group-hover:scale-105 duration-300">
                  {/* Left lines */}
                  <rect x="18" y="5" width="2.5" height="40" />
                  <rect x="25" y="5" width="2.5" height="40" />
                  
                  {/* Right lines */}
                  <rect x="72.5" y="5" width="2.5" height="40" />
                  <rect x="79.5" y="5" width="2.5" height="40" />
                  
                  {/* Swastika Center Cross */}
                  <rect x="48.75" y="5" width="2.5" height="40" />
                  <rect x="30" y="23.75" width="40" height="2.5" />
                  
                  {/* Swastika Arms */}
                  <rect x="48.75" y="5" width="20" height="2.5" /> 
                  <rect x="66.25" y="23.75" width="2.5" height="21.25" /> 
                  <rect x="31.25" y="42.5" width="20" height="2.5" /> 
                  <rect x="30" y="5" width="2.5" height="21.25" /> 
                  
                  {/* Dots */}
                  <circle cx="40" cy="14" r="2.5" />
                  <circle cx="60" cy="14" r="2.5" />
                  <circle cx="40" cy="36" r="2.5" />
                  <circle cx="60" cy="36" r="2.5" />
                </svg>
                <div className="text-2xl font-black tracking-[0.15em] text-slate-900 leading-none">
                  SWASTIK
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="h-[1px] w-6 bg-red-600"></div>
                  <div className="text-[10px] font-bold tracking-[0.2em] text-slate-800">
                    <span className="text-red-600">A I</span> L A B S
                  </div>
                  <div className="h-[1px] w-6 bg-red-600"></div>
                </div>
                <div className="text-[6.5px] sm:text-[7px] font-semibold tracking-[0.25em] text-slate-500 mt-2">
                  INTELLIGENCE • INNOVATION • IMPACT
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                About Us
              </a>
              
              {/* Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors py-2">
                  Products
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 group-hover:text-red-600" />
                </button>
                
                <div className="absolute top-full left-0 w-[280px] bg-white border border-slate-200 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50">
                  {productItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href !== '#' ? "_blank" : undefined}
                      rel={item.href !== '#' ? "noopener noreferrer" : undefined}
                      className="block px-5 py-4 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0 group/item"
                    >
                      <div className="text-sm font-bold text-slate-900 group-hover/item:text-red-600 transition-colors">{item.name}</div>
                      <div className="text-xs text-slate-500 mt-1 font-medium">{item.desc}</div>
                    </a>
                  ))}
                </div>
              </div>

              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                Solutions
              </a>
              <a href="#" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">
                Enterprise
              </a>
              <a href="#" className="text-sm font-bold px-6 py-2.5 bg-red-600 text-white hover:bg-red-700 transition-colors">
                Contact Us
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <a href="#" className="block px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50">
                About Us
              </a>
              <div className="px-3 py-3">
                <div className="text-base font-semibold text-slate-900 mb-2">Products</div>
                <div className="pl-4 space-y-3 border-l-2 border-slate-100 mt-3">
                  {productItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href !== '#' ? "_blank" : undefined}
                      rel={item.href !== '#' ? "noopener noreferrer" : undefined}
                      className="block py-1"
                    >
                      <div className="text-sm font-bold text-slate-700 hover:text-red-600">{item.name}</div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">{item.desc}</div>
                    </a>
                  ))}
                </div>
              </div>
              <a href="#" className="block px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50">
                Solutions
              </a>
              <a href="#" className="block px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50">
                Enterprise
              </a>
              <a href="#" className="block px-3 py-3 mt-4 text-base font-bold text-center bg-red-600 text-white hover:bg-red-700 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Architecting the <span className="text-red-600">Future with AI.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-3xl">
              An innovative technology company focused on developing intelligent, scalable digital solutions that empower businesses. Our mission is to build <strong>“growth engines”</strong> rather than just software — secure, impactful, and future-ready systems across finance, media, and application development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white font-bold hover:bg-red-700 transition-colors gap-2 text-lg">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border-2 border-slate-900 font-bold hover:bg-slate-50 transition-colors text-lg">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Flagship Products */}
        <section className="bg-slate-50 border-y border-slate-200 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Flagship Products</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                A powerful suite of AI-driven products designed to solve complex challenges and unlock new opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* QuantX */}
              <div className="bg-white border border-slate-200 p-8 flex flex-col hover:border-red-600 transition-colors duration-300">
                <div className="h-16 mb-6 flex items-center justify-start">
                  <img src="/750fa08c-194a-492f-a536-b0649addabc6.png" alt="QuantX Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">QuantX</h3>
                <p className="text-slate-600 font-medium mb-6 text-sm uppercase tracking-wider text-red-600">Probability Intelligence</p>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  Visualizing Market Intelligence with QuantX — a sophisticated suite for quantitative trading.
                </p>
                <ul className="space-y-4 border-t border-slate-100 pt-6">
                  {['AI-Driven Decision Making', 'Dynamic Hedging', 'Advanced Simulations', 'Comprehensive Analysis'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                      <span className="text-red-600 mt-0.5">■</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vectra */}
              <div className="bg-white border border-slate-200 p-8 flex flex-col hover:border-red-600 transition-colors duration-300">
                <div className="h-16 mb-6 flex items-center justify-start">
                  <img src="/vectra_logo.jpg" alt="Vectra Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Vectra</h3>
                <p className="text-slate-600 font-medium mb-6 text-sm uppercase tracking-wider text-red-600">Video Creation Suite</p>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  The Vectra AI-Powered Video Workflow — an all-in-one platform that revolutionizes video creation.
                </p>
                <ul className="space-y-4 border-t border-slate-100 pt-6">
                  {['Intelligent Editing', 'Dynamic Scene Generation', 'Creative Enhancement', 'Scalable Production'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                      <span className="text-red-600 mt-0.5">■</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spectre */}
              <div className="bg-white border border-slate-200 p-8 flex flex-col hover:border-red-600 transition-colors duration-300">
                <div className="h-16 mb-6 flex items-center justify-start">
                  <img src="/Spectrere%20logo.webp" alt="Spectre Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Spectre</h3>
                <p className="text-slate-600 font-medium mb-6 text-sm uppercase tracking-wider text-red-600">App & Portal Builder</p>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  The Spectre App Creation Engine — an intelligent development platform for web, mobile, and portals.
                </p>
                <ul className="space-y-4 border-t border-slate-100 pt-6">
                  {['Rapid Development', 'Multi-Platform Deployment', 'Scalable Architecture', 'End-to-End Solution'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-800">
                      <span className="text-red-600 mt-0.5">■</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Concierge */}
              <div className="bg-slate-900 border border-slate-800 p-8 flex flex-col hover:border-red-500 transition-colors duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Coming Soon</div>
                <div className="h-16 mb-6 flex items-center justify-start">
                  <div className="w-12 h-12 bg-slate-800 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-red-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Concierge</h3>
                <p className="text-slate-400 font-medium mb-6 text-sm uppercase tracking-wider text-red-500">A Revolution in AI Advertising</p>
                <p className="text-slate-300 mb-8 flex-grow leading-relaxed">
                  Create your magic. A revolutionary solution in AI advertising and content generation. Stay tuned for our upcoming project.
                </p>
                <ul className="space-y-4 border-t border-slate-800 pt-6">
                  {['Intelligent Ad Generation', 'Targeted Delivery', 'Creative Magic', 'Upcoming Project'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-semibold text-slate-300">
                      <span className="text-red-500 mt-0.5">■</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Architecture Section */}
        <section className="py-24 bg-white border-b border-slate-200" id="solutions">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-20 md:text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Solutions Architecture</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A deep dive into how our core platforms are engineered to deliver scalable, intelligent, and transformative results across different sectors.
              </p>
            </div>

            <div className="space-y-24">
              {/* Spectre Infographic */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-6">
                    <Database className="w-4 h-4" /> Enterprise Ops
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Spectre Venture Pro</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    An all-in-one Business Intelligence, CRM, and Operations platform. Spectre leverages machine learning for highly accurate sales forecasting, providing a complete 360-degree view of your enterprise's growth engine.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold">Business Intelligence</span>
                    <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold">Smart CRM</span>
                    <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold">ML Sales Forecasting</span>
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-slate-50 p-8 rounded-2xl border border-slate-200">
                  {/* Stacked Architecture Infographic */}
                  <div className="flex flex-col gap-4 relative">
                    <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-slate-300 border-l-2 border-dashed border-slate-300 z-0"></div>
                    
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 z-10 relative">
                      <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                        <Activity className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Application Layer</div>
                        <div className="text-sm text-slate-500">Smart CRM & Operations Dashboard</div>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 z-10 relative">
                      <div className="w-12 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Intelligence Engine</div>
                        <div className="text-sm text-slate-500">Machine Learning Sales Forecaster</div>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 z-10 relative">
                      <div className="w-12 h-12 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                        <Database className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Data Infrastructure</div>
                        <div className="text-sm text-slate-500">Secure Business Intelligence Core</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vectra Infographic */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 text-white">
                  {/* Pipeline Infographic */}
                  <div className="flex items-center justify-between relative mb-8 mt-4">
                    <div className="absolute left-10 right-10 top-1/2 h-0.5 bg-slate-700 -translate-y-1/2 z-0"></div>
                    
                    <div className="flex flex-col items-center gap-3 z-10 w-1/3">
                      <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
                        <Mic className="w-6 h-6 text-red-500" />
                      </div>
                      <div className="text-xs font-bold text-center text-slate-400 uppercase">Voice Input</div>
                    </div>

                    <div className="flex flex-col items-center gap-3 z-10 w-1/3">
                      <div className="w-20 h-20 rounded-full bg-red-600 border-4 border-slate-900 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.3)]">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-xs font-bold text-center text-white uppercase">AI Generation</div>
                    </div>

                    <div className="flex flex-col items-center gap-3 z-10 w-1/3">
                      <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
                        <Film className="w-6 h-6 text-red-500" />
                      </div>
                      <div className="text-xs font-bold text-center text-slate-400 uppercase">Cinematic Video</div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-slate-400 font-mono">PROCESSING STATUS</span>
                      <span className="text-xs text-emerald-400 font-bold">100% COMPLETE</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-6">
                    <Video className="w-4 h-4" /> Media Tech
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Vectra AI Video Suite</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    A revolutionary voice-first workflow designed to create cinematic magic. Vectra automates dynamic scene generation and creative enhancement, enabling highly scalable video production for creators and enterprises alike.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold">Voice-First Editing</span>
                    <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold">Dynamic Scenes</span>
                    <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold">Cinematic Magic</span>
                  </div>
                </div>
              </div>

              {/* QuantX Infographic */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-6">
                    <LineChart className="w-4 h-4" /> FinTech
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">QuantX Intelligence</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Championing <strong className="text-slate-900">Probability over Prediction</strong>. QuantX is an AI-based Probability Intelligence Software tailored for quantitative trading, dynamic hedging, and advanced Monte Carlo simulations.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold">Dynamic Hedging</span>
                    <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold">Monte Carlo</span>
                    <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold">Probability AI</span>
                  </div>
                </div>
                <div className="order-1 lg:order-2 bg-slate-50 p-8 rounded-2xl border border-slate-200">
                  {/* Financial Dashboard Infographic */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                    <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                      <div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Live Probability Score</div>
                        <div className="text-3xl font-black text-slate-900">87.4%</div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <div className="w-full mb-4 flex justify-center rounded-lg overflow-hidden bg-slate-900 p-2 border border-slate-800">
                      <img src="/quantx-insights.png" alt="QuantX AI Probability Insights" className="max-h-[350px] w-auto object-contain rounded-md" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                      <div>
                        <div className="text-xs text-slate-500 font-bold uppercase mb-1">Monte Carlo</div>
                        <div className="text-lg font-bold text-slate-900">10,000+ Sims</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 font-bold uppercase mb-1">Hedging</div>
                        <div className="text-lg font-bold text-slate-900">Dynamic Active</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-24 bg-slate-50 border-b border-slate-200" id="enterprise">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Enterprise-Grade By Design</h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                We engineer our solutions for maximum reliability, security, and scale. Discover how our enterprise architecture protects your data and ensures 99.99% uptime.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Security & Compliance - Wide Box */}
              <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -mr-20 -mt-20 z-0 opacity-60"></div>
                
                <div className="md:w-1/2 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-6">
                    <Shield className="w-4 h-4 text-red-600" /> Security Core
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Bank-Grade Security & Compliance</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    We build secure, reliable systems with compliance at the core, ensuring your proprietary data remains protected across every node.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="font-bold text-sm text-slate-900">SOC 2 Type II</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="font-bold text-sm text-slate-900">ISO 27001</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="font-bold text-sm text-slate-900">E2E Encryption</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="font-bold text-sm text-slate-900">RBAC Controls</span>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 flex justify-center relative z-10 w-full">
                  {/* Security Infographic */}
                  <div className="relative flex items-center justify-center w-64 h-64">
                    <div className="absolute inset-0 border-[3px] border-slate-100 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-4 border-[2px] border-red-100 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-10 border-[1px] border-slate-200 rounded-full animate-[spin_8s_linear_infinite]"></div>
                    
                    <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 z-20 relative">
                      <Lock className="w-10 h-10 text-red-600" />
                      
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center">
                        <ShieldCheck className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scalability Box */}
              <div className="lg:col-span-1 bg-slate-900 p-8 rounded-3xl border border-slate-800 text-white relative overflow-hidden group">
                <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <Server className="w-64 h-64" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700">
                    <Cloud className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">Infinite Scalability</h3>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed mb-8">
                    Modular, cloud-native architecture guaranteeing 99.99% SLA uptime under peak global loads.
                  </p>
                  
                  {/* Server Nodes Infographic */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((node) => (
                      <div key={node} className="bg-slate-800 rounded-lg p-3 border border-slate-700 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                          <span className="text-xs font-bold text-slate-300">Node-EU-{node}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-3 bg-red-500 rounded-sm"></div>
                          <div className="w-1 h-2 bg-red-500/50 rounded-sm"></div>
                          <div className="w-1 h-1 bg-red-500/20 rounded-sm"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Custom Deployments Box */}
              <div className="lg:col-span-2 bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                <div className="relative z-10 flex flex-col h-full md:w-1/2 justify-center">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700">
                    <Network className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Custom Deployments & Pipelines</h3>
                  <p className="text-slate-400 font-medium text-sm leading-relaxed">
                    From concept to continuous delivery. We co-create tailor-made systems that integrate seamlessly with your existing tech stack via secure APIs.
                  </p>
                </div>
                
                <div className="md:w-1/2 w-full flex justify-center relative z-10">
                  <div className="w-full rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl p-1">
                    <img src="/microchip.png" alt="AI Microchip Architecture" className="w-full h-auto object-cover rounded-xl max-h-[280px]" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                "We don't ship features. We ship <span className="text-red-500">growth engines</span> that compound."
              </h2>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-white text-slate-900 flex items-center justify-center font-black text-xl rounded-full">
                  AM
                </div>
                <div>
                  <div className="text-lg font-bold">Akhilesh Mishra</div>
                  <div className="text-slate-400 font-medium">Founder, Swastik AI Labs</div>
                </div>
              </div>
              <p className="mt-12 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed border-t border-slate-800 pt-12">
                Our mission is to democratize advanced AI — making it accessible for businesses to scale, innovate, and lead in their respective industries.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:text-center">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Why Partner with Swastik AI Labs?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="border border-slate-200 p-6 hover:bg-slate-50 transition-colors">
                <Layers className="w-8 h-8 text-red-600 mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-3">Full-Cycle Development</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  From initial concept to deployment and support — end-to-end ownership.
                </p>
              </div>

              <div className="border border-slate-200 p-6 hover:bg-slate-50 transition-colors">
                <Zap className="w-8 h-8 text-red-600 mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-3">Customized & Scalable</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Architected to grow with your business — modular, future-ready.
                </p>
              </div>

              <div className="border border-slate-200 p-6 hover:bg-slate-50 transition-colors">
                <ShieldCheck className="w-8 h-8 text-red-600 mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-3">Security-First</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Building secure, reliable systems with compliance at the core.
                </p>
              </div>

              <div className="border border-slate-200 p-6 hover:bg-slate-50 transition-colors">
                <RefreshCw className="w-8 h-8 text-red-600 mb-6" />
                <h4 className="text-lg font-bold text-slate-900 mb-3">Agile Delivery</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Rapid, transparent, results-oriented sprints with clear outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 md:text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Contact Us</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Ready to transform your enterprise? Connect with us to explore how our scalable AI architectures can accelerate your growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Contact Information */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-black text-slate-900 mb-8">Swastik AI Labs</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 border border-red-100">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Headquarters</div>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        B 805 Eaton Square<br />
                        Lodha Sterling, Clariant compound<br />
                        Thane west - 400607
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 border border-red-100">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Phone</div>
                      <a href="tel:+917359777788" className="text-slate-600 font-medium hover:text-red-600 transition-colors">
                        7359777788
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0 border border-red-100">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:info@swastikllc.in" className="text-slate-600 font-medium hover:text-red-600 transition-colors">
                        info@swastikllc.in
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="h-[400px] lg:h-auto w-full bg-slate-200 relative min-h-[400px]">
                <iframe 
                  src="https://maps.google.com/maps?q=Lodha%20Sterling,%20Thane%20west&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Swastik AI Labs Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="text-xl font-black tracking-[0.15em] text-slate-900">
              SWASTIK
            </div>
            <div className="text-xs font-bold tracking-[0.2em] text-slate-800">
              <span className="text-red-600">A I</span> L A B S
            </div>
          </div>
          <div className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} Swastik AI Labs. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

