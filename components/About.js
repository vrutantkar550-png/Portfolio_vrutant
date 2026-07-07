import { about } from "../data/content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2>The short version</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="stat-list">
            {about.stats.map((stat) => (
              <div className="stat-row" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
