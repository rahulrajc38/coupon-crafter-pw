
import React from 'react';
import Hero from '@/components/Hero';
import CouponSection from '@/components/CouponSection';
import CourseSection from '@/components/CourseSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-blue-50 backdrop-blur-sm bg-white/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-blue-600">
                PW Coupons
              </h1>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#coupons" className="text-gray-600 hover:text-blue-600 transition-colors">
                Coupons
              </a>
              <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors">
                Courses
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <CouponSection />
        <CourseSection />
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} PW Coupons. Not affiliated with Physics Wallah.
              </p>
            </div>
            <div className="flex space-x-6">
              <p className="text-sm text-gray-500">
                All coupon codes are publicly available information.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
