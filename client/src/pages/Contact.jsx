import { Mail, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import { profile } from '../data/portfolio.js';

export default function Contact() {
  return (
    <main className="page container">
      <SectionTitle eyebrow="HOME > CONTACT" title="Let's Connect" text="For authorized security work, collaboration, portfolio review, or bug bounty discussion." />
      <div className="contact-layout">
        <form className="contact-form card hover-card">
          <input placeholder="Your name" />
          <input placeholder="Email address" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows="7" />
          <button className="btn" type="button"><Send size={16}/> Send Message</button>
        </form>
        <aside className="card contact-card hover-card">
          <Mail />
          <h3>Secure Contact</h3>
          <p>{profile.email}</p>
          <p>Only authorized testing requests, collaboration, and legal security research.</p>
        </aside>
      </div>
    </main>
  );
}
