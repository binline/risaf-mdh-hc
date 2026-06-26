import { Award, Eye, MapPin, ShieldCheck, Target } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import { profile, stats, methodology } from '../data/portfolio.js';

export default function About() {
  return (
    <main className="page container">
      <SectionTitle eyebrow="HOME > ABOUT" title="About Me" text="Offensive Security Specialist focused on Red Teaming, Bug Bounty, Web Security, and Ethical Hacking." />
      <div className="about-layout">
        <div className="portrait-card card hover-card">
          <div className="portrait-frame"><img src={profile.image} alt="Replace this with your own image" /></div>
          <p>{profile.signature}</p>
        </div>
        <div className="card about-text hover-card">
          <span className="eyebrow">WHO I AM</span>
          <h3>Red Team minded. Bug bounty focused. Report driven.</h3>
          <p>I am an offensive security professional focused on reconnaissance, vulnerability discovery, web application exploitation, API security testing, privilege escalation, and professional security reporting.</p>
          <p>My approach follows real attacker methodology: scope validation, recon, enumeration, vulnerability validation, exploitation proof, impact analysis, and remediation guidance.</p>
          <div className="stats">{stats.map(s => <span key={s.label}><b>{s.value}</b>{s.label}</span>)}</div>
        </div>
      </div>

      <div className="about-grid">
        <article className="card hover-card"><Target /><h3>My Approach</h3>{methodology.map((m,i)=><p key={m}><b>0{i+1}</b> {m}</p>)}</article>
        <article className="card hover-card"><Eye /><h3>What Drives Me</h3><p>I enjoy breaking down complex systems, understanding how they work, and helping organizations build stronger digital environments through ethical research and clean reporting.</p></article>
        <article className="card hover-card"><Award /><h3>Certifications Focus</h3><p>OSCP path, web application penetration testing, bug bounty methodology, API security, Linux security, and professional report writing.</p></article>
        <article className="card hover-card"><ShieldCheck /><h3>Legal Boundary</h3><p>I work only inside authorized scopes, responsible disclosure programs, private labs, and CTF platforms.</p><p><MapPin size={15}/> {profile.location}</p></article>
      </div>
    </main>
  );
}
