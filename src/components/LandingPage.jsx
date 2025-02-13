import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div 
      className="min-h-screen w-screen bg-cover bg-center flex items-center justify-center text-white "
      style={{ backgroundImage: "url('/bg1.png')" }}
    >
      <div className="text-center">
        <motion.img
          src="/logo1.png"
          alt="Logo"
          className="mx-auto w-85 md:w-160"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        
        <motion.h1
          className="text-4xl md:text-4xl font-bold -mt-16" 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Simply Booking Me...
        </motion.h1>

        <br></br>
        <br></br>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <Link 
            to="/login"
            className="-md-12 px-6 py-3 bg-accent text-white rounded-lg text-lg"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
