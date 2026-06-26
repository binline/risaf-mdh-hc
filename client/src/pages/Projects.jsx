import SectionTitle from '../components/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/portfolio.js';

export default function Projects() {
  return <main className="page container"><SectionTitle eyebrow="HOME > PROJECTS" title="Offensive Security Projects" text="Use these as legal lab, methodology, and authorized testing project case studies." /><div className="cards-grid">{projects.map((p)=><ProjectCard key={p.title} project={p}/>)}</div></main>;
}
