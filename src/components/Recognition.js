const RECS = [
  { ico: '🏅', cat: 'Seed Funding Award', title: 'Ignition Grant', desc: 'Selected for early-stage capital to accelerate product development and pilot deployments.' },
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
