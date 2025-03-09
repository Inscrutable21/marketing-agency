"use client";

import { ArrowRight, BarChart2, Globe2, Layout, MessageSquare, Rocket, Users, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Intersection Observer hooks for each section
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [productsRef, productsInView] = useInView({ threshold: 0.2 });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.2 });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    const sections = {
      about: aboutInView,
      products: productsInView,
      portfolio: portfolioInView,
      testimonials: testimonialsInView,
    };

    const activeSection = Object.entries(sections).find(([_, isInView]) => isInView)?.[0];
    if (activeSection) {
      setActiveSection(activeSection);
    }
  }, [aboutInView, productsInView, portfolioInView, testimonialsInView]);

  

  const products = [
    {
      title: "Canva Pro",
      subtitle: "Education plan",
      description: "Get premium templates, background remover, and AI-powered tools—design like a pro effortlessly!",
      image: "/canva.jpg",
      features: "1 YEAR SUBSCRIPTION",
      platforms: ["Windows", "Android", "iOS"],
      activation: "EMAIL ACTIVATION"
    },
    {
      title: "Office 365",
      subtitle: "ProPlus",
      description: "Get Word, Excel, PowerPoint, Outlook & more—plus 1TB OneDrive cloud storage to access your files anytime, anywhere!",
      image: "/office365.jpg",
      features: "1 YEAR SUBSCRIPTION",
      platforms: ["Windows", "Android", "iOS"],
      activation: "Mail will be provided"
    },
    {
      title: "Autodesk All Apps",
      subtitle: "Complete Suite",
      description: "3D modeling, CAD drafting, simulation, rendering, animation, CAM, CNC, cloud collaboration, AI automation, and more.",
      image: "/autodesk.jpg",
      features: "1 YEAR SUBSCRIPTION",
      platforms: ["Windows", "Android", "iOS"],
      activation: "EMAIL ACTIVATION"
    },
    {
      title: "Figma Pro",
      subtitle: "Professional License",
      description: "Unlimited files, advanced prototyping, team libraries, and seamless collaboration—all in one powerful platform",
      image: "/figma.jpg",
      features: "1 YEAR SUBSCRIPTION",
      platforms: ["Windows", "Android", "iOS"],
      activation: "EMAIL ACTIVATION"
    },
    {
      title: "Adobe Creative Cloud",
      subtitle: "Enterprise subscription",
      description: "Including 20+ adobe apps and 85 gb cloud storage, 2 devices support and generative AI",
      image: "/adobe.jpg",
      features: "1 YEAR SUBSCRIPTION",
      platforms: ["Windows", "Android", "iOS"],
      activation: "EMAIL ACTIVATION"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Working with Teenketing transformed our digital presence. Their software solutions have streamlined our operations significantly.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director, GrowthCo",
      content: "The team's expertise in IT solutions and their professional support have made our digital transformation seamless.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
    }
  ];

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/9555217697`, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:teenketingitsolutions@gmail.com';
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-600">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 z-50 border-b border-slate-200 shadow-sm"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src="/logo.jpg" alt="Teenketing IT Solutions" className="h-14 object-contain drop-shadow-lg" />
            </motion.div>
            
            <div className="hidden md:flex space-x-10">
              {['about', 'products', 'portfolio', 'testimonials', 'contact'].map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className={`text-slate-600 hover:text-slate-900 transition-all duration-300 capitalize relative text-sm font-medium tracking-wide ${
                    activeSection === section ? 'text-blue-600 font-semibold' : ''
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button className="hidden md:flex px-6 rounded-full shadow-lg shadow-blue-200 bg-blue-600 hover:bg-blue-700 text-white" onClick={handleWhatsAppClick}>
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.svg 
                className="h-6 w-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </motion.svg>
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 space-y-4"
              >
                {['about', 'products', 'portfolio', 'testimonials', 'contact'].map((section) => (
                  <motion.a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                    className={`block text-slate-600 hover:text-blue-600 transition-colors capitalize ${
                      activeSection === section ? 'text-blue-600 font-semibold' : ''
                    }`}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {section}
                  </motion.a>
                ))}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleWhatsAppClick}>Contact Us</Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-white" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
          <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:50px_50px]" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 pt-32 relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, type: "spring" }}
              className="mb-6 inline-block"
            >
              <div className="rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-600 inline-flex items-center shadow-lg shadow-blue-100">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Welcome to Teenketing IT Solutions
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 leading-[1.1] drop-shadow-sm"
            >
              Your Partner in <br className="hidden md:block" />Digital Excellence
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed"
            >
              Premium software solutions and IT services <br className="hidden md:block" />for businesses and professionals
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-6 relative overflow-hidden group rounded-full shadow-xl shadow-blue-200 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 flex items-center group-hover:translate-x-1 transition-transform">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 inline-block" />
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleEmailClick}
                className="text-lg px-8 py-6 rounded-full group border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700"
              >
                <span className="flex items-center group-hover:translate-x-1 transition-transform">
                Email Us
                <Mail className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="h-8 w-8 text-blue-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-white" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
          <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:40px_40px]" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-block rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-600 mb-6 shadow-lg shadow-blue-100">
              About Us
            </div>
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
              About Teenketing IT Solutions
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="prose prose-lg prose-slate mx-auto"
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-blue-50/50 border-blue-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:20px_20px] rounded-lg" />
                <div className="relative space-y-6 text-lg leading-relaxed">
                  <p>
                    At <span className="text-blue-600 font-semibold">Teenketing IT Solutions</span>, we believe that powerful software shouldn't come with a hefty price tag. As a trusted provider of <span className="font-semibold">affordable software solutions</span>, we have empowered <span className="text-blue-600 font-bold">5,000+ customers</span>, helping startups and small enterprises save <span className="text-blue-600 font-bold">lakhs of rupees</span> on essential tools.
                  </p>
                  <p>
                    Our mission is simple: to <span className="text-blue-600 font-semibold">make technology accessible</span> without compromising on quality. Whether you're a growing business or an entrepreneur, we offer cost-effective software that fuels productivity, efficiency, and success.
                  </p>
                  <p className="font-medium">
                    Join the thousands who have chosen <span className="text-blue-600 font-semibold">Teenketing IT Solutions</span>—because great software should be <span className="font-bold">affordable for everyone</span>! 🚀
                  </p>
                  <motion.div 
                    className="absolute -right-12 -bottom-12 h-48 w-48 bg-blue-200/50 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
                </Card>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" ref={productsRef} className="py-20 relative">
        <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={productsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-600 mb-4 shadow-lg shadow-blue-100">
              Our Products
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">Premium Solutions</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Premium software solutions for professionals and businesses
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={productsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-blue-100 bg-gradient-to-b from-white to-blue-50/30 relative">
                  <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:20px_20px] rounded-lg" />
                  <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                    <motion.img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-contain p-4 drop-shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors text-slate-800">
                      {product.title}
                    </h3>
                    {product.subtitle && (
                      <p className="text-lg text-slate-500 mb-2">{product.subtitle}</p>
                    )}
                    <p className="text-slate-600 mb-4 leading-relaxed">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.platforms.map((platform, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                          {platform}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <p className="font-bold text-lg text-blue-600">{product.features}</p>
                      <div className="flex items-center text-sm text-slate-500">
                        <Mail className="h-4 w-4 mr-2 text-blue-500" />
                        {product.activation}
                      </div>
                      <Button 
                        className="w-full group rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={handleWhatsAppClick}
                      >
                        <span className="group-hover:translate-x-1 transition-transform flex items-center">
                          Contact on WhatsApp
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="py-20 bg-blue-50/50 relative">
        <div className="absolute inset-0 bg-grid-slate-100/80 bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-600 mb-4 shadow-lg shadow-blue-100">
              Our Work
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">Featured Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Take a look at some of our recent projects and success stories.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&auto=format&fit=crop",
                title: "Software Solutions",
                description: "Enterprise software implementation and support"
              },
              {
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&h=600&auto=format&fit=crop",
                title: "IT Infrastructure",
                description: "Modern IT solutions for growing businesses"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >
                <motion.img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[300px] object-cover transition-transform group-hover:scale-105 duration-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm group-hover:backdrop-blur-0">
                  <div className="text-white text-center p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsRef} className="py-20 relative">
        <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-600 mb-4 shadow-lg shadow-blue-100">
              Testimonials
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">What Clients Say</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our clients have to say.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-50 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100 bg-gradient-to-b from-white to-blue-50/30 border-blue-100">
                  <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:20px_20px] rounded-lg" />
                  <div className="relative">
                  <div className="flex items-center mb-4">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 ring-2 ring-blue-100"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    />
                    <div>
                      <h4 className="font-semibold group-hover:text-blue-600 transition-colors text-slate-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                    <p className="text-slate-600 italic leading-relaxed">"{testimonial.content}"</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_100%)]" />
        <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-600 mb-4 shadow-lg shadow-blue-100">
              Contact Us
            </div>
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">Get in Touch</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ready to elevate your digital experience? Let's discuss your requirements.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-blue-50/30 border-blue-100 relative">
              <div className="absolute inset-0 bg-grid-slate-100/50 bg-[size:20px_20px] rounded-lg" />
              <div className="grid md:grid-cols-2 gap-8 relative">
                <div>
                  <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">Contact Information</h3>
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-center group"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                        <Mail className="h-5 w-5 text-blue-600" />
                      </div>
                      <a href="mailto:teenketingitsolutions@gmail.com" className="text-slate-700 hover:text-blue-600 transition-colors">
                        teenketingitsolutions@gmail.com
                      </a>
                    </motion.div>
                    <motion.div 
                      className="flex items-center group"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                        <MessageSquare className="h-5 w-5 text-blue-600" />
                      </div>
                      <a href="https://wa.me/9555217697" className="text-slate-700 hover:text-blue-600 transition-colors">
                        +91 95552 17697
                      </a>
                    </motion.div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Button 
                    className="w-full text-lg py-6 group rounded-full shadow-lg shadow-blue-200 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={handleWhatsAppClick}
                  >
                    <span className="group-hover:translate-x-2 transition-transform flex items-center">
                      Chat on WhatsApp
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                  <Button 
                    className="w-full text-lg py-6 group rounded-full border-blue-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700"
                    variant="outline" 
                    onClick={handleEmailClick}
                  >
                    <span className="group-hover:translate-x-2 transition-transform flex items-center">
                      Send Email
                      <Mail className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                  <p className="text-sm text-slate-500 text-center">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative bg-slate-50">
        <div className="absolute inset-0 bg-grid-slate-100/80 bg-[size:30px_30px]" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <motion.div 
              className="flex items-center space-x-2 mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src="/logo.jpg" alt="Teenketing IT Solutions" className="h-12 object-contain drop-shadow-lg" />
            </motion.div>
            <div className="flex space-x-6">
              <motion.a 
                href="#" 
                className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-center text-sm text-slate-500"
          >
            © {new Date().getFullYear()} Teenketing IT Solutions. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
}