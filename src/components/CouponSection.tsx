
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
    code: "PWALLBATCH",
    discount: "25% OFF",
    batchType: "UPSC",
    description: "Valid on all PW UPSC preparation batches",
    expiryDate: "Dec 31, 2023",
  },
  {
    id: 2,
    code: "GATESAVE30",
    discount: "30% OFF",
    batchType: "GATE",
    description: "Applicable on all GATE courses",
    expiryDate: "Jan 15, 2024",
  },
  {
    id: 3,
    code: "MBACATPW",
    discount: "20% OFF",
    batchType: "MBA/CAT",
    description: "For all MBA/CAT preparation courses",
  },
  {
    id: 4,
    code: "LAWCLAT15",
    discount: "15% OFF",
    batchType: "LAW/CLAT",
    description: "For all LAW/CLAT preparation batches",
    expiryDate: "Feb 28, 2024",
  },
  {
    id: 5,
    code: "CAPW2023",
    discount: "₹1000 OFF",
    batchType: "CA",
    description: "Flat discount on CA courses",
  },
  {
    id: 6,
    code: "CSPREP25",
    discount: "25% OFF",
    batchType: "CS",
    description: "For CS entrance preparation",
    expiryDate: "Mar 15, 2024",
  },
  {
    id: 7,
    code: "IITJAM20",
    discount: "20% OFF",
    batchType: "IIT JAM",
    description: "Valid on IIT JAM courses",
  },
  {
    id: 8,
    code: "UGCNET30",
    discount: "30% OFF",
    batchType: "UGC NET",
    description: "For UGC NET preparation batches",
  },
  {
    id: 9,
    code: "CSIRNET15",
    discount: "15% OFF",
    batchType: "CSIR NET",
    description: "For CSIR NET preparation batch",
    expiryDate: "Apr 10, 2024",
  },
  {
    id: 10,
    code: "IITJEE20",
    discount: "20% OFF",
    batchType: "IIT JEE",
    description: "Valid for IIT JEE course",
    expiryDate: "May 5, 2024",
  },
  {
    id: 11,
    code: "NEET2023",
    discount: "₹500 OFF",
    batchType: "NEET",
    description: "For NEET preparation program",
  },
  {
    id: 12,
    code: "SSCGK10",
    discount: "10% OFF",
    batchType: "SSC",
    description: "For all SSC preparation courses",
  },
  {
    id: 13,
    code: "BANKING25",
    discount: "25% OFF",
    batchType: "Banking",
    description: "For banking exam preparation",
    expiryDate: "Jun 20, 2024",
  },
  {
    id: 14,
    code: "POWER30",
    discount: "30% OFF",
    batchType: "Power Batch",
    description: "For power batch complete preparation package",
  },
  {
    id: 15,
    code: "NDAPW",
    discount: "₹2000 OFF",
    batchType: "NDA",
    description: "For NDA preparation program",
    expiryDate: "Jul 15, 2024",
  },
  {
    id: 16,
    code: "RAILWAY35",
    discount: "35% OFF",
    batchType: "Railway",
    description: "For railway exam preparation course",
  },
  {
    id: 17,
    code: "JUDICIARY25",
    discount: "25% OFF",
    batchType: "Judiciary",
    description: "For judiciary exam preparation",
    expiryDate: "Aug 10, 2024",
  },
  {
    id: 18,
    code: "SKILLCOMBO",
    discount: "40% OFF",
    batchType: "Skills",
    description: "For skill development courses",
  },
  {
    id: 19,
    code: "PWALLBATCH",
    discount: "20% OFF",
    batchType: "UPSC",
    description: "For all PW batches and courses",
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
