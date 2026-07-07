import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Skills & tech stack</p>
          <h2>The tools behind the models</h2>
          <p>
            Grouped by where they show up in the lifecycle — from raw data to
            a model a user actually talks to.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.category}>
              <div className="skill-card-head">
                <span className="skill-node" aria-hidden="true" />
                <h3>{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
