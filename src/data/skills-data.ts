import html5Icon from '../assets/skills/html5.svg';
import cssIcon from '../assets/skills/css.svg';
import javascriptIcon from '../assets/skills/javascript.svg';
import typescriptIcon from '../assets/skills/typescript.svg';
import reactIcon from '../assets/skills/react.svg';
import angularIcon from '../assets/skills/angular.svg';
import nodeIcon from '../assets/skills/nodedotjs.svg';
import expressIcon from '../assets/skills/express.svg';
import tailwindIcon from '../assets/skills/tailwindcss.svg';
import gitIcon from '../assets/skills/git.svg';
import githubIcon from '../assets/skills/github.svg';
import phpIcon from '../assets/skills/php.svg';
import laravelIcon from '../assets/skills/laravel.svg';

export interface Skill {
  name: string,
  iconUrl: string,
};

export const frontendSkills: Skill[] = [
  { name: "HTML", iconUrl: html5Icon },
  { name: "CSS", iconUrl: cssIcon },
  { name: "JavaScript", iconUrl: javascriptIcon },
  { name: "TypeScript", iconUrl: typescriptIcon },
  { name: "React", iconUrl: reactIcon },
  { name: "Angular", iconUrl: angularIcon },
  { name: "Tailwind CSS", iconUrl: tailwindIcon },
  { name: "Php", iconUrl: phpIcon },
  { name: "Laravel", iconUrl: laravelIcon },
];

export const backendSkills: Skill[] = [
  { name: "Node.js", iconUrl: nodeIcon },
  { name: "Express", iconUrl: expressIcon },
];

export const toolsSkills: Skill[] = [
  { name: "Git", iconUrl: gitIcon },
  { name: "Github", iconUrl: githubIcon },
];