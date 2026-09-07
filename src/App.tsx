import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useParams, Link } from 'react-router-dom';
import LabsKanbanDashboard from './LabsKanbanDashboard';
import SharedEcosystemFooter from './SharedEcosystemFooter';
import { Menu, X, ArrowRight, Shield, Server, Activity, Lock, MapPin, Phone, Mail } from 'lucide-react';

// --- AUTHENTICATION ---
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('swastik_auth') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('swastik_auth', isAuthenticated ? 'true' : 'false');
  }, [isAuthenticated]);

  const login = (password: string) => {
    if (password === 'admin') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

// --- PAGES ---
function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) navigate('/dashboard');
    else setError(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-black text-slate-900">System Access</h1>
          <p className="text-sm text-slate-500 mt-2">Enter admin credentials to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Passkey</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
              placeholder="••••••••"
              required
            />
            {error && <p className="text-red-600 text-sm mt-2 font-medium">Invalid credentials</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Authenticate
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm font-semibold text-slate-500 hover:text-slate-900">
            &larr; Return to Public Site
          </Link>
        </div>
      </div>
    </div>
  );
}

function PublicSite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const Logo = () => (
    <div className="flex flex-col items-center">
      <svg width="80" height="40" viewBox="0 0 100 50" className="mb-2 fill-red-600 transition-transform group-hover:scale-105 duration-300">
        <rect x="18" y="5" width="2.5" height="40"/>
        <rect x="25" y="5" width="2.5" height="40"/>
        <rect x="72.5" y="5" width="2.5" height="40"/>
        <rect x="79.5" y="5" width="2.5" height="40"/>
        <rect x="48.75" y="5" width="2.5" height="40"/>
        <rect x="30" y="23.75" width="40" height="2.5"/>
        <rect x="48.75" y="5" width="20" height="2.5"/>
        <rect x="66.25" y="23.75" width="2.5" height="21.25"/>
        <rect x="31.25" y="42.5" width="20" height="2.5"/>
        <rect x="30" y="5" width="2.5" height="21.25"/>
        <circle cx="40" cy="14" r="2.5"/>
        <circle cx="60" cy="14" r="2.5"/>
        <circle cx="40" cy="36" r="2.5"/>
        <circle cx="60" cy="36" r="2.5"/>
      </svg>
      <div className="text-2xl font-black tracking-[0.15em] text-slate-900 leading-none">
        SWASTIK
      </div>
      <div className="text-[10px] font-bold tracking-[0.25em] text-slate-800 mt-1 uppercase">
        <span className="text-red-600">A I</span> L a b s
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-100 selection:text-red-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer select-none group">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">About</a>
              <a href="#products" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">Products</a>
              <a href="#solutions" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">Solutions</a>
              <a href="#enterprise" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">Enterprise</a>
              <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-red-600 transition-colors">Contact</a>
              <Link to="/dashboard" className="text-sm font-bold px-6 py-2.5 bg-slate-900 text-white hover:bg-red-600 transition-colors">
                Dashboard
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white absolute w-full">
            <div className="px-4 py-4 space-y-1">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50">About</a>
              <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50">Products</a>
              <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50">Solutions</a>
              <a href="#enterprise" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50">Enterprise</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50">Contact</a>
              <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 mt-4 text-base font-bold text-center bg-slate-900 text-white hover:bg-red-600 transition-colors">
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold mb-8 uppercase tracking-widest border border-red-200">
              <Activity className="w-4 h-4" />
              Intelligence & Engineering
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6">
              Engineering the <span className="text-red-600">Future</span> of Systems.
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Swastik AI Labs builds highly scalable business software, creative production engines, and market intelligence platforms. We architect robust solutions for enterprise scale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#products" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-bold hover:bg-red-600 transition-colors text-lg">
                Explore Platforms
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <Link to="/dashboard" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 border-2 border-slate-900 font-bold hover:bg-slate-50 transition-colors text-lg">
                System Access
              </Link>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Active Platforms</h2>
              <div className="w-20 h-1.5 bg-red-600"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* QuantX */}
              <a href="https://quantxai.co.in/" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 p-8 flex flex-col hover:border-red-600 transition-colors duration-300 block group">
                <div className="h-16 mb-6 flex items-center justify-start">
                  <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg">
                    <Activity className="w-6 h-6 text-red-500" />
                    <span className="text-xl font-black tracking-tight text-white">Quant<span className="text-red-500">X</span></span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">QuantX</h3>
                <p className="text-slate-600 font-medium mb-6 text-sm uppercase tracking-wider text-red-600">Market Intelligence</p>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  Sophisticated suite for quantitative trading and market data analysis.
                </p>
              </a>

              {/* Vectra */}
              <a href="https://vectrav1.akhil718.workers.dev/" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 p-8 flex flex-col hover:border-red-600 transition-colors duration-300 block group">
                <div className="h-16 mb-6 flex items-center justify-start">
                  <img src="/vectra_logo.jpg" alt="Vectra Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Vectra</h3>
                <p className="text-slate-600 font-medium mb-6 text-sm uppercase tracking-wider text-red-600">Creative & Production Engine</p>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  An all-in-one platform revolutionizing video and media creation.
                </p>
              </a>

              {/* Spectre */}
              <a href="https://spectre-venture-pro.ai.studio" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 p-8 flex flex-col hover:border-red-600 transition-colors duration-300 block group">
                <div className="h-16 mb-6 flex items-center justify-start">
                  <img src="/Spectrere%20logo.webp" alt="Spectre Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Spectre</h3>
                <p className="text-slate-600 font-medium mb-6 text-sm uppercase tracking-wider text-red-600">Business Software & AI Factory</p>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  Intelligent development platform for web, mobile, and corporate portals.
                </p>
              </a>

              {/* Concierge */}
              <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col grayscale opacity-80 cursor-not-allowed">
                <div className="h-16 mb-6 flex items-center justify-start text-slate-400">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-500 mb-3">Concierge</h3>
                <p className="text-slate-400 font-medium mb-6 text-sm uppercase tracking-wider">Background Verification</p>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                  Secure identity and background validation services.
                </p>
                <div className="inline-flex w-fit px-3 py-1 bg-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="solutions" className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Enterprise Architecture</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We deploy robust, isolated environments. Our platform architecture prioritizes data separation, stateless execution where appropriate, and secure API gateways.
                </p>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="mt-1 bg-red-100 p-2 text-red-600 rounded">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Dedicated Infrastructure</h4>
                      <p className="text-sm text-slate-600">Containerized environments deployed per-product.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1 bg-red-100 p-2 text-red-600 rounded">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Secure Gateways</h4>
                      <p className="text-sm text-slate-600">Encrypted transmission and strict origin controls.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 p-8 shadow-sm">
                <div className="space-y-4">
                  <div className="h-4 bg-slate-100 rounded w-1/3"></div>
                  <div className="h-4 bg-slate-100 rounded w-full"></div>
                  <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                  <div className="h-4 bg-slate-100 rounded w-2/3"></div>
                  <div className="h-32 bg-slate-50 border border-slate-200 rounded mt-6 flex items-center justify-center">
                     <span className="text-sm font-bold text-slate-400">System Schematic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl font-black mb-6 tracking-tight">Contact Swastik AI Labs</h2>
                <p className="text-slate-400 mb-12 text-lg">
                  For inquiries regarding system access, enterprise licensing, or technical integrations.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Headquarters</h4>
                      <p className="text-slate-400">Thane, Maharashtra<br/>India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Email</h4>
                      <a href="mailto:info@swastikllc.in" className="text-slate-400 hover:text-white transition-colors">info@swastikllc.in</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-red-500 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Phone</h4>
                      <a href="tel:+917359777788" className="text-slate-400 hover:text-white transition-colors">+91 73597 77788</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SharedEcosystemFooter />
    </div>
  );
}

// --- ROUTER ---
function KanbanRouteWrapper() {
  const { productKey } = useParams();
  
  // LabsKanbanDashboard already manages its own state for activeProduct, 
  // but to truly respect the route, we would ideally pass it down. 
  // Since the user provided LabsKanbanDashboard as a standalone command center,
  // we will render it. The dashboard internal tabs will still work.
  return <LabsKanbanDashboard initialProduct={productKey} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicSite />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <LabsKanbanDashboard />
          </ProtectedRoute>
        } />
        <Route path="/dashboard/:productKey" element={
          <ProtectedRoute>
            <KanbanRouteWrapper />
          </ProtectedRoute>
        } />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
