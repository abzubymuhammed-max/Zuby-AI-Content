
import React from 'react';
import { 
  Cpu, 
  Wand2, 
  Terminal, 
  Zap, 
  LineChart, 
  Code2, 
  BrainCircuit, 
  MessageSquare,
  Search,
  Bot
} from 'lucide-react';
import { Project, Activity, SkillCategory } from './types.js';

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'AI Content Creation',
    description: 'Developing high-quality digital content using Generative AI models for text, image, and video.',
    icon: <Wand2 className="w-6 h-6 text-blue-400" />
  },
  {
    id: '2',
    title: 'Prompt Engineering',
    description: 'Optimizing inputs for LLMs to achieve precise, consistent, and context-aware outputs.',
    icon: <Terminal className="w-6 h-6 text-purple-400" />
  },
  {
    id: '3',
    title: 'AI Tools Exploration',
    description: 'Researching and implementing cutting-edge AI software to streamline complex workflows.',
    icon: <Search className="w-6 h-6 text-cyan-400" />
  },
  {
    id: '4',
    title: 'Automation Solutions',
    description: 'Building intelligent automation pipelines using AI to increase productivity and reduce manual tasks.',
    icon: <Zap className="w-6 h-6 text-indigo-400" />
  },
  {
    id: '5',
    title: 'Machine Learning Experiments',
    description: 'Exploring and fine-tuning models to understand behavior and solve specific use cases.',
    icon: <BrainCircuit className="w-6 h-6 text-pink-400" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Autonomous Content Agent',
    description: 'A multi-agent system that researches, drafts, and schedules social media content based on trending AI news.',
    tools: ['OpenAI API', 'Python', 'LangChain'],
    image: 'https://picsum.photos/seed/ai1/800/600'
  },
  {
    id: 'p2',
    title: 'Visual Prompt Architect',
    description: 'A playground for creating hyper-realistic image generation prompts using a modular UI component library.',
    tools: ['Midjourney', 'React', 'DALL-E 3'],
    image: 'https://picsum.photos/seed/ai2/800/600'
  },
  {
    id: 'p3',
    title: 'Smart Doc Summarizer',
    description: 'An enterprise-grade tool for digesting long-form PDF reports into concise actionable insights using RAG.',
    tools: ['Gemini API', 'Pinecone', 'Next.js'],
    image: 'https://picsum.photos/seed/ai3/800/600'
  },
  {
    id: 'p4',
    title: 'AI Workflow Automator',
    description: 'Connecting Gmail, Slack, and Notion using LLM-driven decision making for task prioritization.',
    tools: ['Zapier Central', 'GPT-4o', 'Webhooks'],
    image: 'https://picsum.photos/seed/ai4/800/600'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Ai Course',
    skills: ['Foundations of LLMs', 'Advanced Prompt Engineering', 'AI Business Automation', 'Creative AI Workflows', 'Ethics in AI', 'Custom GPT Development']
  },
  {
    category: 'Development & Tools',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Node.js', 'Git', 'Docker']
  },
  {
    category: 'Automation & Productivity',
    skills: ['Make.com', 'Zapier', 'LangChain', 'AutoGPT', 'CrewAI', 'n8n']
  },
  {
    category: 'Soft Skills',
    skills: ['Prompt Engineering', 'AI Ethics', 'Technical Writing', 'Problem Solving', 'Content Strategy']
  }
];
