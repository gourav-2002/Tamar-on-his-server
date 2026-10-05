import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import {
  ChevronRight,
  ShieldCheck,
  Scale,
  UserCheck,
  Award,
  Clock,
  Phone,
  Mail,
  Menu,
  Plus,
  X,
  Quote,
  Briefcase,
  Medal,
  Handshake,
  AlertTriangle,
  FileSearch,
  Repeat,
  FileText,
  ClipboardCheck,
  ArrowRight,
  Shield,
  MessageSquare,
  Search,
  Calculator,
  Landmark,
  Trophy,
  Trash2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Hero = () => {
  return (

    <>
      <section
        className="relative min-h-screen hidden lg:flex flex items-center overflow-hidden pt-20 mt-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/background-hero-tamar-2.jpg')",
        }}
      >
        {/* Decorative Line */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-px bg-gold/40 hidden xl:block"></div>

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <span className="text-[#dbbc65] font-sans font-bold text-xl md:text-xl uppercase tracking-[0.2em] block mb-6">
              IF YOU SERVED - YOU DESERVE
            </span>
            <h1 className="text-white font-serif font-bold text-4xl md:text-6xl leading-[1.1] mb-2">
              You Served Your Country.
            </h1>

            <h2 className="text-[#dbbc65] font-serif font-bold text-3xl md:text-5xl leading-tight mb-8">
              You Do Not Have to Navigate the VA Alone.
            </h2>
            <p className="text-white/80 font-serif text-xl mb-12 font-bold">
              If you have received a VA decision that does not reflect the benefits you believe you earned, I am here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <Link to="/contact">
                <button className="bg-[#dbbc65] text-[#2F3E2F] font-sans font-bold px-8 py-4 rounded-none hover:brightness-110 transition-all shadow-lg text-lg">
                  Request a Free Case Review
                </button>
              </Link>

              <Link to="/contact">
                <button className="border border-white text-white font-sans font-medium px-8 py-4 rounded-none hover:bg-white/10 transition-all text-lg">
                  No Upfront Fees
                </button>
              </Link>

            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute right-0 bottom-0 h-full w-1/2 hidden lg:block"
          >
            <div className="relative h-full w-full">
              <img
                src=""
                alt="Tamar Dyson"
                className="w-full h-full object-contain object-bottom"
                referrerPolicy="no-referrer"
              />
              {/* Gradient Overlay for Fade */}
              {/* <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy to-transparent"></div>
           */}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="block lg:hidden pt-28 px-4 bg-white mt-16">
        <div className="max-w-170 mx-auto text-center">

          <span className="text-[#C9A84C] font-sans font-bold text-xl uppercase tracking-[0.2em] block mb-6">
            IF YOU SERVED - YOU DESERVE
          </span>
          <h1 className="text-5xl font-serif font-bold text-[#C9A84C] mb-6">
            You Served Your Country.
          </h1>

          <h2 className="text-4xl font-serif font-bold text-[#2F3E2F] mb-8">
            You Do Not Have to Navigate the VA Alone.
          </h2>

          <p className="text-gray-600 mb-6 text-base font-bold">
            If you have received a VA decision that does not reflect the benefits you believe you earned, I am here to help.
          </p>

          <div className="mb-6 mt-2">
            <Link
              to="/contact"
              className="bg-[#dbbc65] text-[#2F3E2F] font-sans font-bold px-8 py-4 rounded-none hover:brightness-110 transition-all shadow-lg text-lg inline-block"
            >
              Request a Free Case Review
            </Link>
          </div>

          <img
            src="/mobile-banner-tamar.jpg"
            alt="Mobile Hero"
            className="w-full rounded-3xl object-cover shadow-lg mb-6 border-7 border-[#c9a84c]"
          />


        </div>
      </section>

    </>
  );
};

const Intro = () => {
  return (
    <section
      id="about"
      className="relative py-[140px] bg-[#f8f7f4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/fighting-for-veterans.jpg" // replace with your actual image
              alt="Tamar Dyson - VA Appeals Attorney"
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Gold Accent Border */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#C9A84C] rounded-2xl -z-10"></div>
        </motion.div>

        {/* RIGHT SIDE - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[#C9A84C] font-sans font-semibold text-sm uppercase tracking-[0.4em] block mb-6">
            Fighting for Veterans
          </span>

          <h2 className="text-[#2F3E2F] font-serif font-bold text-4xl md:text-5xl leading-tight mb-8">
            Many veterans come to me after receiving a denial
            <span className="block text-[#C9A84C] mt-2 text-3xl">
              or a rating decision that does not accurately reflect the severity of their service-connected conditions.
            </span>
          </h2>

          <div className="space-y-6 text-[#555555] text-lg leading-relaxed">
            <p>
              My practice is devoted exclusively to representing veterans in appeals of VA compensation and pension decisions.
            </p>

            <p>
              The VA system is complex. Deadlines matter. Evidence matters. The language in a decision matters.
            </p>

            <p>
              I bring more than 40 years of legal experience and a lifelong connection to military service to every case I accept.
            </p>
          </div>

          {/* CTA Button */}
          {/* <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center bg-[#2F3E2F] text-white px-8 py-4 rounded-lg
                         transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#1B2D4F]
                         shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              Request a Free Case Review →
            </a>
          </div> */}
        </motion.div>

      </div>
    </section>
  );
};

const AboutSection = () => {
  const steps = [
    {
      icon: <FileSearch size={22} />,
      title: "Comprehensive Case Review",
      text: "Every appeal begins with a detailed analysis of your VA decision, service record, and supporting documentation."
    },
    {
      icon: <ClipboardCheck size={22} />,
      title: "Evidence & Record Evaluation",
      text: "Medical records, service history, and prior rulings are carefully examined to identify procedural or legal error."
    },
    {
      icon: <Scale size={22} />,
      title: "Structured Legal Strategy",
      text: "Appeals are prepared with disciplined argument, legal clarity, and adherence to strict procedural rules."
    },
    {
      icon: <Shield size={22} />,
      title: "Direct Personal Representation",
      text: "You work directly with me throughout the appeal process — with consistent communication and steady guidance."
    }
  ];

  return (
    <section className="pt-4 pb-28 bg-[#f8f7f4]">
      <div className="w-full grid lg:grid-cols-2">



        {/* RIGHT DARK PANEL */}
        <div className="bg-[#2F3E2F] text-white px-12 py-16 flex flex-col justify-center">

          <span className="text-[#C9A84C] uppercase tracking-[0.35em] text-sm font-semibold block mb-6">
            ABOUT TAMAR DYSON
          </span>

          <h2 className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-12">
            I am a retired U.S. Army Officer &
            <span className="block text-[#C9A84C] mt-3">
              a VA-accredited attorney.
            </span>
          </h2>

          <div className="space-y-10">

            <p className="font-normal text-base mb-4 text-white/85">
              I enlisted in the Women’s Army Corps in 1974 and later earned my commission as an officer. Military service is part of my family’s history - my aunt served during World War II, and my sister and cousins also wore the uniform. Service is something I deeply respect.
            </p>

            <p className="font-normal text-base mb-4 text-white/85">
              After leaving active duty, I pursued and obtained my own service-connected disability benefits. I understand firsthand how challenging the VA system can be.
            </p>

            <p className="font-normal text-base mb-4 text-white/85">
              I have been an attorney for more than four decades. Over the course of my career, I practiced litigation with established law firms and served as an attorney for the State of California’s Environmental Protection Agency. My legal work has always required careful analysis, disciplined preparation, and clear written advocacy.
            </p>

            <p className="font-normal text-base mb-4 text-white/85">
              Today, I focus exclusively on VA appeals.
            </p>

            <p className="font-normal text-base mb-4 text-white/85">
              I am accredited by the Department of Veterans Affairs and admitted to practice before the U.S. Court of Appeals for Veterans Claims, the California Supreme Court, and the District of Columbia Court of Appeals. I am also a member of the National Association of Veterans Advocates (NOVA).
            </p>


          </div>

        </div>

        {/* LEFT IMAGE */}
        <div className="relative h-[600px] lg:h-auto overflow-hidden group">

          <img
            src="/approach-every.jpg"
            alt="Professional Legal Office"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-[#C9A84C]/0 transition-all duration-500 group-hover:bg-[#C9A84C]/10"></div>

        </div>

      </div>
    </section>
  );
};


const WhyChoose = () => {
  const features = [
    {
      icon: <Scale size={28} />,
      title: "Focused Appellate Advocacy",
      text: "I concentrate exclusively on appeals of VA decisions. Appeals require careful legal analysis, attention to detail, and a clear understanding of procedural rules. My practice is built around that work."
    },
    {
      icon: <Briefcase size={28} />,
      title: "Decades of Legal Experience",
      text: "I have more than 41 years of experience as an attorney. My background in litigation and government practice provides a strong foundation for analyzing complex decisions and identifying legal error."
    },
    {
      icon: <Medal size={28} />,
      title: "Appreciation of your sacrifices in serving our country",
      text: "As a retired Army officer from a family with a tradition of service, I understand the culture, the language, and the commitment that military service represents."
    },
    {
      icon: <Handshake size={28} />,
      title: "Personal Experience With the VA",
      text: "I have personally navigated the VA disability system. I know how confusing and discouraging it can feel. That perspective informs how I approach every client’s case - with patience, clarity, and respect."
    },
    {
      icon: <Handshake size={28} />,
      title: "A Direct and Personal Relationship",
      text: "When you contact my office, you work directly with me. Your case is not handed off to a large team. I review your file, evaluate your decision, and guide your appeal."
    }
  ];

  //   return (
  //     <section className="pb-20 bg-[#f8f7f4]">
  //       <div className="max-w-7xl mx-auto px-6">

  //         {/* TOP HEADING */}
  //         <div className="text-center max-w-3xl mx-auto mb-20">

  //           <span className="text-[#C9A84C] uppercase tracking-[0.35em] text-sm font-semibold block mb-6">
  //             Why Choose Tamar Dyson
  //           </span>

  //           <h2 className="text-[#2F3E2F] font-serif font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-8">
  //   Dedicated Legal Advocacy
  //   <span className="block text-[#C9A84C] mt-3">
  //     Built on Experience & Service.
  //   </span>
  // </h2>

  //           <p className="text-[#555555] text-lg leading-relaxed">
  //             Many veterans face denials not because their claims lack merit,
  //             but because the legal process is complex and procedural.
  //             Appeals require discipline, analysis, and careful preparation.
  //           </p>

  //         </div>

  //         {/* 5 CARDS GRID */}
  //         <div className="space-y-8">

  //   {/* First Row - 3 Cards */}
  //   <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
  //     {features.slice(0, 3).map((item, idx) => (
  //       <motion.div
  //         key={idx}
  //         initial={{ opacity: 0, y: 40 }}
  //         whileInView={{ opacity: 1, y: 0 }}
  //         viewport={{ once: true }}
  //         transition={{ delay: idx * 0.12 }}
  //         className="group bg-white p-8 rounded-3xl border border-[#e8e6df]
  //                    shadow-sm hover:shadow-xl
  //                    transition-all duration-500 hover:-translate-y-2"
  //       >
  //         <div className="w-12 h-12 rounded-xl bg-[#1B2D4F]/5 
  //                         flex items-center justify-center mb-6 
  //                         text-[#C9A84C] 
  //                         group-hover:bg-[#C9A84C] 
  //                         group-hover:text-white 
  //                         transition-all duration-500">
  //           {item.icon}
  //         </div>

  //         <h3 className="text-[#2F3E2F] font-serif font-bold text-lg mb-4 leading-snug">
  //           {item.title}
  //         </h3>

  //         <p className="text-[#555555] text-sm leading-relaxed">
  //           {item.text}
  //         </p>
  //       </motion.div>
  //     ))}
  //   </div>

  //   {/* Second Row - Centered 2 Cards */}
  //   <div className="flex justify-center">
  //     <div className="grid sm:grid-cols-2 gap-8 max-w-3xl w-full">
  //       {features.slice(3).map((item, idx) => (
  //         <motion.div
  //           key={idx + 3}
  //           initial={{ opacity: 0, y: 40 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           viewport={{ once: true }}
  //           transition={{ delay: (idx + 3) * 0.12 }}
  //           className="group bg-white p-8 rounded-3xl border border-[#e8e6df]
  //                      shadow-sm hover:shadow-xl
  //                      transition-all duration-500 hover:-translate-y-2"
  //         >
  //           <div className="w-12 h-12 rounded-xl bg-[#1B2D4F]/5 
  //                           flex items-center justify-center mb-6 
  //                           text-[#C9A84C] 
  //                           group-hover:bg-[#C9A84C] 
  //                           group-hover:text-white 
  //                           transition-all duration-500">
  //             {item.icon}
  //           </div>

  //           <h3 className="text-[#2F3E2F] font-serif font-bold text-lg mb-4 leading-snug">
  //             {item.title}
  //           </h3>

  //           <p className="text-[#555555] text-sm leading-relaxed">
  //             {item.text}
  //           </p>
  //         </motion.div>
  //       ))}
  //     </div>
  //   </div>

  // </div>

  //       </div>
  //     </section>
  //   );
};

const PracticeAreas = () => {
  // const areas = [
  //   {
  //     title: " Denial of Service Connection",
  //     text: "When new and relevant evidence is available after a denial."
  //   },
  //   {
  //     title: "Appeals to the Board of Veterans' Appeals",
  //     text: "A senior reviewer re-evaluates the prior decision for legal error."
  //   },
  //   {
  //     title: "Special Monthly Compensation (SMC)",
  //     text: "Formal appeal before a Veterans Law Judge."
  //   },
  //   {
  //     title: "Clear and Unmistakable Error (CUE)",
  //     text: "Challenging the assigned start date of awarded benefits."
  //   },
  //   {
  //     title: "Requests for Earlier Effective Date",
  //     text: "Addressing significant legal or factual mistakes in prior decisions."
  //   },
  //   {
  //     title: "Appeals of Denials of TDIU (Unemployability)",
  //     text: "Appeals involving unemployability or enhanced compensation."
  //   }
  // ];

  const areas = [
    {
      title: "Supplemental Claim",
      text: "When new and relevant evidence is available after a denial."
    },
    {
      title: "Higher Level Review",
      text: "A senior reviewer re-evaluates the prior decision for legal error."
    },
    {
      title: "Board of Veterans Appeals",
      text: "Formal appeal before a Veterans Law Judge."
    }
  ];

  return (
    <section
      id="practice-areas"
      className="py-[100px] bg-[#2F3E2F] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* CONTENT */}
        <div>
          <span className="text-[#C9A84C] font-semibold text-sm uppercase tracking-[0.35em] block mb-6">
            What I Handle
          </span>

          <h2 className="text-white font-serif font-bold text-4xl md:text-5xl mb-4 leading-tight">
            Appeals I Handle for Veterans
          </h2>
          <p className="text-white font-serif font-regular text-xl mb-8">
            My practice is limited to appeals of previously decided VA compensation and pension claims for:
          </p>

          <div className="space-y-6">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-6 transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#C9A84C] 
                                flex items-center justify-center
                                transition-all duration-300 
                                group-hover:bg-[#C9A84C]">
                  <div className="w-2 h-2 bg-[#C9A84C] rounded-full 
                                  transition-all duration-300 
                                  group-hover:bg-[#1B2D4F]"></div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-white font-serif font-normal text-lg">
                    {area.title}
                  </h3>

                </div>
              </div>
            ))}
          </div>

        </div>



      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-off-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <Quote className="text-luxury-gold/20" size={80} fill="currentColor" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-deep-olive font-serif italic text-2xl md:text-3xl leading-relaxed mb-10"
        >
          "Tamar's expertise and dedication were evident from our first meeting. She understood the complexities of my service record and fought tirelessly to correct a decade-old injustice. I finally have the peace of mind I deserve."
        </motion.p>

        <div className="w-24 h-px bg-luxury-gold mx-auto mb-6"></div>

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-luxury-gold font-sans font-bold uppercase tracking-widest text-sm"
        >
          JAMES M., U.S. MARINE CORPS VETERAN
        </motion.span>
      </div>
    </section>
  );
};

const bodyParts = ["Left Arm", "Right Arm", "Left Leg", "Right Leg"];



const MissionBanner = () => {
  return (
    <section className="relative py-[100px] bg-[#C9A84C] overflow-hidden">

      {/* Subtle Navy Glow Accent */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#1B2D4F]/10 rounded-full blur-[120px]"></div>

      {/* Decorative Large Quote */}
      <div className="absolute top-10 left-10 text-[#1B2D4F]/10 text-[200px] font-serif leading-none select-none">
        "
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Section Label */}
        <span className="text-[#2F3E2F] uppercase tracking-[0.4em] text-sm font-semibold block mb-10">
          My Mission
        </span>

        {/* Exact Client Copy */}
        <h2 className="text-[#2F3E2F] font-serif font-bold text-3xl md:text-5xl leading-[1.4]">
          My mission is to provide experienced, careful, and steady advocacy
          for veterans challenging VA compensation decisions.
        </h2>

        <p className="mt-8 text-white text-xl md:text-2xl font-serif leading-relaxed max-w-4xl mx-auto">
          I am committed to clarity, integrity, and respectful representation
          at every stage of the appeals process.
        </p>

        {/* Divider */}
        <div className="w-24 h-[3px] bg-white mx-auto mt-12"></div>

      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of cases do you handle?",
      answer: `My practice is limited to appeals of previously decided VA compensation and pension claims. This includes Supplemental Claims, Higher-Level Review, Board of Veterans’ Appeals cases, Clear and Unmistakable Error (CUE), earlier effective date issues, Special Monthly Compensation, and TDIU cases that have been initially denied.

If you disagree with a VA decision that has already been issued, I may be able to help.`
    },
    {
      question: "Do you handle new claims?",
      answer: (
        <>
          <p>
            No. I do not represent veterans in filing new claims or standalone
            requests for increased ratings.
          </p>

          <p className="mt-4">
            If you are seeking assistance with an initial claim or certain increase
            requests, the Department of Veterans Affairs maintains a list of
            recognized Veterans Service Organizations that may assist you:{" "}
            <a
              href="https://www.va.gov/ogc/apps/accreditation/accredvso.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A84C] underline hover:text-[#2F3E2F] transition-colors"
            >
              View Recognized Veterans Service Organizations
            </a>
          </p>
        </>
      )
    },
    {
      question: "How much does it cost to hire you?",
      answer: `There are no upfront fees.

In most appeals, attorney fees are contingent upon recovery of past-due benefits. This means that fees are only paid if additional retroactive benefits are awarded. The fee agreement will be fully explained before representation begins so you can make an informed decision.`
    },
    {
      question: "What happens during a free case review?",
      answer: `You will be asked to complete a Pre-Consultation Questionnaire and provide a copy of your most recent VA decision.

I will review the decision to determine whether there are appeal options that I can assist with. If your matter falls within the scope of my practice, we will discuss next steps.

Submitting a questionnaire does not create an attorney-client relationship. Representation begins only after a signed agreement.`
    },
    {
      question: "How long does a VA appeal take?",
      answer: `Appeals can take time. The length depends on the type of appeal, the evidence involved, and the VA’s current processing timelines.

Part of my role is to help you understand what to expect at each stage and to ensure that deadlines are met and submissions are properly prepared.`
    }
  ];

  return (
    <section id="faq" className="py-[120px] bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">

        {/* LEFT SIDE (Sticky on Desktop) */}
        <div className="lg:sticky lg:top-32 h-fit">
          <span className="text-[#C9A84C] uppercase tracking-[0.35em] text-sm font-semibold block mb-6">
            Frequently Asked Questions
          </span>

          <h2 className="text-[#2F3E2F] font-serif font-bold text-4xl md:text-5xl leading-tight mb-8">
            Clear Answers.
            <br />
            <span className="text-[#C9A84C]">
              Confident Decisions.
            </span>
          </h2>

          <p className="text-[#555555] text-lg leading-relaxed max-w-md mb-8">
            The VA appeals process can feel overwhelming. Below are answers to
            common questions veterans ask before beginning an appeal.
          </p>

          <a
            href="/faq"
            className="inline-block bg-[#C9A84C] text-[#2F3E2F] font-bold px-6 py-3 hover:brightness-110 transition shadow-md"
          >
            View All FAQs
          </a>
        </div>

        {/* RIGHT SIDE FAQ LIST */}
        <div className="space-y-4">

          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-500
                  ${isOpen
                    ? "bg-[#ffffff] border-[#C9A84C] shadow-lg"
                    : "bg-white border-[#e8e6df] hover:border-[#C9A84C]/40"
                  }`}
              >

                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : idx)
                  }
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-5">

                    {/* Icon Bubble */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center
                      ${isOpen
                        ? "bg-[#C9A84C] text-white"
                        : "bg-[#2F3E2F]/5 text-[#C9A84C]"
                      } transition-all duration-300`}>
                      <HelpCircle size={18} />
                    </div>

                    {/* Question */}
                    <span className="text-[#2F3E2F] font-semibold text-lg leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#C9A84C]"
                  >
                    <ChevronDown size={22} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="px-20 pb-8 text-[#555555] leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-[120px] bg-[#4A5A3E] overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#C9A84C]/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">

        {/* LEFT SIDE */}
        <div className="text-white">

          <span className="text-[#C9A84C] uppercase tracking-[0.35em] text-sm font-semibold block mb-6">
            Contact My Office
          </span>

          <h2 className="font-serif font-bold text-5xl leading-tight mb-8">
            Start With a
            <span className="block text-[#C9A84C] mt-3">
              Free Case Review
            </span>
          </h2>

          <p className="text-white/70 text-lg leading-relaxed mb-14 max-w-lg">
            Complete the Pre-Consultation Questionnaire and I will review your VA decision to determine whether I can assist you. There are no upfront fees, and all information is confidential.
            <br /><br />
            If I can help, we will move forward together.
          </p>

          <div className="space-y-10">

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#C9A84C] flex items-center justify-center text-[#1B2D4F]">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">
                  Call Directly
                </p>
                <p className="text-2xl font-serif">
                  (415) 463-7414
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#C9A84C] flex items-center justify-center text-[#1B2D4F]">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-2">
                  Email Me
                </p>
                <p className="text-lg font-serif break-all">
                  <a
                    href="mailto:assistant@tamardysonlegalservices.com"
                    className="hover:underline"
                  >
                    assistant@tamardysonlegalservices.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE MULTI-STEP FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl"
        >
          <ContactForm mode="multistep" />
        </motion.div>

      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tamar Dyson Legal Services | VA Appeals Attorney</title>
        <meta name="description" content="Providing experienced, careful, and steady advocacy for veterans challenging VA compensation decisions nationwide." />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <MissionBanner />
        <Intro />
        <WhyChoose />
        <PracticeAreas />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
