/**
 * IRON PULSE FITNESS - Configuration & Data Store
 * All demonstration prices, gym information, programs, and trainer profiles are centralized here.
 */

export const GYM_CONFIG = {
  brandName: "IRON PULSE FITNESS",
  tagline: "BUILT BY DISCIPLINE. DEFINED BY STRENGTH.",
  subTagline: "Train with purpose. Build strength. Push beyond your limits. Your next level starts here.",
  preHeadline: "YOUR FITNESS. YOUR POWER.",
  
  // Demonstration Contact Details (Clearly marked as placeholder)
  contact: {
    address: "Plot 42, Sector 18, Commercial Hub, New Delhi, India 110001 (Demonstration Address)",
    phone: "+91 98765 43210 (Demo Contact)",
    email: "inquiries@ironpulsefitness-demo.com",
    hours: [
      { days: "Monday – Friday", time: "5:00 AM – 11:00 PM" },
      { days: "Saturday", time: "6:00 AM – 10:00 PM" },
      { days: "Sunday", time: "7:00 AM – 8:00 PM" }
    ],
    socials: [
      { name: "Instagram", url: "#", handle: "@ironpulse_demo" },
      { name: "YouTube", url: "#", handle: "IronPulseFitnessDemo" },
      { name: "Twitter/X", url: "#", handle: "@ironpulse_demo" },
      { name: "Facebook", url: "#", handle: "IronPulseFitnessDemo" }
    ]
  },

  // Highlight Features for Trust Bar
  highlights: [
    {
      id: "expert-coaching",
      title: "Expert Coaching",
      description: "Certified trainers with structured periodization methodologies."
    },
    {
      id: "modern-equipment",
      title: "Modern Equipment",
      description: "Olympic-grade barbells, calibrated plates & biomechanical machines."
    },
    {
      id: "flexible-memberships",
      title: "Flexible Memberships",
      description: "Transparent tiers with zero hidden commitments or lock-ins."
    },
    {
      id: "supportive-community",
      title: "Supportive Community",
      description: "An authentic, driven atmosphere where discipline thrives."
    }
  ],

  // Core Values
  values: [
    {
      number: "01",
      title: "Train with purpose",
      description: "Every movement has an objective. We emphasize deliberate effort over aimless fatigue."
    },
    {
      number: "02",
      title: "Progress with guidance",
      description: "Receive measurable programming and technical coaching to break plateaus safely."
    },
    {
      number: "03",
      title: "Build lasting habits",
      description: "Fitness is a life-long discipline. We build sustainable consistency, not 30-day gimmicks."
    }
  ],

  // Fitness Programs
  programs: [
    {
      id: "strength-training",
      title: "STRENGTH TRAINING",
      tagline: "Foundational Power & Hypertrophy",
      description: "Build strength, improve technique, and develop a solid foundation.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
      details: {
        focus: "Compound lifts, progressive overload, barbell mechanics, and muscle hypertrophy.",
        idealFor: "Beginners wanting strong lifting fundamentals and intermediate lifters chasing strength milestones.",
        schedule: "4-5 sessions / week (60-75 min)",
        includes: [
          "Barbell technique assessments (Squat, Bench, Deadlift, Overhead Press)",
          "Periodized 8-week progressive overload split",
          "Access to calibrated iron plates and competition benches",
          "Recovery and mobility guidelines"
        ]
      }
    },
    {
      id: "personal-training",
      title: "PERSONAL TRAINING",
      tagline: "Tailored 1-on-1 Coaching",
      description: "Get individualized guidance and a program tailored to your goals.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
      details: {
        focus: "Customized exercise prescription, biomechanical alignment, and dedicated accountability.",
        idealFor: "Individuals recovering from injuries, athletes preparing for competition, or anyone wanting accelerated, safe results.",
        schedule: "Flexible 1-on-1 scheduling with assigned head coach",
        includes: [
          "Comprehensive movement screen and posture evaluation",
          "Personalized nutrition habits and macronutrient guidance",
          "Dedicated coach in your corner every rep",
          "Bi-weekly body composition and strength milestone reviews"
        ]
      }
    },
    {
      id: "hiit-conditioning",
      title: "HIIT & CONDITIONING",
      tagline: "Athletic Stamina & Metabolic Engine",
      description: "Challenge your endurance, coordination, and overall conditioning.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
      details: {
        focus: "Cardiovascular work capacity, sprint mechanics, battle ropes, sleds, and high-intensity intervals.",
        idealFor: "Those seeking enhanced lung capacity, functional athleticism, and high caloric burn.",
        schedule: "3-4 high-energy sessions / week (45 min)",
        includes: [
          "Dynamic heart-rate zone conditioning",
          "Turf sprint tracks and weighted prowler sled pushes",
          "Kettlebell complex circuits",
          "Low-impact aerobic base capacity blocks"
        ]
      }
    },
    {
      id: "weight-management",
      title: "WEIGHT MANAGEMENT",
      tagline: "Sustainable Body Recomposition",
      description: "Develop sustainable exercise habits with structured coaching.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
      details: {
        focus: "Long-term body recomposition through resistance training, metabolic activity, and nutritional literacy.",
        idealFor: "Anyone tired of restrictive diets seeking healthy fat loss, lean muscle tone, and lasting vitality.",
        schedule: "Balanced 4 days / week (45-60 min)",
        includes: [
          "Metabolic resistance training to preserve lean mass",
          "Realistic calorie tracking and mindful lifestyle blueprint",
          "Weekly habit checks and ongoing coach support",
          "Stress, sleep, and hydration optimization routines"
        ]
      }
    }
  ],

  // Demonstration Trainers
  trainers: [
    {
      id: "marcus-vance",
      name: "Marcus Vance",
      specialty: "Strength & Conditioning",
      experience: "8+ Years Coaching",
      bio: "Former collegiate powerlifter specialized in barbell biomechanics, nervous system conditioning, and raw strength development.",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      credentials: "CSCS, USAW Level 2",
      socialPlaceholder: "@marcus_strength"
    },
    {
      id: "elena-rostova",
      name: "Elena Rostova",
      specialty: "Personal Training",
      experience: "7+ Years Coaching",
      bio: "Focuses on postural restoration, functional hypertrophy, and targeted athlete programming for sustainable personal transformations.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      credentials: "NASM-CPT, FMS Certified",
      socialPlaceholder: "@elena_trains"
    },
    {
      id: "david-chen",
      name: "David Chen",
      specialty: "Functional Fitness",
      experience: "6+ Years Coaching",
      bio: "Combines high-intensity athletic conditioning with joint mobility protocols to engineer injury-resilient, agile bodies.",
      image: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?auto=format&fit=crop&w=800&q=80",
      fallbackImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
      credentials: "EXOS Performance Specialist",
      socialPlaceholder: "@david_chen_fit"
    }
  ],

  // Demonstration Membership Plans (Easily editable here)
  memberships: [
    {
      id: "starter",
      name: "STARTER",
      subtitle: "Foundational access for independent lifters",
      price: "₹999",
      billingPeriod: "/month",
      ctaLabel: "CHOOSE STARTER",
      popular: false,
      features: [
        "Monthly gym floor access",
        "Full standard gym equipment & free weights",
        "General open training area",
        "Locker room & clean shower facilities",
        "Access during all regular opening hours",
        "Iron Pulse mobile check-in app"
      ]
    },
    {
      id: "performance",
      name: "PERFORMANCE",
      subtitle: "Our most balanced commitment for serious progress",
      price: "₹1,799",
      billingPeriod: "/month",
      ctaLabel: "CHOOSE PERFORMANCE",
      popular: true,
      popularBadge: "MOST POPULAR",
      features: [
        "Everything included in Starter",
        "All standard & advanced gym facilities",
        "Unlimited weekly group training sessions",
        "Initial 60-min fitness & mobility orientation",
        "Access to functional turf & conditioning zone",
        "Quarterly physical milestone assessment"
      ]
    },
    {
      id: "elite",
      name: "ELITE",
      subtitle: "Comprehensive guidance for peak performance",
      price: "₹2,999",
      billingPeriod: "/month",
      ctaLabel: "CHOOSE ELITE",
      popular: false,
      features: [
        "Everything included in Performance",
        "Monthly 1-on-1 personal training consultation",
        "Priority custom program guidance & updates",
        "Nutritional strategy & habit tracking review",
        "Recovery lounge & sauna access",
        "Complimentary guest pass (2 per month)"
      ]
    }
  ],

  // Demonstration Testimonials
  testimonials: [
    {
      id: "t1",
      quote: "The coaching staff changed how I approach barbell training. The culture here is focused on genuine progress and discipline without any ego.",
      author: "Vikram S.",
      role: "Member for 14 Months",
      program: "Strength Training",
      rating: 5
    },
    {
      id: "t2",
      quote: "As a busy professional, the structured programming took out all the guesswork. I feel stronger and more energized than I have in a decade.",
      author: "Pooja M.",
      role: "Member for 8 Months",
      program: "Personal Training",
      rating: 5
    },
    {
      id: "t3",
      quote: "The community pushes you forward on the days you want to quit. Joining Iron Pulse was the best decision I made for my physical and mental resilience.",
      author: "Rohan K.",
      role: "Member for 1.5 Years",
      program: "HIIT & Conditioning",
      rating: 5
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      id: "faq-1",
      question: "Is the gym suitable for beginners?",
      answer: "Yes, absolutely. Every new member receives an introductory walkthrough to understand gym etiquette, machine setups, and safety basics. Our coaches are always on the floor to advise on proper form so you never feel intimidated."
    },
    {
      id: "faq-2",
      question: "What should I bring for my first workout?",
      answer: "Bring comfortable athletic wear, clean indoor training shoes, a personal sweat towel, and a refillable water bottle. We provide filtered water stations, locker storage, and clean shower facilities."
    },
    {
      id: "faq-3",
      question: "Do you offer personal training?",
      answer: "Yes. We offer both 1-on-1 personal training and hybrid small-group coaching. You can select personal training directly when inquiring or add individual coaching sessions to any active membership."
    },
    {
      id: "faq-4",
      question: "How do I choose a membership?",
      answer: "If you prefer independent lifting, the Starter tier is ideal. If you thrive on group energy and structured workouts, Performance is our recommended sweet spot. For personalized coach guidance and recovery access, Elite provides the full experience."
    },
    {
      id: "faq-5",
      question: "Can I contact the gym before joining?",
      answer: "Certainly. You can submit the inquiry form on this page or visit during staffed hours to tour the floor, inspect the equipment, and speak directly with one of our coaches before making any decision."
    }
  ]
};
