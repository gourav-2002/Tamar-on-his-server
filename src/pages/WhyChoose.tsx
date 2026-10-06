import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  User, 
  Scale, 
  Quote,
  CalendarCheck
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WhyChoose = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] }
    }
  };

  const valueProps = [
    {
      icon: <Search size={48} className="text-luxury-gold" />,
      title: "Experienced Analysis",
      desc: "I look beyond the outcome of a VA decision to understand how VA got there, what may have been missed, and what options remain."
    },
    {
      icon: <User size={48} className="text-luxury-gold" />,
      title: "Direct Attorney Access",
      desc: "When you work with my firm, you work directly with me."
    },
    {
      icon: <Scale size={48} className="text-luxury-gold" />,
      title: "Candid, Honest Guidance",
      desc: "I will tell you honestly what I see in your case and whether I believe I can help."
    }
  ];

  const testimonials = [
    {
      quote: "After a challenging experience of navigating VA disability claims both with and without representation, for years with little success, I was referred to Tamar Dyson Legal Services. Tamar and her team provided a thorough, knowledgeable education, along with a professional approach that was comforting and considerate of my service-connected symptoms. The communications were consistent and well-informed. It was reassuring to know I had representation from a veteran who is passionate about justice for disabled veterans. I would absolutely recommend her services.",
      author: "Ralph Bowie, Veteran, US Navy"
    },
    {
      quote: "Tamar Dyson was relentless in advocating for me. My case required patience, persistence, and someone who was willing to keep fighting when the process became difficult—and Tamar never backed down. She kept me informed, treated me with genuine respect, and approached my case as though the outcome mattered personally to her. Her knowledge and professionalism were exceptional, but what impressed me most was her determination. I am incredibly grateful for her representation and would recommend Tamar Dyson without hesitation to any veteran who needs a knowledgeable, committed, and tenacious advocate in their corner.",
      author: "Terrence Higgs, U.S. Air Force Veteran"
    },
    {
      quote: "I have been represented over the past couple of years by Tamar. The decision to utilize her services was the best decision I have made in working with the VA and the claim process. I have found her to be professional and very responsive. She clearly understands the complicated process of dealing with the VA. I would highly recommend her and her office and would not hesitate in using her again to deal with the VA. She has my highest admiration and respect.",
      author: "Craig S. Bewsey, US Army"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose Us | Tamar Dyson Legal Services</title>
        <meta name="description" content="Why veterans choose Tamar Dyson Legal Services for complicated VA appeals requiring thoughtful legal analysis and seasoned judgment." />
      </Helmet>
      <Navbar />
      
      <main className="bg-off-white overflow-hidden pt-24">
        
        {/* Top Hero Section */}
        <section
          className="relative hidden lg:block bg-cover bg-center py-24"
          style={{ backgroundImage: "url('/why-choose-hero-laptop.webp')" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              <motion.span variants={itemVariants} className="text-luxury-gold font-sans font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                WHY VETERANS CHOOSE
              </motion.span>
              <motion.h1 variants={itemVariants} className="text-deep-olive font-serif font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
                TAMAR DYSON LEGAL SERVICES
              </motion.h1>

              <motion.div variants={itemVariants} className="w-24 h-1 bg-luxury-gold/50 mb-8"></motion.div>

              <motion.p variants={itemVariants} className="text-deep-olive/80 font-serif text-2xl leading-relaxed">
                As a veteran, I understand what it means to serve our country. As an attorney, I maintain a boutique practice by choice. I am selective about the cases I take; I focus on veterans with complicated appeals requiring thoughtful legal analysis and seasoned judgment.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Top Hero Section - Mobile */}
        <section className="lg:hidden px-6 pt-10 pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={itemVariants} className="text-luxury-gold font-sans font-bold text-xs uppercase tracking-[0.2em] mb-4 block">
              WHY VETERANS CHOOSE
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-deep-olive font-serif font-bold text-4xl leading-[1.1] mb-6">
              TAMAR DYSON LEGAL SERVICES
            </motion.h1>

            <motion.div variants={itemVariants} className="w-20 h-1 bg-luxury-gold/50 mb-6"></motion.div>

            <motion.p variants={itemVariants} className="text-deep-olive/80 font-serif text-lg leading-relaxed mb-8">
              As a veteran, I understand what it means to serve our country. As an attorney, I maintain a boutique practice by choice. I am selective about the cases I take; I focus on veterans with complicated appeals requiring thoughtful legal analysis and seasoned judgment.
            </motion.p>

            <motion.div variants={itemVariants}>
              <img
                src="/about-hero.jpg"
                alt="Tamar Dyson"
                className="w-full object-cover rounded-md shadow-xl"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Value Proposition Cards */}
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valueProps.map((prop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="bg-white p-10 border border-luxury-gold/20 flex flex-col items-center text-center shadow-lg rounded-sm"
                >
                  <div className="w-24 h-24 rounded-full bg-deep-olive flex items-center justify-center mb-8">
                    {prop.icon}
                  </div>
                  <h3 className="text-deep-olive font-serif font-bold text-2xl mb-4">{prop.title}</h3>
                  <div className="w-12 h-1 bg-luxury-gold/50 mb-6"></div>
                  <p className="text-deep-olive/70 font-sans text-lg leading-relaxed">
                    {prop.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-6 bg-off-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-16">
              <div className="h-px bg-luxury-gold/50 w-full max-w-[100px] md:max-w-[300px]"></div>
              <h2 className="text-3xl font-serif font-bold text-deep-olive mx-8 text-center uppercase tracking-widest whitespace-nowrap">
                WHAT VETERANS SAY
              </h2>
              <div className="h-px bg-luxury-gold/50 w-full max-w-[100px] md:max-w-[300px]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((test, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="bg-off-white border-none"
                >
                  <div className="flex mb-4 text-luxury-gold">
                    <Quote size={48} className="fill-luxury-gold" />
                  </div>
                  <p className="text-deep-olive/80 font-sans text-[15px] leading-relaxed mb-8">
                    {test.quote}
                  </p>
                  <p className="text-deep-olive font-serif font-bold text-lg">
                    — {test.author}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-deep-olive py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="flex items-center gap-8">
              <div className="hidden md:flex w-24 h-24 rounded-full border border-luxury-gold items-center justify-center text-luxury-gold shrink-0">
                <CalendarCheck size={40} />
              </div>
              <div>
                <h3 className="text-off-white font-serif font-bold text-3xl md:text-4xl mb-3">
                  Request a Consultation
                </h3>
                <p className="text-off-white/80 font-sans text-lg max-w-xl leading-relaxed">
                  If you would like a candid assessment of your VA disability appeal, contact Tamar Dyson Legal Services to schedule a consultation.
                </p>
              </div>
            </div>

            <Link 
              to="/contact"
              className="bg-luxury-gold text-deep-olive font-sans font-bold px-10 py-5 hover:bg-soft-gold transition-all uppercase tracking-[0.1em] shrink-0 text-center w-full lg:w-auto"
            >
              Schedule a Consultation
            </Link>

          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
};

export default WhyChoose;
