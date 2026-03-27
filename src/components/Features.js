const FEATS = [
  { icon: '📡', title: 'Real-Time Monitoring', desc: 'Live fill-level updates from every bin, every few minutes.' },
  { icon: '📊', title: 'Dashboard Analytics', desc: 'Historical trends, predictive fill forecasts, and usage patterns.' },
  { icon: '🗺️', title: 'Route Optimization', desc: 'AI-generated routes that cut unnecessary trips by up to 40%.' },
  { icon: '💰', title: 'Cost Reduction', desc: 'Lower fuel, fewer overtime hours, measurable ROI from day one.' },
  { icon: '🌐', title: 'Scalable Deployment', desc: 'From one block to an entire city — scales with minimal overhead.' },
];
export default function Features() {
  return (
    <section className="section section-alt" id="features">
      <div className="sh center">
        <div className="sh-kicker">Features</div>
        <h2>Everything you need to manage waste smarter</h2>
        <p className="sh-sub">A complete IoT stack — from hardware sensor to cloud analytics — built for municipalities.</p>
      </div>
      <div className="feat-grid">
        {FEATS.map((f) => (
          <div key={f.title} className="feat">
            <div className="feat-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
