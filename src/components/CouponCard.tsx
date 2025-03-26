
import React from 'react';
import { cn } from "@/lib/utils";
import { Badge, CopyButton } from './ui-components';

export interface CouponCodeProps {
  code: string;
  discount: string;
  expiryDate?: string;
  batchType: string;
  description?: string;
  className?: string;
}

const CouponCard: React.FC<CouponCodeProps> = ({
  code,
  discount,
  expiryDate,
  batchType,
  description,
  className,
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg border border-blue-50 shadow-sm p-4",
        "transition-all duration-300 hover:shadow-md",
        "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
        className
      )}
    >
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <Badge>{batchType}</Badge>
          {expiryDate && (
            <span className="text-xs text-gray-500">Valid until {expiryDate}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="text-lg font-bold font-mono tracking-wide bg-blue-50 text-blue-700 px-3 py-1 rounded">
            {code}
          </div>
          <div className="text-green-600 font-semibold">
            {discount}
          </div>
        </div>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
      <div className="flex-shrink-0">
        <CopyButton value={code} />
      </div>
    </div>
  );
};

export default CouponCard;
