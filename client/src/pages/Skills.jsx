import SectionTitle from '../components/SectionTitle.jsx';
import SkillCard from '../components/SkillCard.jsx';
import { skills, tools } from '../data/portfolio.js';

export default function Skills() {
  return (
    <main className="page container">
      <SectionTitle eyebrow="HOME > SKILLS" title="Offensive Security Skills" text="A strong set of offensive security skills, tools, and testing methodology for authorized environments." />
      <div className="skills-layout">
        <div className="skills-grid">{skills.map((skill) => <SkillCard key={skill.title} skill={skill} />)}</div>
        <aside className="card tools-list hover-card">
          <h3>&gt; Tools Arsenal</h3>
          {tools.map((tool, i) => <p key={tool}><span>{String(i+1).padStart(2,'0')}</span> {tool}</p>)}
        </aside>
      </div>
    </main>
  );
}
