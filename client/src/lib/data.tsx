// Product Data
export interface Product {
  id: number;
  name: string;
  description: string;
  dimensions: string;
  thickness: string;
  image: string;
  category: 'xps' | 'eps';
}

export const products: Product[] = [
  {
    id: 1,
    name: "XPS Standard Board",
    description: "High-density insulation for roofs, walls, and floors",
    dimensions: "1200 x 600mm",
    thickness: "30-100mm",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "xps"
  },
  {
    id: 2,
    name: "XPS High Density",
    description: "Superior compression strength for floor applications",
    dimensions: "1200 x 600mm",
    thickness: "40-120mm",
    image: "https://images.unsplash.com/photo-1565192259022-0427b058f372?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "xps"
  },
  {
    id: 3,
    name: "XPS Facade Insulation",
    description: "Specialized panels for exterior insulation systems",
    dimensions: "1200 x 600mm",
    thickness: "20-80mm",
    image: "https://images.unsplash.com/photo-1621619857292-82203d2cc80d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "xps"
  },
  {
    id: 4,
    name: "XPS Perimeter",
    description: "Moisture-resistant boards for below-grade applications",
    dimensions: "1200 x 600mm",
    thickness: "50-150mm",
    image: "https://images.unsplash.com/photo-1581094278151-bfb4003cce48?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "xps"
  },
  {
    id: 5,
    name: "EPS Standard",
    description: "Standard EPS boards for general insulation needs",
    dimensions: "1200 x 600mm",
    thickness: "20-150mm",
    image: "https://images.unsplash.com/photo-1477233534935-f5e6fe7c1159?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "eps"
  },
  {
    id: 6,
    name: "EPS Roof Insulation",
    description: "Tapered roof systems for effective drainage",
    dimensions: "Custom sizes",
    thickness: "50-250mm",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "eps"
  },
  {
    id: 7,
    name: "EPS Floor System",
    description: "Underfloor heating and acoustic insulation",
    dimensions: "1200 x 600mm",
    thickness: "20-70mm",
    image: "https://images.unsplash.com/photo-1621619857292-82203d2cc80d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "eps"
  },
  {
    id: 8,
    name: "EPS Decorative Elements",
    description: "Facade decorations and architectural elements",
    dimensions: "Custom shapes",
    thickness: "Various sizes",
    image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    category: "eps"
  }
];

// Project Data
export interface Project {
  id: number;
  name: string;
  description: string;
  location: string;
  year: string;
  image: string;
  category: 'commercial' | 'residential' | 'industrial';
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Modern Office Complex",
    description: "Complete thermal insulation solution for a 15-story office building featuring XPS facade system.",
    location: "Amman, Jordan",
    year: "2022",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "commercial"
  },
  {
    id: 2,
    name: "Luxury Apartment Complex",
    description: "High-performance EPS insulation for a residential development of 120 units, providing superior thermal comfort.",
    location: "Aqaba, Jordan",
    year: "2021",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "residential"
  },
  {
    id: 3,
    name: "Pharmaceutical Manufacturing Plant",
    description: "Specialized XPS high-density insulation for temperature-sensitive manufacturing facilities.",
    location: "Irbid, Jordan",
    year: "2023",
    image: "https://images.unsplash.com/photo-1581094728224-272fdc731f80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "industrial"
  },
  {
    id: 4,
    name: "Five-Star Hotel Development",
    description: "Comprehensive insulation solution for luxury hotel, including roof, walls, and swimming pool facilities.",
    location: "Dead Sea, Jordan",
    year: "2022",
    image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "commercial"
  },
  {
    id: 5,
    name: "Luxury Villa Estate",
    description: "Premium XPS and EPS insulation for a collection of 25 luxury villas, reducing energy consumption by 40%.",
    location: "Amman, Jordan",
    year: "2023",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "residential"
  },
  {
    id: 6,
    name: "Cold Storage Facility",
    description: "High-performance XPS insulation for a refrigerated storage facility, maintaining optimal temperatures with minimal energy loss.",
    location: "Zarqa, Jordan",
    year: "2021",
    image: "https://images.unsplash.com/photo-1635608080146-1894893f6302?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "industrial"
  }
];

// Technical Specifications
export interface TechnicalSpec {
  property: string;
  xpsStandard: string;
  xpsHighDensity: string;
  epsStandard: string;
}

export const technicalSpecs: TechnicalSpec[] = [
  {
    property: "Thermal Conductivity",
    xpsStandard: "0.028-0.036 W/mK",
    xpsHighDensity: "0.028-0.034 W/mK",
    epsStandard: "0.035-0.040 W/mK"
  },
  {
    property: "Compressive Strength",
    xpsStandard: "300-500 kPa",
    xpsHighDensity: "500-700 kPa",
    epsStandard: "100-250 kPa"
  },
  {
    property: "Water Absorption",
    xpsStandard: "≤ 0.7%",
    xpsHighDensity: "≤ 0.7%",
    epsStandard: "≤ 3%"
  },
  {
    property: "Fire Classification",
    xpsStandard: "E",
    xpsHighDensity: "E",
    epsStandard: "E"
  },
  {
    property: "Temperature Range",
    xpsStandard: "-50°C to +75°C",
    xpsHighDensity: "-50°C to +75°C",
    epsStandard: "-50°C to +80°C"
  }
];

// Timeline Data
export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: string;
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    year: "2005",
    title: "Company Founded",
    description: "Petra Foam was established as a specialist in thermal insulation materials.",
    icon: "building"
  },
  {
    id: 2,
    year: "2010",
    title: "Factory Expansion",
    description: "Expanded manufacturing capacity with state-of-the-art production line.",
    icon: "industry"
  },
  {
    id: 3,
    year: "2015",
    title: "ISO Certification",
    description: "Achieved ISO 9001 certification for quality management systems.",
    icon: "certificate"
  },
  {
    id: 4,
    year: "2023",
    title: "Regional Expansion",
    description: "Expanded operations to serve customers throughout the Middle East.",
    icon: "globe"
  }
];

// Features Data for Why Choose Us section
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: 1,
    title: "Quality Materials",
    description: "Our insulation products are manufactured using the highest quality materials that meet international standards.",
    icon: "medal"
  },
  {
    id: 2,
    title: "Energy Efficiency",
    description: "Our solutions help reduce energy consumption, providing significant savings in heating and cooling costs.",
    icon: "leaf"
  },
  {
    id: 3,
    title: "Expert Support",
    description: "Our technical team provides comprehensive support from product selection to installation guidance.",
    icon: "tools"
  }
];
