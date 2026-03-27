const STEPS = [
  { num: '01', ico: '📡', title: 'Sensor Detects Fill Level', desc: 'Ultrasonic sensors measure bin depth and trigger a reading on every change.' },
  { num: '02', ico: '☁️', title: 'Data Sent to Cloud', desc: 'Readings transmit over Wi-Fi or LoRaWAN to our secure backend.' },
  { num: '03', ico: '📊', title: 'Dashboard Updates', desc: 'Live charts and alerts refresh automatically for all bins.' },
  { num: '04', ico: '🗺️', title: 'Optimised Route Generated', desc: 'AI calculates the best pickup sequence and sends it to drivers.' },
];
export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="sh center">
        <div className="sh-kicker">How It Works</div>
        <h2>From sensor to street — in four steps</h2>
        <p className="sh-sub">BinSense turns raw fill-level data into optimised collection decisions automatically.</p>
      </div>
      <div className="steps-wrap">
        <div className="steps-connector" />
        <div className="steps">
          {STEPS.map((s) => (
            <div key={s.num} className="step">
              <div className="step-num">{s.num}</div>
              <div className="step-ico">{s.ico}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
