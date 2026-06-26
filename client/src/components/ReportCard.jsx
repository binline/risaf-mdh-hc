export default function ReportCard({ report }) {
  return (
    <article className="card report-card hover-card">
      <div className="card-top"><h3>{report.title}</h3><span className={`severity ${report.severity.toLowerCase()}`}>{report.severity}</span></div>
      <p>{report.impact}</p>
      <div className="cvss"><span>CVSS</span><b>{report.cvss}</b></div>
      <button className="btn danger tiny">View Report</button>
    </article>
  );
}
