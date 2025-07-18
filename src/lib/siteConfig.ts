export const siteConfig = {
  // Restaurant Basic Info
  restaurantName: "Bella Vista",
  tagline: "Exceptional Dining Experience",
  description:
    "Award-winning restaurant offering exceptional cuisine with locally sourced ingredients and impeccable service in the heart of downtown.",
  establishedYear: 2008,

  // Contact Information
  address: {
    street: "123 Gourmet Street",
    city: "Downtown District",
    state: "NY",
    zipCode: "10001",
    full: "123 Gourmet Street, Downtown District, NY 10001",
  },
  phoneNumber: "(555) 123-FOOD",
  email: "info@bellavista.com",

  // Hours
  hours: {
    weekdays: "Mon-Thu: 5:00 PM - 10:00 PM",
    weekends: "Fri-Sat: 5:00 PM - 11:00 PM",
    sunday: "Sun: 4:00 PM - 9:00 PM",
  },

  // Social Media
  socialLinks: {
    instagram: "https://instagram.com/bellavista",
    facebook: "https://facebook.com/bellavista",
    twitter: "https://twitter.com/bellavista",
  },

  // Images
  images: {
    logo: "/placeholder.svg?height=40&width=120",
    heroImage: "/placeholder.svg?height=1080&width=1920",
    aboutImage: "/placeholder.svg?height=600&width=500",
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Restaurant interior",
        title: "Elegant Dining Room",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Chef preparing food",
        title: "Master Chef at Work",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Signature dish",
        title: "Signature Truffle Risotto",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Wine cellar",
        title: "Premium Wine Selection",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Private dining",
        title: "Private Dining Room",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Bar area",
        title: "Cocktail Bar",
      },
    ],
  },

  // Menu Items
  menuItems: [
    {
      id: 1,
      name: "Truffle Risotto",
      price: 28,
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Creamy Arborio rice with wild mushrooms, black truffle, and aged Parmesan",
      badge: "Chef's Choice",
      badgeColor: "bg-emerald-500",
      rating: 5,
      reviews: 127,
    },
    {
      id: 2,
      name: "Atlantic Salmon",
      price: 32,
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Perfectly grilled salmon with lemon herb butter and seasonal vegetables",
      badge: "Popular",
      badgeColor: "bg-blue-500",
      rating: 5,
      reviews: 89,
    },
    {
      id: 3,
      name: "Wagyu Ribeye",
      price: 65,
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Premium Wagyu beef with roasted garlic mash and red wine reduction",
      badge: "Premium",
      badgeColor: "bg-purple-500",
      rating: 5,
      reviews: 156,
    },
    {
      id: 4,
      name: "Lobster Thermidor",
      price: 45,
      image: "/placeholder.svg?height=300&width=400",
      description: "Fresh lobster in creamy cognac sauce with gruyere cheese",
      badge: "Signature",
      badgeColor: "bg-red-500",
      rating: 5,
      reviews: 98,
    },
    {
      id: 5,
      name: "Duck Confit",
      price: 38,
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Slow-cooked duck leg with cherry gastrique and roasted vegetables",
      badge: "Traditional",
      badgeColor: "bg-amber-500",
      rating: 5,
      reviews: 76,
    },
  ],

  // Features
  features: [
    {
      icon: "ChefHat",
      title: "Expert Chefs",
      description:
        "Our master chefs bring decades of culinary expertise to every dish",
    },
    {
      icon: "Heart",
      title: "Fresh Ingredients",
      description: "Locally sourced, organic ingredients prepared fresh daily",
    },
    {
      icon: "Award",
      title: "Award Winning",
      description: "Recognized for excellence in cuisine and service",
    },
  ],

  // Reviews
  reviews: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Food Enthusiast",
      image: "/placeholder.svg?height=50&width=50",
      rating: 5,
      review:
        "Absolutely incredible experience! The truffle risotto was divine, and the service was impeccable. This is now our go-to spot for special occasions.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Executive",
      image: "/placeholder.svg?height=50&width=50",
      rating: 5,
      review:
        "The atmosphere is perfect for a romantic dinner. The Wagyu steak was cooked to perfection, and the wine selection is outstanding.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Local Resident",
      image: "/placeholder.svg?height=50&width=50",
      rating: 5,
      review:
        "Every visit exceeds expectations. The attention to detail in both food and service makes this restaurant truly special. Highly recommended!",
    },
  ],

  // Special Offers
  offers: [
    {
      icon: "Gift",
      title: "Happy Hour Special",
      description:
        "50% off appetizers and premium cocktails every weekday from 4-6 PM",
      buttonText: "Learn More",
    },
    {
      icon: "Heart",
      title: "Date Night Package",
      description:
        "3-course dinner for two with complimentary wine pairing - $89",
      buttonText: "Reserve Now",
    },
  ],

  // FAQ
  faqs: [
    {
      question: "Do you take reservations?",
      answer:
        "Yes, we highly recommend making reservations, especially for dinner service and weekends. You can book online through our website or call us directly.",
    },
    {
      question: "What are your hours of operation?",
      answer:
        "We're open Monday through Thursday from 5:00 PM to 10:00 PM, Friday and Saturday from 5:00 PM to 11:00 PM, and Sunday from 4:00 PM to 9:00 PM.",
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer:
        "We offer vegetarian, vegan, and gluten-free options. Please inform your server of any allergies or dietary restrictions, and our chef will be happy to accommodate your needs.",
    },
    {
      question: "Is there parking available?",
      answer:
        "Yes, we offer complimentary valet parking for all guests. There's also street parking and a public parking garage within a block of the restaurant.",
    },
    {
      question: "Do you offer private dining?",
      answer:
        "Yes, we have a beautiful private dining room that can accommodate up to 20 guests. It's perfect for special occasions, business dinners, or intimate celebrations.",
    },
    {
      question: "What's your dress code?",
      answer:
        "We maintain a smart casual dress code. While we don't require formal attire, we ask that guests avoid athletic wear, flip-flops, and overly casual clothing.",
    },
  ],

  // About Section
  about: {
    badge: "Our Story",
    title: "Passion for Culinary Excellence",
    description: [
      `For over ${
        new Date().getFullYear() - 2008
      } years, Bella Vista has been a cornerstone of fine dining, where traditional techniques meet modern innovation. Our commitment to excellence has earned us recognition from food critics and loyal patrons alike.`,
      "Every dish is crafted with locally sourced ingredients, prepared by our award-winning chefs who bring decades of experience from renowned kitchens around the world.",
    ],
    stats: [
      { number: "15+", label: "Years Experience" },
      { number: "5", label: "Master Chefs" },
      { number: "12", label: "Awards Won" },
    ],
    award: {
      title: "Best Restaurant 2023",
      subtitle: "Culinary Excellence Award",
    },
  },

  // Newsletter Popup
  newsletterPopup: {
    title: "Exclusive Offers Await!",
    subtitle: "Join our newsletter and unlock amazing benefits",
    benefits: [
      "20% off your first reservation",
      "Exclusive access to special events",
      "Weekly culinary updates & recipes",
    ],
    buttonText: "Subscribe & Get 20% Off",
    successTitle: "Welcome to the Family!",
    successMessage: "Check your email for your exclusive 20% off coupon.",
  },

  // Meta Information
  meta: {
    title: "Bella Vista - Exceptional Dining Experience",
    description:
      "Award-winning restaurant offering exceptional cuisine with locally sourced ingredients and impeccable service in the heart of downtown.",
    keywords:
      "fine dining, restaurant, gourmet food, reservations, catering, luxury dining",
  },

  // Footer
  footer: {
    quickLinks: ["Menu", "Reservations", "Private Events", "Gift Cards"],
    services: ["Catering", "Delivery", "Takeout", "Wine Selection"],
    creditText: "Proudly made by",
    creditLink: "https://quickprimetech.vercel.app/",
    creditName: "QuickPrimeTech",
  },
};

export type SiteConfig = typeof siteConfig;
