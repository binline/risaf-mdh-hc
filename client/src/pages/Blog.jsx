import SectionTitle from '../components/SectionTitle.jsx';

const posts = ['API Security Testing Checklist', 'Bug Bounty Recon Workflow', 'Writing Better Vulnerability Reports'];
export default function Blog() {
  return <main className="page container"><SectionTitle eyebrow="HOME > BLOG" title="Writeups & Research" text="Publish legal lab notes, CTF writeups, methodology, and cybersecurity research here." /><div className="cards-grid">{posts.map((post,i)=><article className="card hover-card blog-card" key={post}><span className="tag">WRITEUP 0{i+1}</span><h3>{post}</h3><p>Coming soon. Connect this page to MongoDB blogs when you are ready.</p><button className="btn tiny">Read More</button></article>)}</div></main>;
}
