import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Shield, 
  Scale, 
  Star, 
  CheckCircle2, 
  Quote,
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Using a placeholder URL since the local asset may not be available in the development environment
// If the real asset is available, use: import tamarPhoto from '../assets/tamar.jpg'
const tamarPhoto = "https://picsum.photos/seed/tamar-dyson-legal/800/1200";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
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

  const timeline = [
    { year: "1974", event: "Enlisted in the Women's Army Corps" },
    { year: "Career", event: "Earned commission as a U.S. Army Officer" },
    { year: "Post-Service", event: "Pursued and obtained VA disability benefits" },
    { year: "40+ Years", event: "Practicing attorney in litigation and government law" },
    { year: "Today", event: "Exclusively representing veterans in VA appeals" }
  ];

  const credentials = [
    {
      icon: <Scale size={32} />,
      title: "U.S. Court of Appeals for Veterans Claims",
      desc: "Admitted to practice"
    },
    {
      icon: <Award size={32} />,
      title: "California Supreme Court",
      desc: "Admitted to practice"
    },
    {
      icon: <Shield size={32} />,
      title: "District of Columbia Court of Appeals",
      desc: "Admitted to practice"
    },
    {
      icon: <Star size={32} />,
      title: "National Association of Veterans Advocates (NOVA)",
      desc: "Member"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Tamar Dyson | VA Appeals Attorney | Tamar Dyson Legal Services</title>
        <meta name="description" content="Learn about Tamar Dyson — retired U.S. Army Captain, VA-accredited attorney with 40+ years of legal experience, exclusively representing veterans in VA appeals nationwide." />
      </Helmet>
      <Navbar />
      
      <main className="bg-white overflow-hidden">

        {/* Section 1 — Cinematic Hero Banner */}
        <section className="relative bg-deep-olive pt-40 pb-48 overflow-hidden">

  {/* Background Accent */}
  <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
    <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-luxury-gold/5 -rotate-12 translate-x-1/4 -translate-y-1/4"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-12"
      >

        <motion.h1
          variants={itemVariants}
          className="text-white font-serif font-bold text-5xl md:text-7xl leading-[0.9] mb-4"
        >
          A Veteran.
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="text-white font-serif font-bold text-5xl md:text-7xl leading-[0.9] mb-4"
        >
          An Attorney.
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="text-luxury-gold font-serif font-bold text-5xl md:text-7xl leading-[0.9]"
        >
          Your Advocate.
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="w-40 h-1 bg-luxury-gold mt-8"
        ></motion.div>

      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-xl">

        {[
          { label: "40+ Years", sub: "Legal Experience" },
          { label: "U.S. Army", sub: "Retired Captain" },
          { label: "Nationwide", sub: "All 50 States" }
        ].map((stat, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + (i * 0.15), duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col items-center text-center hover:bg-white/10 transition-all"
          >

            <span className="text-luxury-gold font-serif font-bold text-3xl mb-2">
              {stat.label}
            </span>

            <span className="text-off-white/40 font-sans text-[10px] uppercase tracking-[0.4em]">
              {stat.sub}
            </span>

          </motion.div>

        ))}

      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="relative flex justify-center lg:justify-end">

  {/* Image */}
  <img
    src="/about-hero.jpg"
    alt="Tamar Dyson"
    className="relative w-[90%] object-cover shadow-2xl border-[8px] border-luxury-gold rounded-3xl rotate-[-3deg]"
  />

</div>

  </div>
</section>

        {/* Section 2 — Split Story Section */}
        <section className="py-32 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left side: Photos */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group grid grid-cols-2 gap-6"
            >
              <div className="absolute -inset-6 border border-luxury-gold/20 translate-x-4 translate-y-4 pointer-events-none group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
              <div className="overflow-hidden shadow-2xl relative z-10">
                <img
                  src="/tamar-unifrom-about.jpg"
                  alt="Tamar Dyson - Enlisted, Women's Army Corps"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="overflow-hidden shadow-2xl relative z-10">
                <img
                  src="/approach-every.jpg"
                  alt="Tamar Dyson - Commissioned U.S. Army Officer"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Right side: Text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-luxury-gold font-sans font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">WHO I AM</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-deep-olive mb-10 leading-tight">From the Uniform to the Courtroom</h2>

              <div className="space-y-8 text-deep-olive/70 text-xl leading-relaxed mb-12 font-serif">
                <p>
                  I enlisted in the Women's Army Corps in 1974 and was later commissioned as an officer. My family has a long and proud tradition of military service, beginning with my aunt, who served during World War II.
                </p>
                <p>
                  Having personally navigated the complex VA system, I understand firsthand the frustrations and challenges veterans face. That perspective allows me to approach each client's case with clarity, patience, and respect.
                </p>
              </div>
              
              <div className="w-24 h-px bg-luxury-gold/40 mb-12"></div>
              
              <div className="relative pl-16">
                <Quote className="absolute top-0 left-0 text-luxury-gold/20" size={56} />
                <blockquote className="text-2xl md:text-3xl font-serif italic text-deep-olive leading-relaxed">
                  "I understand firsthand how challenging the VA system can be. That perspective informs how I approach every client's case — with patience, clarity, and respect."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3 — Full Width Dark Banner */}
        {/* <section className="bg-olive py-24 px-6 text-center relative overflow-hidden">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/6 h-px bg-luxury-gold/20 hidden lg:block"></div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/6 h-px bg-luxury-gold/20 hidden lg:block"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-white font-serif font-bold text-3xl md:text-5xl mb-6">My Practice is Built on One Principle</h2>
            <p className="text-off-white/80 text-2xl font-serif italic leading-relaxed">
              "Every veteran who was denied deserves a careful, honest review of their case — not a quick dismissal."
            </p>
          </div>
        </section> */}

        {/* Section 4 — Credentials & Accreditations */}
        <section className="py-24 px-6 bg-off-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-luxury-gold font-sans font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">CREDENTIALS</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-deep-olive">Admitted. Accredited. Experienced.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {credentials.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -15 }}
                  className="bg-white p-10 border-t-4 border-luxury-gold shadow-sm hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="text-deep-olive mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:text-luxury-gold">
                    {item.icon}
                  </div>
                  <h3 className="text-deep-olive font-serif font-bold text-xl mb-4 leading-tight">{item.title}</h3>
                  <p className="text-deep-olive/40 font-sans text-[10px] uppercase tracking-[0.2em] font-bold">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 — Military Service Timeline */}
        <section className="py-32 px-6 bg-deep-olive relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <span className="text-luxury-gold font-sans font-bold text-[10px] uppercase tracking-[0.5em] mb-6 block">SERVICE HISTORY</span>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">A Lifetime of Service</h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group max-w-3xl mx-auto mb-24"
            >
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="/new-apeal-handle.jpg"
                  alt="Tamar Dyson - Military Service"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-luxury-gold opacity-40"></div>
            </motion.div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-luxury-gold/20 -translate-x-1/2"></div>
              
              <div className="space-y-24">
                {timeline.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-luxury-gold rounded-full -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(198,165,74,0.6)] border-4 border-deep-olive"></div>
                    
                    {/* Content */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                      <span className="text-luxury-gold font-serif font-bold text-3xl mb-3 block">{item.year}</span>
                      <p className="text-off-white text-2xl font-serif leading-relaxed">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 — Mission Statement */}
        <section className="py-40 px-6 bg-off-white text-center relative">
          <div className="max-w-4xl mx-auto">
            <Quote className="text-luxury-gold/10 mx-auto mb-12" size={100} />
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-5xl font-serif text-deep-olive leading-[1.4] mb-16"
            >
              "My mission is to provide experienced, careful, and steady advocacy for veterans who are challenging VA compensation decisions. I am committed to clarity, integrity, and respectful representation at every stage of the appeals process."
            </motion.p>
            
            <div className="w-40 h-px bg-luxury-gold/30 mx-auto mb-8"></div>
            <h3 className="text-luxury-gold font-serif italic text-3xl mb-3">Tamar Dyson</h3>
            <p className="text-deep-olive/40 font-sans text-[10px] uppercase tracking-[0.4em] font-bold">
              VA-Accredited Attorney | Retired U.S. Army Captain
            </p>
          </div>
        </section>

        {/* Section 7 — CTA Banner */}
        <section className="py-32 px-6 bg-deep-olive text-center relative overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#C6A54A_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.03]"></div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <h2 className="text-white font-serif font-bold text-5xl md:text-7xl mb-8 leading-tight">Ready for Case Review?</h2>
            <p className="text-off-white/60 text-2xl mb-16 max-w-3xl mx-auto font-serif italic">
              No upfront fees. No obligation. Just an honest review of your VA decision.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center group bg-luxury-gold text-deep-olive font-sans font-bold px-12 py-6 rounded-none hover:bg-soft-gold transition-all shadow-2xl shadow-luxury-gold/20 uppercase tracking-[0.2em] text-sm"
            >
              Request a Free Case Review
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
