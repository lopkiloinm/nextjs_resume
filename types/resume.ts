export interface ResumeData {
  author: Author;
  date: string;
  language: string;
  "colored-headers": boolean;
  "show-footer": boolean;
  education: ResumeEntry[];
  experience: ResumeEntry[];
  projects: ResumeEntry[];
  skills: SkillItem[];
}

export interface Author {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  github: string;
  birthe: string;
  linkedin: string;
  address: string;
  positions: string[];
}

export interface ResumeEntry {
  title: string;
  location: string;
  date: string;
  description: string;
  items: string[];
}

export interface SkillItem {
  category: string;
  skills: string[];
}

