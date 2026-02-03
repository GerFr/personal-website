import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block w-full max-w-md overflow-hidden rounded-lg border-3 border-surface-alt bg-surface shadow-sm transition hover:shadow-md"
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
      )}

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <span className="text-xs text-ink">#{project.id}</span>
        </div>

        {project.description && (
          <p className="mt-2 text-sm text-ink">{project.description}</p>
        )}

      </div>
    </Link>
  );
}
