'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Settings, Star, MapPin, Users, Clock, CalendarDays, MessagesSquare, ClipboardList, Zap, Sparkles } from 'lucide-react';

const CorporateFeatures = () => {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#d2c5b8]" />,
      title: "Creative Concepts",
      description: "Unique ideas tailored to your brand and objectives."
    },
    {
      icon: <Settings className="w-8 h-8 text-[#d2c5b8]" />,
      title: "End-to-End Services",
      description: "From ideation to execution, we handle everything."
    },
    {
      icon: <Star className="w-8 h-8 text-[#d2c5b8]" />,
      title: "Premium Production",
      description: "State-of-the-art equipment and stunning setups."
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#d2c5b8]" />,
      title: "Pan India Execution",
      description: "Strong network and seamless execution."
    },
    {
      icon: <Users className="w-8 h-8 text-[#d2c5b8]" />,
      title: "Dedicated Team",
      description: "Experienced professionals dedicated to your success."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#d2c5b8]" />,
      title: "On-Time Delivery",
      description: "Precision planning and flawless execution."
    }
  ];

  const processSteps = [
    {
      step: "01",
      icon: <CalendarDays className="w-6 h-6 text-[#3a3128]" />,
      title: "Discovery",
      description: "Understanding your goals and vision."
    },
    {
      step: "02",
      icon: <MessagesSquare className="w-6 h-6 text-[#3a3128]" />,
      title: "Concept",
      description: "Creating unique ideas and designs."
    },
    {
      step: "03",
      icon: <ClipboardList className="w-6 h-6 text-[#3a3128]" />,
      title: "Planning",
      description: "Detailed planning and cordination."
    },
    {
      step: "04",
      icon: <Zap className="w-6 h-6 text-[#3a3128]" />,
      title: "Execution",
      description: "Flawless execution with precision."
    },
    {
      step: "05",
      icon: <Sparkles className="w-6 h-6 text-[#3a3128]" />,
      title: "Celebration",
      description: "Delivering memorable experiences."
    }
  ];

  return (
    <section className="bg-[#fffaf4] py-24 overflow-hidden border-y border-[#efe3da]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Us Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 mb-32">
          {/* Left Side / Title */}
          <div className="lg:w-1/3">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.35em] text-[#7b6d62] font-semibold uppercase mb-4"
            >
              Why Choose Us
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif text-[#3a3128] leading-snug mb-6"
            >
              We Don&apos;t Just Plan Events,<br/>We Create Experiences<span className="text-[#d2c5b8]">.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#5f5146] text-sm md:text-base leading-relaxed"
            >
              Here&apos;s what makes us different.
            </motion.p>
          </div>
          
          {/* Right Side / Features Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="flex items-start gap-5"
              >
                <div className="flex-shrink-0 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3a3128] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#5f5146] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#efe3da] mb-24"></div>

        {/* Our Process Section */}
        <div className="flex flex-col">
          <div className="mb-16">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.35em] text-[#7b6d62] font-semibold uppercase mb-4"
            >
              Our Process
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-serif text-[#3a3128]"
            >
              From Concept To Celebration
            </motion.h2>
          </div>

          <div className="relative">
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-dashed-line border-t border-dashed border-[#d2c5b8] opacity-50 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
              {processSteps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-[88px] h-[88px] rounded-full bg-white border border-[#efe3da] flex items-center justify-center shadow-sm mb-6 relative transition-transform duration-500 group-hover:-translate-y-2">
                    {step.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#d2c5b8] text-sm font-semibold">{step.step}</span>
                    <h3 className="text-lg font-serif text-[#3a3128]">{step.title}</h3>
                  </div>
                  <p className="text-sm text-[#5f5146] px-2">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CorporateFeatures;
