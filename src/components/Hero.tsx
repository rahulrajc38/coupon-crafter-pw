
import React from 'react';
import { Container } from './ui-components';

const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700">
            Physics Wallah Coupons
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Save on your educational journey with these publicly available coupon codes for Physics Wallah courses. No login required, just copy and use.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a 
              href="#coupons" 
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow-sm hover:shadow-md transition-all hover:bg-blue-700"
            >
              View Coupon Codes
            </a>
            <a 
              href="#courses" 
              className="px-6 py-3 rounded-lg bg-white text-blue-600 border border-blue-100 font-medium shadow-sm hover:shadow-md transition-all hover:bg-blue-50"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
