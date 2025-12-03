export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  repositoryUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    // imageUrl: '/images/project-1.jpg',
    imageUrl: 'https://placehold.co/600x400',
    repositoryUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'An interactive dashboard for data visualization and analytics.',
    technologies: ['React', 'D3.js', 'Tailwind CSS', 'Express'],
    // imageUrl: '/images/project-2.jpg',
    imageUrl: 'https://placehold.co/600x400',
    repositoryUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'A responsive mobile-first e-commerce platform.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    // imageUrl: '/images/project-3.jpg',
    imageUrl: 'https://placehold.co/600x400',
    repositoryUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '4',
    title: 'Project Four',
    description: 'A real-time collaboration tool with WebSocket integration.',
    technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    // imageUrl: '/images/project-4.jpg',
    imageUrl: 'https://placehold.co/600x400',
    repositoryUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '5',
    title: 'Project Five',
    description: 'An API-driven content management system with admin interface.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
    // imageUrl: '/images/project-5.jpg',
    imageUrl: 'https://placehold.co/600x400',
    repositoryUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '6',
    title: 'Project Six',
    description: 'A progressive web app for task management and collaboration.',
    technologies: ['React', 'PWA', 'Tailwind CSS', 'Firebase'],
    // imageUrl: '/images/project-6.jpg',
    imageUrl: 'https://placehold.co/600x400',
    repositoryUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];
