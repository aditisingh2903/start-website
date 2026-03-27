export default function VisionMission() {
  return (
    <section className="section section-alt" id="vision">
      <div className="sh center">
        <div className="sh-kicker">Vision & Mission</div>
        <h2>Why BinSense exists</h2>
        <p className="sh-sub">We believe every city deserves infrastructure that adapts to its people — not the other way around.</p>
      </div>
      <div className="vm-grid">
        <div className="vm">
          <div className="vm-label">🔭 Our Vision</div>
          <h3>Smart, Clean Cities Powered by Data</h3>
          <p>We envision cities that operate like living systems — where waste, traffic, energy, and water are all managed through real-time data. BinSense is the first step toward that world, starting with the problem every city faces.</p>
          <div className="vm-tags">
            {['Zero Waste','Smart Cities','Data-Driven'].map(t => <span key={t} className="vm-tag">{t}</span>)}
          </div>
        </div>
        <div className="vm">
          <div className="vm-label">🎯 Our Mission</div>
          <h3>Efficient Waste Management Through IoT Innovation</h3>
          <p>Our mission is to make urban waste management measurably more efficient through low-cost IoT and actionable analytics — cutting costs, reducing emissions, and improving service quality for cities worldwide.</p>
          <div style={{ marginTop: 22, padding: '14px 18px', background: '#f0fdf4', border: '1px solid #86efac', borderRadius: 10, fontSize: '0.9rem', fontWeight: 500, color: '#166534', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
            "Reduce waste collection costs by 40% for 100+ cities by 2027."
          </div>
        </div>
      </div>
    </section>
  );
}
