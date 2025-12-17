import plantCareThumb from "../assets/projects/project-plantcare-thumb.webp";
import recipeThumb from "../assets/projects/project-recipes-thumb.webp";
import weatherThumb from "../assets/projects/project-weather-thumb.webp";

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
    title: 'Plant Care',
    description: 'A fullstack application for plant lovers to organize and maintain a collection of plants, complete with personalized care instructions.',
    technologies: ['React', 'JavaScript', 'Express', 'MongoDB', 'JWT'],
    imageUrl: plantCareThumb,
    repositoryUrl: 'https://github.com/thommie-wallin/plant-care-fullstack-project',
    liveUrl: '',
  },
  {
    id: '2',
    title: 'Recipe Application',
    description: 'Search for recipes by browsing different food categories from an external API. Save your favourite recipes, or create your own recipes and organize them in a list.',
    technologies: ['Angular', 'TypeScript', 'Angular Material', 'RxJS'],
    imageUrl: recipeThumb,
    repositoryUrl: 'https://github.com/thommie-wallin/angular-recipe-application',
    liveUrl: 'https://angular-recipes-application.netlify.app/',
  },
  {
    id: '3',
    title: 'Weather Application',
    description: 'Use this application to search the latest weather conditions and forecasts by city name or based on user position from an external API.',
    technologies: ['React', 'JavaScript', 'React Router DOM', 'Leaflet', 'ESLint'],
    imageUrl: weatherThumb,
    repositoryUrl: 'https://github.com',
    liveUrl: 'https://react-weather-applications.netlify.app/',
  },
  // {
  //   id: '4',
  //   title: 'Project Four',
  //   description: 'A real-time collaboration tool with WebSocket integration.',
  //   technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
  //   // imageUrl: '/images/project-4.jpg',
  //   imageUrl: 'https://placehold.co/600x400',
  //   repositoryUrl: 'https://github.com',
  //   liveUrl: 'https://example.com',
  // },
  // {
  //   id: '5',
  //   title: 'Project Five',
  //   description: 'An API-driven content management system with admin interface.',
  //   technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
  //   // imageUrl: '/images/project-5.jpg',
  //   imageUrl: 'https://placehold.co/600x400',
  //   repositoryUrl: 'https://github.com',
  //   liveUrl: 'https://example.com',
  // },
  // {
  //   id: '6',
  //   title: 'Project Six',
  //   description: 'A progressive web app for task management and collaboration.',
  //   technologies: ['React', 'PWA', 'Tailwind CSS', 'Firebase'],
  //   // imageUrl: '/images/project-6.jpg',
  //   imageUrl: 'https://placehold.co/600x400',
  //   repositoryUrl: 'https://github.com',
  //   liveUrl: 'https://example.com',
  // },
];
