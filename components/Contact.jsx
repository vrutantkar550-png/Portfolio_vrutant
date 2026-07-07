import { profile } from "../data/content";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <p className="eyebrow">Contact</p>
          <h2>Let's build something that learns.</h2>
          <p>
            Open to new roles, collaborations, and interesting problems.
            Reach out any time.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <a className="btn btn-secondary" href={profile.resumeUrl}>
              Download resume
            </a>
          </div>
          <div className="contact-links">
            <a href={profile.github}>GitHub</a>
            <a href={profile.linkedin}>LinkedIn</a>
            <a href={profile.twitter}>X / Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
