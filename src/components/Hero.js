import BinsenseLogo from '../assets/Binsense.png';

const BAR_HEIGHTS = [28, 52, 42, 68, 58, 82, 62, 88, 72, 48];

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      <div className="hero-inner">

        {/* ── LEFT: BRAND + COPY ── */}
        <div className="hero-left">

          {/* THE BRAND MOMENT — icon + wordmark side by side */}
          <div className="hero-brand-stamp">
            <div className="hero-brand-icon">
              <img src={BinsenseLogo} alt="herologo" />
            </div>
            <div className="hero-wordmark">
              Bin<em>Sense</em>
            </div>
          </div>

          <p className="hero-tagline">
            <strong>Smart waste monitoring</strong> for modern cities.<br />
            IoT sensors. Real-time analytics. Optimised routes.
          </p>

          <div className="hero-actions">
            <a href="https://aditisingh2903.github.io/binsense/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Get Demo ↗
            </a>
            <button className="btn btn-outline" onClick={() => scrollTo('about')}>
              Learn More
            </button>
          </div>

          <div className="hero-proof">
            <div><div className="proof-num">40%</div><div className="proof-label">Cost Reduction</div></div>
            <div><div className="proof-num">Real-Time</div><div className="proof-label">Bin Monitoring</div></div>
            <div><div className="proof-num">100+</div><div className="proof-label">Bins Deployed</div></div>
          </div>
        </div>

        {/* ── RIGHT: DASHBOARD MOCKUP ── */}
        <div className="hero-right">
          <div className="device-wrap">
            <div className="device-card">
              <div className="device-bar">
                <div className="d-dot" style={{ background: '#ff5f57' }} />
                <div className="d-dot" style={{ background: '#ffbd2e' }} />
                <div className="d-dot" style={{ background: '#28c840' }} />
                <span className="device-bar-title">BinSense Dashboard · Live</span>
              </div>
              <div className="device-body">
                <div className="d-stat-row">
                  <div className="d-stat"><div className="d-stat-n">87%</div><div className="d-stat-l">Bin A Full</div></div>
                  <div className="d-stat"><div className="d-stat-n">34%</div><div className="d-stat-l">Bin B Full</div></div>
                  <div className="d-stat"><div className="d-stat-n">62%</div><div className="d-stat-l">Bin C Full</div></div>
                </div>
                <div className="d-chart-label">Fill Level Trend — 10 Days</div>
                <div className="d-chart">
                  {BAR_HEIGHTS.map((h, i) => (
                    <div key={i} className="d-bar" style={{
                      height: `${h}%`,
                      background: h > 75 ? '#f97316' : '#15803d',
                      opacity: 0.45 + (i / BAR_HEIGHTS.length) * 0.55,
                    }} />
                  ))}
                </div>
                <div className="d-alert">
                  🔔 Bin A — Zone 3 requires immediate collection
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
