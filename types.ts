import { LucideIcon } from 'lucide-react';

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface AudienceSectionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  benefits: string[];
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}
