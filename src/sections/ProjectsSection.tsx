import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects-data';

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="w-full py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
          >
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg">
            A selection of projects I've built to showcase my skills and experience.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="region"
          aria-label="Projects grid"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
