import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card hover-card">
      <div className="project-head">
        <span className="tag">{project.tag}</span>
        <span className="level">{project.level}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="chips">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>
      <button className="btn tiny"><span>View Case Study</span><ArrowUpRight size={15} /></button>
    </article>
  );
}
