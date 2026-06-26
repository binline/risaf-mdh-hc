export default function SkillCard({ skill }) {
  return (
    <article className="card skill-card hover-card">
      <div className="corner top-left" /><div className="corner bottom-right" />
      <div className="skill-icon">{skill.icon}</div>
      <div className="card-top"><h3>{skill.title}</h3><strong>{skill.score}%</strong></div>
      <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
      <div className="meter"><span style={{ width: `${skill.score}%` }} /></div>
    </article>
  );
}
