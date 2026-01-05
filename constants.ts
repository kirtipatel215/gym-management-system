import { Activity, Users, BarChart3, Trophy, Smartphone, Calendar, ShieldCheck, Zap, Heart, CheckCircle2 } from 'lucide-react';
import { Feature, Step, PricingPlan, AudienceSectionData, Testimonial } from './types';

export const APP_NAME = "Lumina Fit";

export const FEATURES: Feature[] = [
  {
    title: "Smart Access",
    description: "Touchless check-ins with facial recognition and geo-fencing technology. Secure, fast, and completely card-free.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Trainer Connect",
    description: "Empower trainers to build and assign custom digital plans instantly. Real-time feedback loops for better client results.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Growth Analytics",
    description: "Beautiful charts that visualize member growth, retention rates, and revenue streams in one glass dashboard.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Gamification",
    description: "Leaderboards, achievement badges, and social challenges to boost member engagement and community spirit.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  }
];

export const STEPS: Step[] = [
  {
    id: 1,
    title: "Join the Ecosystem",
    description: "Sign up in seconds via our mobile app or kiosk. Connect your wearables and set your fitness baseline.",
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800" 
  },
  {
    id: 2,
    title: "Train with Structure",
    description: "Receive AI-curated daily plans or connect with a personal trainer for a bespoke regimen.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Track & Optimize",
    description: "Log your sets, reps, and nutrition. Our engine analyzes your data to suggest real-time improvements.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Achieve & Celebrate",
    description: "Unlock milestones, climb the leaderboard, and see tangible health improvements over time.",
    image: "https://images.unsplash.com/photo-1552674605-46d536d29091?auto=format&fit=crop&q=80&w=800"
  }
];

export const AUDIENCE_SECTIONS: AudienceSectionData[] = [
  {
    id: "members",
    title: "For Members",
    subtitle: "Your Fitness, Elevated.",
    description: "Experience a gym that adapts to your schedule, remembers your goals, and celebrates your wins. The Lumina member app is your pocket personal trainer.",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80&w=800",
    benefits: ["Real-time progress tracking", "Community challenges", "Nutrition planning integration", "Seamless equipment booking"],
    icon: Users
  },
  {
    id: "trainers",
    title: "For Trainers",
    subtitle: "Coach Smarter, Scale Faster.",
    description: "Stop using spreadsheets. Manage clients, assign workouts, and track nutrition compliance all from a single, beautiful interface.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800",
    benefits: ["Client capacity management", "Automated check-in alerts", "Workout template library", "Direct messaging channel"],
    icon: Zap
  },
  {
    id: "owners",
    title: "For Owners",
    subtitle: "Total Control, Zero Stress.",
    description: "Oversee operations, revenue, and retention from a bird's-eye view. Make data-driven decisions that grow your bottom line.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    benefits: ["Financial forecasting", "Staff performance metrics", "Automated billing & invoicing", "Member churn prediction"],
    icon: BarChart3
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "$29",
    features: ["Member App Access", "Basic Analytics", "5 Staff Accounts", "Email Support"]
  },
  {
    name: "Pro",
    price: "$79",
    isPopular: true,
    features: ["Advanced Analytics", "Unlimited Staff", "Marketing Tools", "Priority 24/7 Support", "Custom Branding"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["White-label App", "API Access", "Dedicated Manager", "Multi-location", "On-site Training"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Gym Owner, FitLife Studio",
    quote: "Lumina changed how we operate. The glass interface isn't just pretty—it's incredibly intuitive. My staff loves it.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Personal Trainer",
    quote: "Finally, software that keeps up with me. Managing 40 clients used to be a nightmare. Now it's the best part of my day.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Member",
    quote: "The app is so smooth. I actually look forward to logging my workouts now. The design feels like a premium experience.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];
