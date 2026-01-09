
export interface RSSItem {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  source: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SaaSTool {
  id: number;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  url: string;
  icon: string;
}

export type StoreCategory = 'Ebook' | 'Livro' | 'Mentoria' | 'Curso';

export interface StoreItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: StoreCategory;
  price?: string;
}

export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  INSIGHTS = 'insights',
  STORE = 'store',
  TERMS = 'terms',
  PRIVACY = 'privacy',
  MINDSETS = 'mindsets',
  GLOSSARY = 'glossary',
  NLP = 'nlp'
}
