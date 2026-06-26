import { ArrowRight, Bug, Crosshair, FileText, Radar, ShieldCheck, Terminal, Zap } from 'lucide-react';
import { profile, projects, reports, skills, stats, tools } from '../data/portfolio.js';
import SectionTitle from '../components/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ReportCard from '../components/ReportCard.jsx';

const focus = [
  ['Red Team Operations', 'Realistic adversary simulation and attack-path discovery.', Crosshair],
  ['Web Exploitation', 'Authorized testing for modern web applications and APIs.', Bug],
  ['Vulnerability Research', 'Finding, validating, and documenting security weaknesses.', Radar],
  ['Security Reporting', 'Technical evidence, business impact, and remediation steps.', FileText],
];

export default function Home() {
  return (
    <main>
      <section className="hero cyber-grid">
        <div className="hero-copy">
          <span className="eyebrow">&lt; AUTHORIZED_OFFENSIVE_SECURITY /&gt;</span>
          <h1 className="glitch" data-text={profile.title}>{profile.title}</h1>
          <h2>{profile.roles.join('  |  ')}</h2>
          <p>I identify real-world attack paths, validate security weaknesses, and deliver professional reports that help organizations improve their security posture.</p>
          <div className="actions">
            <a className="btn magnetic" href="/projects">View Projects <ArrowRight size={17} /></a>
            <a className="btn danger ghost magnetic" href="/contact">Contact Me</a>
          </div>
          <div className="hero-stats">
            {stats.map((s) => <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>)}
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit one" /><div className="orbit two" /><div className="pulse-core" />
          <img src={profile.image} alt="Replaceable portfolio hacker visual" />
          <div className="terminal-float left">root@offsec:~# whoami<br />ethical_hacker</div>
          <div className="terminal-float right">STATUS: <span>ONLINE</span><br />SCOPE: AUTHORIZED</div>
        </div>

        <aside className="system-panel card hover-card">
          <h3>&gt; SYSTEM INFO</h3>
          <p>Name <b>{profile.name}</b></p>
          <p>Focus <b>Red Team / Bug Bounty</b></p>
          <p>Location <b>{profile.location}</b></p>
          <p>Status <b className="green">{profile.status}</b></p>
          <div className="mini-bars">{skills.slice(0,5).map(s => <i key={s.title} style={{height: `${s.score/1.5}px`}} />)}</div>
        </aside>
      </section>

      <section className="container">
        <SectionTitle eyebrow="/_ SECURITY FOCUS" title="Trusted Security Focus Areas" />
        <div className="focus-grid">
          {focus.map(([title, text, Icon]) => <article className="card focus-card hover-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="container split">
        <div>
          <SectionTitle eyebrow="/_ FEATURED WORK" title="Featured Projects" />
          <div className="stack">{projects.slice(0,2).map((p) => <ProjectCard key={p.title} project={p} />)}</div>
        </div>
        <div>
          <SectionTitle eyebrow="/_ REPORT SAMPLES" title="Vulnerability Reports" />
          <div className="stack">{reports.slice(0,2).map((r) => <ReportCard key={r.title} report={r} />)}</div>
        </div>
      </section>

      <section className="container tools-band card hover-card">
        <Terminal />
        <div>{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        <Zap className="zap" />
      </section>
    </main>
  );
}
