import { experience } from "../data/content";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>Where I've worked</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={job.role + job.company}>
              <div className="timeline-head">
                <h3>
                  {job.role} · <span className="timeline-company">{job.company}</span>
                </h3>
                <span className="timeline-period">{job.period}</span>
              </div>
              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
