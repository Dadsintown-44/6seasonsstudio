'use client';

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const containerVariants = {
    hidden: {},
    visible: {
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
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-serif text-gray-800 mb-20"
        >
          CONTACT US
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        >
          {/* Address */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="mb-4 text-gray-800">
              <MapPin size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-bold tracking-widest mb-4 uppercase">Address</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
              112, Mahavir Inds Estate,Kachpada, Malad WestMumbai 400064
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="mb-4 text-gray-800">
              <Phone size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-bold tracking-widest mb-4 uppercase">Phone</h3>
            <p className="text-gray-500 text-sm">
              +91 73100 02474
            </p>
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants} className="flex flex-col items-center">
            <div className="mb-4 text-gray-800">
              <Mail size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-bold tracking-widest mb-4 uppercase">Email</h3>
            <p className="text-gray-500 text-sm">
              6seasonsstudio@gmail.com
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
