
import React, { useState } from 'react';
import { Container, SectionTitle, Badge } from './ui-components';
import CouponCard from './CouponCard';

// Define coupon categories
const categories = [
  "All",
  "UPSC",
  "GATE",
  "MBA/CAT",
  "LAW/CLAT",
  "CA",
  "CS",
  "IIT JAM",
  "UGC NET",
  "CSIR NET",
  "IIT JEE",
  "NEET",
  "SSC",
  "Banking",
  "Power Batch",
  "NDA",
  "Railway",
  "Judiciary",
  "Skills",
];

// Define sample coupon data (this would be manually updated)
const coupons = [
  {
    id: 1,
    code: "PRISHE0002",
    discount: "25% OFF",
    batchType: "All Batches",
    description: "Valid on all PW preparation batches: UPSC, GATE, MBA/CAT, LAW/CLAT, CA, CS, IIT JAM, UGC NET, CSIR NET, IIT JEE, NEET, SSC, Banking, Power Batch, NDA, Railway, Judiciary, Skills",
    expiryDate: "Dec 31, 2023",
  },
  {
    id: 2,
    code: "PRISHE0002",
    discount: "30% OFF",
    batchType: "UPSC",
    description: "Applicable on all UPSC courses",
    expiryDate: "Jan 15, 2024",
  },
  {
    id: 3,
    code: "PRISHE0002",
    discount: "20% OFF",
    batchType: "GATE",
    description: "For all GATE preparation courses",
  },
  {
    id: 4,
    code: "PRISHE0002",
    discount: "15% OFF",
    batchType: "MBA/CAT",
    description: "For all MBA/CAT preparation batches",
    expiryDate: "Feb 28, 2024",
  },
  {
    id: 5,
    code: "PRISHE0002",
    discount: "₹1000 OFF",
    batchType: "LAW/CLAT",
    description: "Flat discount on LAW/CLAT courses",
  },
  {
    id: 6,
    code: "PRISHE0002",
    discount: "25% OFF",
    batchType: "CA",
    description: "For CA entrance preparation",
    expiryDate: "Mar 15, 2024",
  },
  {
    id: 7,
    code: "PRISHE0002",
    discount: "20% OFF",
    batchType: "CS",
    description: "Valid on CS courses",
  },
  {
    id: 8,
    code: "PRISHE0002",
    discount: "30% OFF",
    batchType: "IIT JAM",
    description: "For IIT JAM preparation batches",
  },
  {
    id: 9,
    code: "PRISHE0002",
    discount: "15% OFF",
    batchType: "UGC NET",
    description: "For UGC NET preparation batch",
    expiryDate: "Apr 10, 2024",
  },
  {
    id: 10,
    code: "PRISHE0002",
    discount: "20% OFF",
    batchType: "CSIR NET",
    description: "Valid for CSIR NET course",
    expiryDate: "May 5, 2024",
  },
  {
    id: 11,
    code: "PRISHE0002",
    discount: "₹500 OFF",
    batchType: "IIT JEE",
    description: "For IIT JEE preparation program",
  },
  {
    id: 12,
    code: "PRISHE0002",
    discount: "10% OFF",
    batchType: "NEET",
    description: "For all NEET preparation courses",
  },
  {
    id: 13,
    code: "PRISHE0002",
    discount: "25% OFF",
    batchType: "SSC",
    description: "For SSC exam preparation",
    expiryDate: "Jun 20, 2024",
  },
  {
    id: 14,
    code: "PRISHE0002",
    discount: "30% OFF",
    batchType: "Banking",
    description: "For banking exam complete preparation package",
  },
  {
    id: 15,
    code: "PRISHE0002",
    discount: "₹2000 OFF",
    batchType: "Power Batch",
    description: "For Power Batch preparation program",
    expiryDate: "Jul 15, 2024",
  },
  {
    id: 16,
    code: "PRISHE0002",
    discount: "35% OFF",
    batchType: "NDA",
    description: "For NDA exam preparation course",
  },
  {
    id: 17,
    code: "PRISHE0002",
    discount: "25% OFF",
    batchType: "Railway",
    description: "For railway exam preparation",
    expiryDate: "Aug 10, 2024",
  },
  {
    id: 18,
    code: "PRISHE0002",
    discount: "40% OFF",
    batchType: "Judiciary",
    description: "For judiciary exam preparation courses",
  },
  {
    id: 19,
    code: "PRISHE0002",
    discount: "20% OFF",
    batchType: "Skills",
    description: "For all skill development courses",
    expiryDate: "Sep 30, 2024",
  },
];

const CouponSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredCoupons = selectedCategory === "All" 
    ? coupons 
    : coupons.filter(coupon => coupon.batchType === selectedCategory);

  return (
    <section id="coupons" className="py-16 relative bg-slate-50">
      <Container>
        <div className="space-y-10 animate-scale-in">
          <div className="text-center">
            <SectionTitle>Coupon Codes</SectionTitle>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Browse through our collection of verified Physics Wallah coupon codes to get discounts on your course enrollments.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-blue-100 text-gray-700 hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid gap-4">
            {filteredCoupons.length > 0 ? (
              filteredCoupons.map((coupon) => (
                <CouponCard
                  key={coupon.id}
                  code={coupon.code}
                  discount={coupon.discount}
                  batchType={coupon.batchType}
                  description={coupon.description}
                  expiryDate={coupon.expiryDate}
                />
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No coupons available for this category at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CouponSection;
