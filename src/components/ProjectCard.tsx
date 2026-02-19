import { type Project } from '../data/projects-data';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Image Section */}
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={`${project.title} project thumbnail`}
              loading="lazy"
              // decoding="async"
              // fetchPriority="low"
              className="w-full h-full hover:scale-105 transition-transform duration-300"
            />
        ) : (
          <div className="w-full h-full bg-gray-100" aria-label="Project image placeholder" />
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          id={`project-title-${project.id}`}
          className="text-xl font-bold text-gray-900 mb-2"
        >
          {project.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">{project.description}</p>

        {/* Technology Badges */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="flex gap-3 mt-auto">
          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target="_blank"
              className="flex-1 text-center text-sm font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-gray-500"
              aria-label={`View ${project.title} repository on GitHub`}
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="flex-1 text-center text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-gray-500"
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
