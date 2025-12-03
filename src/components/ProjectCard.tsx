import { type Project } from '../data/projects-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      aria-labelledby={`project-title-${project.id}`}
    >
      {project.imageUrl && (
        <div className="w-full h-48 bg-gray-200 overflow-hidden">
          <img
            src={project.imageUrl}
            alt={`${project.title} project thumbnail`}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        <h3
          id={`project-title-${project.id}`}
          className="text-xl font-bold text-gray-900 mb-2"
        >
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">{project.description}</p>

        <div className="mb-6">
          <p className="text-xs font-semibold text-gray-700 mb-2">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block flex-1 text-center text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 rounded px-3 py-2 transition"
              aria-label={`View ${project.title} repository on GitHub`}
            >
              Repository
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block flex-1 text-center text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 rounded px-3 py-2 transition"
              aria-label={`View ${project.title} live demo`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
