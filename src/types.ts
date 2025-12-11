export interface Project {
    id: number;
    title: string;
    repoName: string;
    description: string;
    category: string;
    imageUrl: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
  }
  
  export interface Announcement {
    id: number;
    date: string;
    title: string;
    content: string;
    type: 'duyuru' | 'haber' | 'güncelleme';
  }