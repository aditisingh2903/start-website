const CARDS = [
  { icon: '📡', title: 'IoT-Based Bin Monitoring', desc: 'Ultrasonic sensors measure fill levels in real time and stream data to the cloud wirelessly.', span: true },
  { icon: '📊', title: 'Real-Time Dashboard', desc: 'Live overview of every bin — fill status, alerts, and trends.', span: false },
  { icon: '🗺️', title: 'Route Optimization', desc: 'AI routing sends trucks only to bins that need collection.', span: false },
];
export default function About() {
  return (
    <section className="section" id="about">
      <div className="about-grid">
        <div className="about-cards">
          {CARDS.map((c) => (
            <div key={c.title} className="ac" style={c.span ? { gridColumn: 'span 2' } : {}}>
              <div className="ac-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="about-text">
          <div className="sh">
            <div className="sh-kicker">About BinSense</div>
            <h2>Rethinking waste management with IoT</h2>
          </div>
          <p>Traditional waste collection is broken — trucks follow fixed routes whether bins are empty or overflowing. BinSense fixes this with sensors inside every bin, streaming live fill-level data to a cloud dashboard.</p>
          <p>Municipal authorities and private operators get a real-time city map of bin status, triggering collection only when it's actually needed. The result: fewer trips, lower costs, cleaner streets.</p>
          <div className="about-metrics">
            {[['40%','Cost Saved'],['3×','Route Efficiency'],['Real-Time','Alerts']].map(([v,l]) => (
              <div key={l}><div className="am-val">{v}</div><div className="am-lbl">{l}</div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
