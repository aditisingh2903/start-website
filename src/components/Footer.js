import BinsenseLogo from '../assets/Binsense.png';
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="ft-logo">
            <div className="ft-logo-icon"><img src={BinsenseLogo} alt="Logo" /></div>
            <span className="ft-logo-name">BinSense</span>
          </div>
          <p className="ft-desc">Smart IoT-based waste monitoring for municipalities and cities. Reducing costs, improving cleanliness, one bin at a time.</p>
          <div className="ft-socials">
            {['𝕏','in','gh','▶'].map((s,i) => <div key={i} className="ft-soc">{s}</div>)}
          </div>
        </div>
        <div className="ft-col">
          <h4>Product</h4>
          <ul>
            <li onClick={() => scrollTo('features')}>Features</li>
            <li onClick={() => scrollTo('how-it-works')}>How It Works</li>
            <li onClick={() => scrollTo('vision')}>Vision & Mission</li>
            <li><a href="https://aditisingh2903.github.io/binsense/" target="_blank" rel="noopener noreferrer" style={{color:'inherit'}}>Live Demo ↗</a></li>
          </ul>
        </div>
        <div className="ft-col">
          <h4>Company</h4>
          <ul>
            <li onClick={() => scrollTo('about')}>About</li>
            <li onClick={() => scrollTo('team')}>Team</li>
            <li onClick={() => scrollTo('recognition')}>Recognitions</li>
            <li onClick={() => scrollTo('contact')}>Contact</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} BinSense. All rights reserved.</span>
      </div>
    </footer>
  );
}
