import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then(setProjects)
      .catch(setError);
  }, []);

  if (error) return <p>Failed to load projects.</p>;

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold">Projects</h1>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
