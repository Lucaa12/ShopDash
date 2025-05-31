import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart, BarChart3, Users, Package, Shield, Zap, Clock, CheckCircle, ArrowUpRight, Play } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-1.5 rounded-lg shadow-lg shadow-blue-500/20">
                <ShoppingCart size={20} />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
                ShopDash
              </span>
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-shadow"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[60rem] w-[90rem] rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 blur-[100px] opacity-70" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                New: AI-Powered Analytics Released
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight"
            >
              Manage Your E-commerce
              <span className="block mt-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-transparent bg-clip-text">
                Like Never Before
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Experience the future of e-commerce management with AI-powered analytics,
              seamless order processing, and real-time insights that help you scale faster.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
              >
                Start Free Trial 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300 text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-2"
              >
                <Play size={20} className="text-blue-500" />
                Watch Demo
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex items-center justify-center gap-8"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Trusted by <span className="font-semibold text-gray-900">10,000+</span> business owners
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-5xl mx-auto mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-100">
            <Stat number="10k+" label="Active Users" />
            <Stat number="2M+" label="Orders Processed" />
            <Stat number="99.9%" label="Uptime" />
            <Stat number="24/7" label="Support" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-blue-600 font-semibold">Features</span>
            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Powerful features to help you manage and grow your business
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BarChart3 size={24} />}
              title="Advanced Analytics"
              description="Get deep insights into your business performance with real-time analytics and customizable dashboards."
              color="blue"
            />
            <FeatureCard
              icon={<Package size={24} />}
              title="Inventory Management"
              description="Track stock levels, set reorder points, and manage multiple warehouses with ease."
              color="green"
            />
            <FeatureCard
              icon={<Users size={24} />}
              title="Customer Insights"
              description="Understand your customers better with detailed profiles and purchase history analysis."
              color="orange"
            />
            <FeatureCard
              icon={<Shield size={24} />}
              title="Secure Payments"
              description="Process payments securely with support for multiple payment gateways and currencies."
              color="purple"
            />
            <FeatureCard
              icon={<Zap size={24} />}
              title="Smart Automation"
              description="Automate routine tasks like order processing, inventory updates, and customer communications."
              color="red"
            />
            <FeatureCard
              icon={<Clock size={24} />}
              title="24/7 Support"
              description="Get help when you need it with our round-the-clock customer support team."
              color="indigo"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl py-16 px-8 md:px-12 lg:px-16"
          >
            <div className="relative z-10 text-center">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-100 text-sm font-medium mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-4xl font-bold text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="mt-4 text-xl text-blue-100">
                Join thousands of successful businesses using ShopDash
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-blue-600 btn text-lg px-8 py-4 rounded-xl hover:bg-blue-50 shadow-xl flex items-center justify-center gap-2"
                >
                  Start Your Free Trial
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white border-2 border-white/20 hover:bg-white/10 btn text-lg px-8 py-4 rounded-xl transition-colors"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
                <div className="w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              </div>
              <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4">
                <div className="w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <FooterLink href="#">Features</FooterLink>
                <FooterLink href="#">Pricing</FooterLink>
                <FooterLink href="#">Security</FooterLink>
                <FooterLink href="#">Roadmap</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <FooterLink href="#">Documentation</FooterLink>
                <FooterLink href="#">API Reference</FooterLink>
                <FooterLink href="#">Guides</FooterLink>
                <FooterLink href="#">Support</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <FooterLink href="#">Privacy</FooterLink>
                <FooterLink href="#">Terms</FooterLink>
                <FooterLink href="#">Security</FooterLink>
                <FooterLink href="#">Cookies</FooterLink>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-1.5 rounded-lg">
                <ShoppingCart size={20} />
              </div>
              <span className="text-white font-semibold">ShopDash</span>
            </div>
            <p>&copy; 2024 ShopDash. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  const colorStyles = {
    blue: 'bg-gradient-to-br from-blue-500 to-blue-600',
    green: 'bg-gradient-to-br from-green-500 to-green-600',
    orange: 'bg-gradient-to-br from-orange-500 to-orange-600',
    purple: 'bg-gradient-to-br from-purple-500 to-purple-600',
    red: 'bg-gradient-to-br from-red-500 to-red-600',
    indigo: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className={`${colorStyles[color as keyof typeof colorStyles]} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <motion.button 
        whileHover={{ x: 5 }}
        className="mt-4 text-blue-600 font-medium inline-flex items-center gap-1 group-hover:text-blue-700"
      >
        Learn more <ArrowUpRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
      </motion.button>
    </motion.div>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-600 hover:text-gray-900 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <motion.a 
      href={href} 
      className="hover:text-white transition-colors inline-flex items-center gap-1"
      whileHover={{ x: 5 }}
    >
      {children}
    </motion.a>
  </li>
);

const Stat: React.FC<{ number: string; label: string }> = ({ number, label }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="text-center"
  >
    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 text-transparent bg-clip-text">
      {number}
    </div>
    <div className="text-sm text-gray-500 mt-1">{label}</div>
  </motion.div>
);

export default Landing;