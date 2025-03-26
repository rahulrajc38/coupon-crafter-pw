
import React, { useState, useEffect } from 'react';
import { toast } from "sonner";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export const SectionTitle = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={cn(
    "text-3xl font-display font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400",
    className
  )}>
    {children}
  </h2>
);

export const Badge = ({ 
  children, 
  variant = "default"
}: { 
  children: React.ReactNode;
  variant?: "default" | "outline" | "success";
}) => {
  const variantClasses = {
    default: "bg-blue-100 text-blue-800",
    outline: "border border-blue-200 text-blue-800 bg-transparent",
    success: "bg-green-100 text-green-800"
  };

  return (
    <span className={cn(
      "px-2.5 py-0.5 text-xs font-semibold rounded-full inline-flex items-center",
      variantClasses[variant]
    )}>
      {children}
    </span>
  );
};

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  onCopy?: () => void;
}

export const CopyButton = ({ 
  value, 
  className, 
  onCopy,
  ...props 
}: CopyButtonProps) => {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setHasCopied(true);
      toast.success("Coupon code copied!", {
        description: `${value} is ready to use`,
        duration: 3000,
      });
      onCopy?.();
    } catch (err) {
      toast.error("Failed to copy code");
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      type="button"
      className={cn(
        "relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-all",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        "bg-white hover:bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1.5",
        className
      )}
      onClick={handleCopy}
      {...props}
    >
      <span className="mr-2">{hasCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}</span>
      <span>{hasCopied ? "Copied" : "Copy"}</span>
      {hasCopied && (
        <span className="copy-indicator animate-copy-success">Copied!</span>
      )}
    </button>
  );
};

export const Container = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

export const Card = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn(
    "rounded-xl glass-effect p-6 transition-all duration-300 hover:shadow-md",
    className
  )}>
    {children}
  </div>
);
