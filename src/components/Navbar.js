import { useState, useEffect } from 'react';
import BinsenseLogo from '../assets/Binsense.png';
import { Link } from "react-router-dom";


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-row">

          {/* ─── LOGO ─── */}
          <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
            <img src={BinsenseLogo} alt="Logo" className="nav-logo-img" />
            <div className="nav-logo-text">
              <span className="nav-logo-name">BinSense</span>
              <span className="nav-logo-sub">Smart Waste IoT</span>
            </div>
          </a>

          {/* ─── LINKS ─── */}
          <ul className="nav-links">
            {[['home','Home'],['about','About'],['features','Features'],['team','Team'],['contact','Contact']].map(([id,label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a>
              </li>
            ))}
            <li>
            <Link to="/survey">Survey</Link>
            </li>
          </ul>

          {/* ─── CTA ─── */}
          <div className="nav-right">
            <a href="https://aditisingh2903.github.io/binsense/" target="_blank" rel="noopener noreferrer" className="nav-demo">
              Live Demo ↗
            </a>
          </div>

          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        {[['home','Home'],['about','About'],['features','Features'],['team','Team'],['contact','Contact']].map(([id,label]) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>{label}</a>
        ))}
        <a href="https://aditisingh2903.github.io/binsense/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 8, textAlign: 'center' }}>
          Live Demo ↗
        </a>
        <Link to="/survey" onClick={() => setMenuOpen(false)}>Survey</Link>
      </div>
    </>
  );
}
