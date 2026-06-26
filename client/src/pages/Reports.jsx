import SectionTitle from '../components/SectionTitle.jsx';
import ReportCard from '../components/ReportCard.jsx';
import { reports } from '../data/portfolio.js';

export default function Reports() {
  return <main className="page container"><SectionTitle eyebrow="HOME > REPORTS" title="Vulnerability Report Samples" text="Show professional report structure without exposing private targets or illegal activity." /><div className="cards-grid">{reports.map((r)=><ReportCard key={r.title} report={r}/>)}</div></main>;
}
