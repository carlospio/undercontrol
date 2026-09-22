export interface FaqItem {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  keyword: string;
  shortDescription: string;
  intro: string;
  whatIsIt: string;
  howUnderControlHelps: string;
  activities: string[];
  benefits: string[];
  idealFor: string[]; // solution slugs
  relatedServices: string[]; // service slugs
  faq: FaqItem[];
  seo: {
    title: string;
    description: string;
  };
}

export interface Solution {
  slug: string;
  name: string;
  audienceLabel: string;
  shortDescription: string;
  intro: string;
  problems: string[];
  howUnderControlHelps: string;
  relatedServices: string[]; // service slugs
  benefits: string[];
  faq: FaqItem[];
  seo: {
    title: string;
    description: string;
  };
}

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string; // BlogCategory slug
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingTime: string;
  content: {
    heading: string;
    body: string[];
  }[];
  faq?: FaqItem[];
  relatedServices?: string[];
  relatedSolutions?: string[];
}
