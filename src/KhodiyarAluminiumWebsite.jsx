import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Mail, Star, ChevronRight, ChevronLeft } from 'lucide-react';

const KhodiyarAluminiumWebsite = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [activeService, setActiveService] = useState(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active nav based on scroll position
      const sections = ['home', 'about', 'services', 'projects', 'reviews', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveNav(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with href links
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'reviews', label: 'Reviews', href: '#reviews' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Company Data
  const companyInfo = {
    name: "Shree Khodiyar Aluminium",
    location: "Ahmedabad, Gujarat",
    tagline: "Premium Aluminium Solutions Since 1995",
    description: "Leading manufacturer of high-quality aluminium doors, windows, partitions, and architectural solutions with 25+ years of excellence.",
    contact: {
      phone: "+91 77790 22480",
      whatsapp: "+91 77790 22480",
      address: "Bhagwatinagar, Vasantnagar Twp, Vasant Nagar, Gota, Ahmedabad, Gujarat 380060"
    },
    hours: "Mon-Sat: 9:00 AM - 8:00 PM | Sun: 10:00 AM - 4:00 PM"
  };

  // Services Data
  const services = [
    {
      id: 1,
      title: "Aluminium Windows",
      description: "Energy-efficient, custom-designed aluminium windows for homes and offices",
      features: ["Thermal Break", "Double Glazing", "Powder Coated", "Custom Sizes"],
      image: "window.webp",
      icon: "🪟"
    },
    {
      id: 2,
      title: "Aluminium Doors",
      description: "Modern, secure aluminium doors with premium finishes",
      features: ["Sliding Systems", "French Doors", "Security Locks", "Anodized Finish"],
      image: "door2.jpg",
      icon: "🚪"
    },
    {
  id: 3,
  title: "Aluminium Partitions",
  description: "Modern aluminium partition systems for offices and commercial spaces",
  features: ["Glass & Solid Panels", "Sound Reduction", "Modular Design", "Quick Installation"],
  image: "partion.jpg",
  icon: "🏢"
},
{
  id: 4,
  title: "Aluminium Railings & Balustrades",
  description: "Durable and stylish aluminium railings for balconies, staircases, and terraces",
  features: ["Weather Resistant", "Glass Combination", "Custom Designs", "Low Maintenance"],
  image: "raling.jpg",
  icon: "🪜"
}

  ];

  // Reviews Data
  const reviews = [
    {
      id: 1,
      name: "Rajesh Patel",
      role: "Architect",
      company: "Patel & Associates",
      comment: "Exceptional quality and timely delivery. Their aluminium work transformed our project!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Interior Designer",
      company: "Design Studio",
      comment: "Attention to detail and customization options are outstanding. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Amit Shah",
      role: "Contractor",
      company: "Shah Builders",
      comment: "Reliable partner for all aluminium needs. Quality that withstands Ahmedabad's climate.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "Corporate Office - SG Highway",
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      type: "Commercial"
    },
    {
      id: 2,
      title: "Luxury Villa - Prahlad Nagar",
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80",
      type: "Residential"
    },
    {
      id: 3,
      title: "Shopping Mall - Vastrapur",
      location: "Ahmedabad",
      image: "mall1.jpg",
      type: "Commercial"
    }
  ];

  // Handle smooth scroll
  const handleNavClick = (id, e) => {
    e.preventDefault();
    setActiveNav(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Next/Previous review
  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Next/Previous service
  const nextService = () => {
    setActiveService((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setActiveService((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Responsive Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' 
          : 'bg-gradient-to-r from-blue-900/95 via-blue-800/95 to-blue-900/95 backdrop-blur-sm py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick('home', e)}
              className="flex items-center space-x-3 group"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h1 className={`text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'} transition-colors duration-300`}>
                  {companyInfo.name}
                </h1>
                <p className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-blue-100'}`}>
                  Ahmedabad's Aluminium Specialist
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`relative font-medium transition-all duration-300 ${
                    activeNav === item.id 
                      ? isScrolled 
                        ? 'text-blue-700' 
                        : 'text-white'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-blue-700' 
                        : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeNav === item.id && (
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                      isScrolled ? 'bg-blue-700' : 'bg-white'
                    }`}></span>
                  )}
                </a>
              ))}

            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-fade-in">
              <div className={`rounded-xl p-4 ${
                isScrolled ? 'bg-white shadow-lg' : 'bg-white/10 backdrop-blur-md'
              }`}>
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`block py-3 px-4 rounded-lg mb-1 transition-all duration-300 ${
                      activeNav === item.id
                        ? 'bg-blue-600 text-white'
                        : isScrolled
                          ? 'text-gray-700 hover:bg-gray-100'
                          : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a 
                  href={`tel:${companyInfo.contact.phone}`}
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-3 px-4 rounded-lg font-semibold mt-2 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <Phone size={18} />
                    <span>Call Now</span>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564501049418-3c27787d01e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Star size={16} className="text-yellow-400" fill="currentColor" />
                <span className="text-sm font-medium">Trusted in Ahmedabad Since 1995</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium <span className="text-blue-300">Aluminium</span> Solutions for Modern Living
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Crafting excellence in aluminium doors, windows, and architectural solutions with 25+ years of unmatched quality and service in Gujarat.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`tel:${companyInfo.contact.phone}`}
                  className="bg-white text-blue-900 font-bold py-4 px-8 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a 
                  href="#projects" 
                  onClick={(e) => handleNavClick('projects', e)}
                  className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                >
                  View Our Work
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
                <img 
                  src="hero.webp"
                  alt="Premium Aluminium Work"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-2xl">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white text-blue-900 p-6 rounded-xl shadow-2xl">
                  <div className="text-3xl font-bold">5000+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/50 to-blue-600/50 backdrop-blur-md"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              <div className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">25+</div>
                <div className="text-sm md:text-base opacity-90">Years Experience</div>
              </div>
              <div className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">5000+</div>
                <div className="text-sm md:text-base opacity-90">Projects Completed</div>
              </div>
              <div className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                <div className="text-sm md:text-base opacity-90">Client Satisfaction</div>
              </div>
              <div className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm md:text-base opacity-90">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Khodiyar Aluminium?</h2>
            <p className="text-gray-600 text-lg">
              We combine traditional craftsmanship with modern technology to deliver aluminium solutions that stand the test of time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600">We use only the highest grade aluminium and hardware to ensure durability and longevity.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Timely Delivery</h3>
              <p className="text-gray-600">We respect deadlines and ensure your project is completed on time, every time.</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Our skilled craftsmen and designers bring your vision to life with precision and care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 relative">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                Premium Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Our Premium Services
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                We offer comprehensive aluminium solutions for residential, commercial, and industrial applications.
              </p>
            </div>

            {/* Desktop Services Grid */}
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200"
                >
                  {/* Service Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      loading="lazy"
                      width={600}
                      height={256}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-2xl text-blue-700">{service.icon}</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-6">
                      <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30">
                        {index + 1} / {services.length}
                      </span>
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                          {service.title}
                        </h3>
                        <div className="flex items-center mb-3">
                          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
                          <div className="w-8 h-1 bg-gradient-to-r from-blue-300 to-blue-100 rounded-full ml-1"></div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 hover:border-blue-300 hover:shadow-sm transition-all"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-500 text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Starting from ₹{service.startingPrice || "TBD"}</span>
                      </div>
                      <a 
                        href={`tel:${companyInfo.contact.phone}`}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                      >
                        Call Now
                        <Phone className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Services Carousel - Enhanced */}
            <div className="lg:hidden relative">
              <div
                key={activeService}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={services[activeService].image} 
                    alt={services[activeService].title}
                    loading="lazy"
                    width={400}
                    height={224}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-xl text-blue-700">{services[activeService].icon}</span>
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {services[activeService].title}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-3"></div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {services[activeService].description}
                  </p>
                  
                  {/* Features Tags - Scrollable */}
                  <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                    {services[activeService].features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="flex-shrink-0 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  {/* Carousel Controls */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      {services.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveService(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === activeService 
                              ? 'w-6 bg-gradient-to-r from-blue-500 to-blue-300' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                          aria-label={`View service ${idx + 1}`}
                        />
                      ))}
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      {activeService + 1} / {services.length}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <a 
                    href={`tel:${companyInfo.contact.phone}`}
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone size={18} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevService}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all"
                aria-label="Previous service"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextService}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:shadow-xl transition-all"
                aria-label="Next service"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '10+', label: 'Years Experience' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/50 rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Recent Projects</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Showcasing our premium aluminium installations across Ahmedabad and Gujarat.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 p-6 text-white">
                    <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-3">
                      {project.type}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-blue-200">{project.location}</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Hear from architects, designers, and homeowners who trust Khodiyar Aluminium for their projects.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="absolute top-4 left-4 w-12 h-12 text-blue-100">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full blur-xl opacity-50"></div>
                    <img 
                      src={reviews[activeReview].image} 
                      alt={reviews[activeReview].name}
                      className="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <h4 className="text-2xl font-bold text-gray-900">{reviews[activeReview].name}</h4>
                    <p className="text-blue-700 font-medium">{reviews[activeReview].role}</p>
                    <p className="text-gray-600 text-sm">{reviews[activeReview].company}</p>
                    <div className="flex justify-center mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 md:pl-12">
                  <blockquote className="text-2xl md:text-3xl text-gray-800 italic leading-relaxed">
                    "{reviews[activeReview].comment}"
                  </blockquote>
                  
                  <div className="flex justify-between items-center mt-12">
                    <button 
                      onClick={prevReview}
                      className="p-3 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-300"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    
                    <div className="flex space-x-3">
                      {reviews.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveReview(idx)}
                          className={`w-3 h-3 rounded-full ${idx === activeReview ? 'bg-blue-700' : 'bg-gray-300 hover:bg-gray-400'}`}
                        />
                      ))}
                    </div>
                    
                    <button 
                      onClick={nextReview}
                      className="p-3 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-300"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer - Updated with Contact Information */}
<footer className="bg-gray-900 text-white py-12">
  <div className="container mx-auto px-4">
    <div id="contact" className="grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-xl">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold">{companyInfo.name}</h3>
            <p className="text-gray-400">Ahmedabad's Premium Aluminium Solutions</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-6">Quick Links</h4>
        <div className="space-y-3">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(item.id, e)}
              className="block text-gray-400 hover:text-white transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-6">Contact Info</h4>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-blue-400 mt-1" />
            <div>
              <p className="text-gray-300 font-medium">Phone</p>
              <a
                href={`tel:${companyInfo.contact.phone}`}
                className="text-gray-400 hover:text-white"
              >
                {companyInfo.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold mb-6">Visit Us</h4>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-blue-400 mt-1" />
            <div>
              <p className="text-gray-300 font-medium">Address</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.contact.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                {companyInfo.contact.address}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved. | Designed by{" "}
        <a
          href="https://digitalexpressindia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 font-medium"
        >
          Digital Express India
        </a>
      </p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default KhodiyarAluminiumWebsite;