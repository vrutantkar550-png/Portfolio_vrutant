import NeuralCanvas from "./NeuralCanvas";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <NeuralCanvas />
      <div className="hero-fade" />
      <div className="hero-inner">
        <p className="eyebrow">{profile.eyebrow}</p>
        <h1>
          {profile.tagline.split(" ").map((word, i) =>
            word.toLowerCase() === "learn." ? (
              <span className="accent" key={i}>
                {word}{" "}
              </span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>
        <p className="hero-sub">{profile.subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View projects
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in touch
          </a>
        </div>
        <div className="hero-meta">
          <span>{profile.role}</span>
          <span>{profile.location}</span>
          <span>Open to opportunities</span>
        </div>
      </div>
    </section>
  );
}
