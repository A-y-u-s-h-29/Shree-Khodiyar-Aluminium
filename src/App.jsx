import React, { useState } from 'react';
import { 
  FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes, FaStar, 
  FaClock, FaUserMd, FaShieldAlt, FaSmile, FaXRay, 
  FaAmbulance, FaCalendarCheck, FaQuoteLeft, FaFacebook, 
  FaTwitter, FaInstagram, FaWhatsapp, FaTeeth, 
  FaArrowRight, FaCheck, FaChevronLeft, FaChevronRight,
  FaCrown, FaTooth, FaTeethOpen, FaTeeth as FaTeethIcon
} from 'react-icons/fa';
import { GiTooth, GiToothbrush } from 'react-icons/gi';
import { MdOutlineCleaningServices, MdLocalHospital, MdHealthAndSafety } from 'react-icons/md';
import { RiStethoscopeFill } from 'react-icons/ri';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [review, setReview] = useState({ name: '', rating: 5, comment: '' });
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Rahul Sharma', rating: 5, comment: 'Excellent service! Dr. Gupta is very professional and the staff is friendly. Painless treatment!', date: '2024-01-15' },
    { id: 2, name: 'Priya Patel', rating: 4, comment: 'Very clean clinic with modern equipment. My root canal was completely pain-free.', date: '2024-01-10' },
    { id: 3, name: 'Amit Kumar', rating: 5, comment: 'Emergency treatment at midnight! Thank you Prime Smile for being available 24/7.', date: '2024-01-05' },
    { id: 4, name: 'Neha Singh', rating: 5, comment: 'Best dental experience ever! The cosmetic dentistry transformed my smile.', date: '2024-01-02' },
  ]);

  const services = [
    { icon: <FaCrown className="text-3xl" />, title: 'Dental Crowns', desc: 'High-quality crowns for damaged teeth', color: 'from-purple-500 to-pink-500' },
    { icon: <GiTooth className="text-3xl" />, title: 'Root Canal', desc: 'Painless root canal treatment', color: 'from-blue-500 to-cyan-400' },
    { icon: <GiToothbrush className="text-3xl" />, title: 'Teeth Cleaning', desc: 'Professional cleaning and polishing', color: 'from-emerald-500 to-teal-400' },
    { icon: <FaTeeth className="text-3xl" />, title: 'Dental Implants', desc: 'Permanent solution for missing teeth', color: 'from-amber-500 to-orange-400' },
    { icon: <FaXRay className="text-3xl" />, title: 'Digital X-Ray', desc: 'Advanced diagnostic imaging', color: 'from-indigo-500 to-purple-400' },
    { icon: <FaSmile className="text-3xl" />, title: 'Smile Design', desc: 'Complete smile makeovers', color: 'from-rose-500 to-pink-400' },
    { icon: <FaAmbulance className="text-3xl" />, title: 'Emergency Care', desc: '24/7 emergency dental services', color: 'from-red-500 to-orange-400' },
    { icon: <FaTeethOpen className="text-3xl" />, title: 'Braces', desc: 'Modern orthodontic treatments', color: 'from-green-500 to-emerald-400' },
  ];

  const galleryImages = [
    { id: 1, src: "gal1.webp", title: 'Modern Clinic Interior', category: 'clinic' },
    { id: 2, src: "gal2.png",  title: 'Advanced Equipment', category: 'equipment' },
    { id: 4, src: "gal4.jpg",  title: 'Waiting Area', category: 'clinic' },
    { id: 5, src: "gal5.png",  title: 'Digital Imaging Lab', category: 'equipment' },
   
  ];

  const heroImages = [
    { id: 1, src: "hero1.jpg", title: 'State-of-the-Art Dental Clinic', subtitle: 'Advanced Technology • Comfortable Environment' },
    { id: 2, src: "hero2.jpeg", title: 'Expert Dental Team', subtitle: '15+ Years Experience • Specialized Care' },
  ];

  const stats = [
    { number: '5000+', label: 'Happy Patients', icon: '😊' },
    { number: '98%', label: 'Success Rate', icon: '📈' },
    { number: '24/7', label: 'Emergency Service', icon: '🚨' },
    { number: '15+', label: 'Years Experience', icon: '⭐' },
  ];

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (review.name && review.comment) {
      const newReview = {
        id: reviews.length + 1,
        name: review.name,
        rating: review.rating,
        comment: review.comment,
        date: new Date().toISOString().split('T')[0]
      };
      setReviews([newReview, ...reviews]);
      setReview({ name: '', rating: 5, comment: '' });
      setShowReviewForm(false);
      alert('Thank you for your review!');
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'} />
    ));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Navigation - Premium Design */}
      <nav className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full blur opacity-30"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-teal-400 p-3 rounded-full">
                  <GiTooth className="text-2xl text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-teal-600 bg-clip-text text-transparent">
                  Prime Smile
                </h1>
                <p className="text-xs text-gray-500 font-medium">Dental Care Center</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Gallery</a>
              <a href="#reviews" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Reviews</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">Contact</a>
              
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full blur opacity-20"></div>
              <div className="relative p-2">
                {isMenuOpen ? <FaTimes className="text-2xl text-gray-700" /> : <FaBars className="text-2xl text-gray-700" />}
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gradient-to-b from-white to-blue-50 p-6 rounded-2xl shadow-xl mt-2 border border-blue-100">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 font-medium hover:text-blue-600 py-2">Home</a>
                <a href="#services" className="text-gray-700 font-medium hover:text-blue-600 py-2">Services</a>
                <a href="#gallery" className="text-gray-700 font-medium hover:text-blue-600 py-2">Gallery</a>
                <a href="#reviews" className="text-gray-700 font-medium hover:text-blue-600 py-2">Reviews</a>
                <a href="#contact" className="text-gray-700 font-medium hover:text-blue-600 py-2">Contact</a>
                
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Dual Images */}
      <section id="home" className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Perfect Smile <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Journey</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 4 100 0 150 4C175 6 200 4 200 4" stroke="url(#gradient)" strokeWidth="4"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6"/>
                        <stop offset="100%" stopColor="#06B6D4"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience world-class dental care with cutting-edge technology, 
                compassionate professionals, and a commitment to your comfort and 
                oral health.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                
                
                <a href="tel:7303571705" className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-3">
                  <FaPhoneAlt />
                  <span className="font-bold">Call Now</span>
                </a>
              </div>
            </div>

            {/* Hero Images Carousel */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-teal-500 rounded-3xl overflow-hidden shadow-2xl h-96">
  <img
    src={heroImages[currentImageIndex].src}
    alt={heroImages[currentImageIndex].title}
    className="w-full h-full object-cover"
  />

  {/* Text Overlay */}
  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
    <h3 className="text-2xl font-bold text-white mb-3">
      {heroImages[currentImageIndex].title}
    </h3>
    <p className="text-white/90">
      {heroImages[currentImageIndex].subtitle}
    </p>
  </div>
</div>



              {/* Second Image - Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-blue-100 max-w-xs">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-400 p-3 rounded-full">
                    <MdHealthAndSafety className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Pain-Free Treatment</h3>
                    <p className="text-sm text-gray-600 mt-1">Latest anesthesia technology for complete comfort</p>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                <button 
                  onClick={prevImage}
                  className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300 shadow-lg"
                >
                  <FaChevronLeft className="text-blue-600" />
                </button>
                <button 
                  onClick={nextImage}
                  className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-300 shadow-lg"
                >
                  <FaChevronRight className="text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Dental Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive dental solutions using cutting-edge technology for optimal oral health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 from-blue-500 to-teal-400"></div>
                <div className="relative p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-4`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                 <a
  href="tel:7303571705"
  className="text-blue-600 font-semibold flex items-center space-x-2 hover:text-blue-700 transition-colors"
>
  <span>Call Now</span>
  <FaArrowRight className="translate-x-0 hover:translate-x-2 transition-transform duration-300" />
</a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
  id="gallery"
  className="py-20 bg-gradient-to-b from-white to-blue-50"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Our{" "}
        <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
          Clinic Gallery
        </span>
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Explore our modern facilities and advanced dental equipment
      </p>
    </div>

    {/* Gallery Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {galleryImages.map((image) => (
        <div
          key={image.id}
          className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
        >
          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
            <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="font-bold text-lg">{image.title}</h3>
              <p className="text-sm opacity-90">{image.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Patient <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Testimonials</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from our satisfied patients about their dental care experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {reviews.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{rev.name}</h4>
                    <div className="flex items-center mt-1">
                      {renderStars(rev.rating)}
                      <span className="ml-2 text-sm text-gray-500">{rev.date}</span>
                    </div>
                  </div>
                </div>
                <FaQuoteLeft className="text-blue-200 text-3xl mb-4" />
                <p className="text-gray-600 italic text-lg leading-relaxed">"{rev.comment}"</p>
              </div>
            ))}
          </div>

          <div className="text-center">
           
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Visit Our <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Dental Clinic</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-400 p-4 rounded-2xl">
                    <FaMapMarkerAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Clinic Address</h3>
                    <div className="space-y-1 text-gray-600">
                      <p className="font-medium">Prime Smile Dental Care</p>
                      <p>A-83, Mahindra Enclave</p>
                      <p>Near Navyug Hospital, Chiranjeev Vihar</p>
                      <p>Bank Enclave, Shastri Nagar</p>
                      <p>Ghaziabad, Uttar Pradesh 201002</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-400 p-4 rounded-2xl">
                    <FaPhoneAlt className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">Contact Number</h3>
                    <a href="tel:07303571705" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                      7303571705
                    </a>
                    <p className="text-gray-600 mt-2">24/7 Emergency Dental Service Available</p>
                  </div>
                </div>

                
              </div>
            </div>

            <div className="bg-black backdrop-blur-sm p-1 rounded-3xl shadow-2xl border border-white">
             <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.671363874184!2d77.46511855910123!3d28.669557222887118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1e9568a1581%3A0x328f4c36e13cbec!2sPrime%20Smile%20Dental%20Care!5e0!3m2!1sen!2sin!4v1766058837031!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-xl shadow-lg"
/>

            </div>
          </div>
        </div>
      </section>


      {/* WhatsApp Float Button */}
      <a 
  href="https://wa.me/917303571705" 
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-20 right-8 z-40 group"
>
  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-500"></div>

  <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
    <FaWhatsapp className="text-3xl" />
  </div>

  <div className="absolute -right-2 -top-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
    24/7
  </div>
</a>


      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-teal-400 p-3 rounded-full">
                  <GiTooth className="text-2xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Prime Smile</h2>
                  <p className="text-blue-200">Premium Dental Care</p>
                </div>
              </div>
              <p className="text-gray-400">
                Providing exceptional dental care with compassion, expertise, and state-of-the-art technology since 2009.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'Services', 'Gallery', 'Reviews', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
              <ul className="space-y-3">
                {services.slice(0, 5).map((service) => (
                  <li key={service.title} className="text-gray-400 flex items-center space-x-2">
                    <FaCheck className="text-green-400 text-sm" />
                    <span>{service.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Clinic Hours</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Monday - Friday</span>
                  <span className="text-white font-semibold">9:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Saturday</span>
                  <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-gray-800">
                  <span>Sunday</span>
                  <span className="text-white font-semibold">Emergency Only</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Emergency</span>
                  <span className="text-red-400 font-bold">24/7 Available</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    
    <p className="text-gray-400">
      © {new Date().getFullYear()} Prime Smile Dental Care. All rights reserved.
    </p>

    <p className="text-gray-400">
      Designed by{" "}
      <a
        href="https://digitalexpressindia.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300"
      >
        Digital Express India
      </a>
    </p>

  </div>
</div>

        </div>
      </footer>

     

      
    </div>
  );
};

export default App;