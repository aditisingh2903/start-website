import csvtu from '../assets/csvtu.png';
import forte from '../assets/forte.png';

const RECS = [
  { ico: <img src={forte} alt="FORTE" />, cat: 'Seed Funding Award', title: 'Ignition Grant', desc: 'Selected under Ignition Grant 2.0. at NIDHI i-TBI CSVTU-Foundation for Rural Technology and Entrepreneurship (CSVTU-FORTE)' },
  { ico: '🏆', cat: 'Multiple Championships', title: 'Hackathon Wins', desc: 'First-place finishes across regional and national hackathon competitions.' },
];
export default function Recognition() {
  return (
    <section className="section section-alt" id="recognition">
      <div className="sh center">
        <div className="sh-kicker">Recognitions</div>
        <h2>Validated by the ecosystem</h2>
        <p className="sh-sub">Awards and grants from organisations investing in smart urban infrastructure.</p>
      </div>
      <div className="rec-grid">
        {RECS.map((r) => (
          <div key={r.title} className="rec">
            <div className="rec-ico">{r.ico}</div>
            <div className="rec-cat">{r.cat}</div>
            <h3>{r.title}</h3>
            <p>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
