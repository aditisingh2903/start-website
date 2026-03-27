import aditi from '../assets/aditi.jpg';
import ishan from '../assets/ishan.png';
import aryan from '../assets/aryan.png';
import yash from '../assets/yash.png';

const TEAM = [
  { photo: aditi, name: 'Aditi Singh', role: 'Founder & Developer', initials: 'AS', bio: 'Drives product vision, full-stack development, and go-to-market strategy.' },
  { photo: ishan, name: 'Ishan Sahu', role: 'Hardware & AI/ML', initials: 'IS', bio: 'Designs IoT sensor hardware and builds ML models for predictive analytics.' },
  { photo: aryan, name: 'Aryan', role: 'Developer', initials: 'AR', bio: 'Focuses on backend architecture, cloud infrastructure, and API integrations.' },
  { photo: yash, name: 'Yash Singh', role: 'Developer', initials: 'YS', bio: 'Builds the frontend dashboard, mobile interfaces, and user experience.' },
];
export default function Team() {
  return (
    <section className="section" id="team">
      <div className="sh center">
        <div className="sh-kicker">Our Team</div>
        <h2>Built by people who care about cities</h2>
        <p className="sh-sub">Hardware, AI/ML, and software — one team solving a real urban challenge.</p>
      </div>
      <div className="team-grid">
        {TEAM.map((m) => (
          <div key={m.name} className="tc">
            <div className="tc-av">
              <img src={m.photo} alt={m.name} />
            </div>
            <h3>{m.name}</h3>
            <p className="tc-bio">{m.bio}</p>
            <div className="tc-role">{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
