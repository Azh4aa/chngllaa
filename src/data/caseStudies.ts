export interface CaseStudy {
  id: string;
  title: {
    en: string;
    ku: string;
  };
  description: {
    en: string;
    ku: string;
  };
  imageUrl: string;
  linkedinUrl: string;
  date: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: {
      en: "How we scaled a local brand to 1M views in 30 days",
      ku: "چۆن براندێکی ناوخۆییمان گەیاندە ١ ملیۆن بینەر لە ٣٠ ڕۆژدا"
    },
    description: {
      en: "Using our secondary account strategy, we bypassed traditional ad fatigue and dominated the local market.",
      ku: "بە بەکارهێنانی ستراتیژی هەژمارە لاوەکییەکانمان، کۆنتڕۆڵی بازاڕی ناوخۆییمان کرد و خۆمان لە ڕیکلامە باوەکان لادا."
    },
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3",
    linkedinUrl: "https://www.linkedin.com/",
    date: "2024-02-15"
  }
];
