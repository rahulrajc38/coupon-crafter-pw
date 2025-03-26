
import React, { useState } from 'react';
import { Container, SectionTitle, Badge } from './ui-components';
import CouponCard from './CouponCard';

// Define coupon categories
const categories = [
  "All",
  "NEET",
  "IIT JEE",
  "Foundation",
  "SSC",
  "GATE",
  "CAT/MBA",
];

// Define sample coupon data (this would be manually updated)
const coupons = [
  {
    id: 1,
    code: "PWBATCH25",
    discount: "25% OFF",
    batchType: "NEET",
    description: "Valid on all NEET preparation batches",
    expiryDate: "Dec 31, 2023",
  },
  {
    id: 2,
    code: "JEESAVE30",
    discount: "30% OFF",
    batchType: "IIT JEE",
    description: "Applicable on JEE Advanced courses",
    expiryDate: "Jan 15, 2024",
  },
  {
    id: 3,
    code: "PWFOUND20",
    discount: "20% OFF",
    batchType: "Foundation",
    description: "For class 9-10 foundation courses",
  },
  {
    id: 4,
    code: "SSCPW15",
    discount: "15% OFF",
    batchType: "SSC",
    description: "For all SSC preparation batches",
    expiryDate: "Feb 28, 2024",
  },
  {
    id: 5,
    code: "PWGATE2023",
    discount: "₹1000 OFF",
    batchType: "GATE",
    description: "Flat discount on GATE courses",
  },
  {
    id: 6,
    code: "CATPREP25",
    discount: "25% OFF",
    batchType: "CAT/MBA",
    description: "For MBA entrance preparation",
    expiryDate: "Mar 15, 2024",
  },
  {
    id: 7,
    code: "NEETCRASH20",
    discount: "20% OFF",
    batchType: "NEET",
    description: "Valid on NEET crash courses",
  },
  {
    id: 8,
    code: "JEELIVE30",
    discount: "30% OFF",
    batchType: "IIT JEE",
    description: "For live JEE Main batches",
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
