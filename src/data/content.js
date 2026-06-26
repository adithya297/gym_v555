// Centralized dummy content for V555 Fitness Zone.
// Replace image URLs / copy with real brand assets when available.

import {
  FiActivity,
  FiHeart,
  FiTrendingUp,
  FiZap,
  FiUsers,
  FiTarget,
  FiClipboard,
  FiShield,
  FiClock,
  FiAward,
  FiSmile,
  FiDollarSign,
} from 'react-icons/fi'
import {
  GiWeightLiftingUp,
  GiGymBag,
  GiMuscleUp,
} from 'react-icons/gi'

export const BRAND = {
  name: 'V555 Fitness Zone',
  short: 'V555',
  tagline: 'Transform Your Body. Transform Your Life.',
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  email: 'hello@v555fitnesszone.com',
  emailHref: 'mailto:hello@v555fitnesszone.com',
  address: '555 Iron Avenue, Fitness District, Mumbai 400001',
  hours: [
    { day: 'Monday – Friday', time: '5:00 AM – 11:00 PM' },
    { day: 'Saturday', time: '6:00 AM – 10:00 PM' },
    { day: 'Sunday', time: '7:00 AM – 9:00 PM' },
  ],
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
  },
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'Services', href: '#services' },
  { label: 'Personal Training', href: '#personal-training' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const ABOUT = {
  image:
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1100&q=80',
  imageAlt: 'Premium interior of V555 Fitness Zone',
  points: [
    {
      icon: GiGymBag,
      title: 'Modern Equipment',
      text: 'State-of-the-art machines from world-class brands, maintained daily.',
    },
    {
      icon: FiAward,
      title: 'Certified Trainers',
      text: 'Internationally certified coaches who train with science, not guesswork.',
    },
    {
      icon: FiShield,
      title: 'Clean Environment',
      text: 'Hospital-grade hygiene, climate control and pristine facilities.',
    },
    {
      icon: FiTarget,
      title: 'Personalized Guidance',
      text: 'Plans built around your body, goals, lifestyle and timeline.',
    },
  ],
}

export const EQUIPMENT = [
  {
    name: 'Treadmills',
    desc: 'Commercial-grade cushioned decks with incline and heart-rate sync.',
    image:
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cross Trainers',
    desc: 'Low-impact full-body cardio with smooth elliptical motion.',
    image:
      'https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Exercise Bikes',
    desc: 'Studio spin and recumbent bikes for endurance and recovery.',
    image:
      'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Smith Machine',
    desc: 'Guided barbell path for safe, controlled compound lifting.',
    image:
      'https://images.unsplash.com/photo-1652363722833-509b3aac287b?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Cable Crossover',
    desc: 'Dual adjustable pulleys for limitless functional movements.',
    image:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Bench Press',
    desc: 'Flat, incline and decline benches with Olympic barbells.',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Squat Rack',
    desc: 'Heavy-duty power racks with safety spotters and pull-up bars.',
    image:
      'https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Dumbbells',
    desc: 'Full rubber-hex range from 2.5 kg up to 60 kg per hand.',
    image:
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Barbells',
    desc: 'Olympic bars, EZ curls and trap bars with calibrated plates.',
    image:
      'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Functional Training Area',
    desc: 'Turf track, kettlebells, battle ropes, rigs and plyo boxes.',
    image:
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
  },
]

export const SERVICES = [
  {
    icon: GiWeightLiftingUp,
    title: 'Strength Training',
    desc: 'Progressive overload programming to build raw, functional power.',
  },
  {
    icon: FiTrendingUp,
    title: 'Weight Loss Programs',
    desc: 'Sustainable fat-loss blueprints combining training and nutrition.',
  },
  {
    icon: GiMuscleUp,
    title: 'Muscle Building',
    desc: 'Hypertrophy-focused splits engineered for visible lean gains.',
  },
  {
    icon: FiHeart,
    title: 'Cardio Training',
    desc: 'Heart-healthy conditioning across machines and open floor work.',
  },
  {
    icon: FiActivity,
    title: 'Functional Fitness',
    desc: 'Movement patterns that make everyday life stronger and pain-free.',
  },
  {
    icon: FiZap,
    title: 'HIIT',
    desc: 'High-intensity intervals that torch calories long after you leave.',
  },
  {
    icon: FiUsers,
    title: 'Group Classes',
    desc: 'Energetic coached sessions that keep motivation sky-high.',
  },
  {
    icon: FiClipboard,
    title: 'Nutrition Guidance',
    desc: 'Custom meal frameworks that fit your culture and your goals.',
  },
]

export const TRAINING_BENEFITS = [
  { icon: FiTarget, title: 'Customized Workout Plans', text: 'Programs designed for your body type and goals.' },
  { icon: FiClipboard, title: 'Diet Guidance', text: 'Macro-balanced nutrition tailored to your lifestyle.' },
  { icon: FiUsers, title: 'One-on-One Coaching', text: 'Undivided attention and perfect-form correction.' },
  { icon: FiTrendingUp, title: 'Progress Tracking', text: 'Data-driven check-ins so you always see results.' },
  { icon: FiClock, title: 'Flexible Timings', text: 'Sessions that fit around your schedule, early or late.' },
  { icon: FiAward, title: 'Elite Trainers', text: 'Coaches with national certifications and real results.' },
]

export const TRAINER = {
  image:
    'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=900&q=80',
  imageAlt: 'V555 certified personal trainer coaching a client',
  name: 'Train with the best',
}

export const WHY_CHOOSE = [
  { icon: FiAward, title: 'Certified Trainers', text: 'Every coach is internationally accredited.' },
  { icon: GiGymBag, title: 'Modern Equipment', text: 'Premium machines refreshed every season.' },
  { icon: FiTarget, title: 'Personalized Plans', text: 'No cookie-cutter routines — ever.' },
  { icon: FiShield, title: 'Hygiene First', text: 'Sanitized stations and pristine showers.' },
  { icon: FiDollarSign, title: 'Affordable Memberships', text: 'Luxury experience, honest pricing.' },
  { icon: FiSmile, title: 'Friendly Environment', text: 'A judgment-free, motivating community.' },
]

export const STATS = [
  { value: 25, suffix: '+', label: 'Certified Trainers' },
  { value: 120, suffix: '+', label: 'Premium Machines' },
  { value: 5000, suffix: '+', label: 'Happy Members' },
  { value: 12, suffix: '', label: 'Years of Excellence' },
]

export const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80', alt: 'Weight training section', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80', alt: 'Cardio area' },
  { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=700&q=80', alt: 'Gym interior' },
  { src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=700&q=80', alt: 'Workout session' },
  { src: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=700&q=80', alt: 'Functional training' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80', alt: 'Personal training session', span: 'lg:col-span-2' },
  { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=700&q=80', alt: 'Dumbbell rack' },
]

export const TESTIMONIALS = [
  {
    name: 'Aarav Mehta',
    role: 'Lost 18 kg in 6 months',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    review:
      'V555 completely changed my relationship with fitness. The trainers actually care, and the facility feels like a five-star resort. Best decision I ever made.',
  },
  {
    name: 'Priya Sharma',
    role: 'Strength Member',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    review:
      'I finally deadlift twice my bodyweight. The coaching is world-class and the equipment is always spotless. The premium vibe keeps me coming back daily.',
  },
  {
    name: 'Rohan Kapoor',
    role: 'Muscle Building Program',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&q=80',
    review:
      'The personalized plan and nutrition guidance got me the physique I chased for years. V555 is on another level compared to any gym I have tried.',
  },
  {
    name: 'Neha Verma',
    role: 'HIIT & Group Classes',
    rating: 5,
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    review:
      'The energy in the group classes is unreal. I never thought working out could feel this premium and this fun at the same time. Highly recommend.',
  },
]
