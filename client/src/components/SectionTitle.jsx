export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="glitch-lite">{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
