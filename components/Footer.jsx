import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>built with next.js</span>
      </div>
    </footer>
  );
}
