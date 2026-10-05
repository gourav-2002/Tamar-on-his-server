import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Contact = () => {

  return (
    <>
      <Helmet>
        <title>Contact Us | Tamar Dyson Legal Services</title>
        <meta name="description" content="Contact Tamar Dyson Legal Services to request a free VA appeals case review. No upfront fees. Representing veterans nationwide." />
      </Helmet>
      <Navbar />
      
      <main className="bg-white min-h-screen">
        {/* Section 1 — Hero Banner */}
        <section className="relative bg-deep-olive mt-12 pt-32 pb-36 overflow-hidden">
          {/* Subtle Texture/Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(#C6A54A_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <nav className="flex justify-center items-center space-x-2 text-off-white/60 text-sm mb-6 uppercase tracking-widest font-sans">
              <Link to="/" className="hover:text-luxury-gold transition-colors">Home</Link>
              <span>/</span>
              <span className="text-off-white">Contact Us</span>
            </nav>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-serif font-bold mb-6"
            >
              <span className="text-white">Contact</span>{' '}
              <span className="text-luxury-gold">Us</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-off-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              You served your country. Let us help you fight for the benefits you earned. Reach out today for a free case review.
            </motion.p>
          </div>
        </section>

        {/* Section 2 — 3 Contact Info Cards */}
        <section className="relative -mt-24 z-10 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Call Us */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 shadow-xl border border-transparent hover:border-luxury-gold/30 transition-all group rounded-lg"
            >
              <div className="w-14 h-14 bg-luxury-gold rounded-full flex items-center justify-center mb-6 shadow-lg shadow-luxury-gold/20">
                <Phone className="text-deep-olive" size={24} />
              </div>
              <h3 className="text-deep-olive font-serif font-bold text-2xl mb-2">Call Us</h3>
              <p className="text-deep-olive/70 mb-6 font-serif text-lg">(415) 463-7414</p>
              <a href="tel:4154637414" className="text-luxury-gold font-sans font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                CALL NOW <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>

            {/* Card 2 — Email Us */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 shadow-xl border border-transparent hover:border-luxury-gold/30 transition-all group rounded-lg"
            >
              <div className="w-14 h-14 bg-luxury-gold rounded-full flex items-center justify-center mb-6 shadow-lg shadow-luxury-gold/20">
                <Mail className="text-deep-olive" size={24} />
              </div>
              <h3 className="text-deep-olive font-serif font-bold text-2xl mb-2">Email Us</h3>
              <p className="text-deep-olive/70 mb-6 font-serif text-lg break-all">assistant@tamardysonlegalservices.com</p>
              <a href="mailto:assistant@tamardysonlegalservices.com" className="text-luxury-gold font-sans font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                SEND EMAIL <ArrowRight size={16} className="ml-2" />
              </a>
            </motion.div>

            {/* Card 3 — Representing */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 shadow-xl border border-transparent hover:border-luxury-gold/30 transition-all group rounded-lg"
            >
              <div className="w-14 h-14 bg-luxury-gold rounded-full flex items-center justify-center mb-6 shadow-lg shadow-luxury-gold/20">
                <MapPin className="text-deep-olive" size={24} />
              </div>
              <h3 className="text-deep-olive font-serif font-bold text-2xl mb-2">Nationwide</h3>
              <p className="text-deep-olive/70 mb-6 font-serif text-lg">Representing veterans across all 50 states</p>
              <Link to="/about" className="text-luxury-gold font-sans font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                LEARN MORE <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Section 3 — 2 Column Layout */}
        <section className="py-24 px-6">  
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column — Contact Form */}
<div className="lg:col-span-7">

  <h2 className="text-4xl font-serif font-bold text-deep-olive mb-4">
    Request a Free Case Review
  </h2>

  <p className="text-deep-olive/70 mb-10 leading-relaxed">
    Complete the form below and I will review your VA decision to determine whether I can assist you. All information is confidential.
  </p>

  <ContactForm mode="single" />

</div>
            
            {/* Right Column — Dark Info Panel */}
            <div className="lg:col-span-5">
              <div className="bg-deep-olive p-10 rounded-none shadow-2xl sticky top-32">
                <h3 className="text-white font-serif font-bold text-3xl mb-8">Why Contact Us?</h3>
                
                <ul className="space-y-6 mb-10">
                  {[
                    "Free case review — no upfront fees",
                    "Contingency fee basis — you pay only if you win",
                    "Direct communication with Tamar Dyson",
                    "Representing veterans nationwide",
                    "Response within 1-2 business days"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start space-x-4">
                      <CheckCircle2 className="text-luxury-gold flex-shrink-0" size={20} />
                      <span className="text-off-white/90 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="h-px bg-luxury-gold/30 w-full mb-10"></div>
                
                <div className="mb-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="text-luxury-gold" size={20} />
                    <h4 className="text-white font-sans font-bold uppercase tracking-widest text-sm">Office Hours</h4>
                  </div>
                  <div className="space-y-2 text-off-white/70 font-serif text-lg">
                    <p>Monday – Thursday: 11:00 AM – 6:00 PM (PST)</p>
                    <p>Friday: By appointment only</p>
                  </div>
                </div>
                
                <div className="h-px bg-luxury-gold/30 w-full mb-10"></div>
                
                <div>
                  <h4 className="text-white font-sans font-bold uppercase tracking-widest text-sm mb-6">Contact Details</h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-off-white/40 mb-1 font-bold">Phone</p>
                      <p className="text-luxury-gold font-serif text-2xl">(415) 463-7414</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-off-white/40 mb-1 font-bold">Email</p>
                        <p className="text-luxury-gold font-serif text-xl break-all">
  <a
    href="mailto:tamar@tamardysonlegalservices.com"
    className="hover:underline"
  >
    tamar@tamardysonlegalservices.com
  </a>
</p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 — Bottom Note */}
        <section className="bg-off-white py-12 border-t border-deep-olive/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-deep-olive/50 text-sm italic font-serif">
              Submitting this form does not create an attorney-client relationship. Representation begins only after a signed written agreement.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
