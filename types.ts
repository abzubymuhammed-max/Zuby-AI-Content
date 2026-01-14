// Fix: Import React to resolve 'React' namespace error for React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  image: string;
  link?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}