import { useState } from 'react';
import emailjs from 'emailjs-com';

const INFO = [
  { ico: '✉️', lbl: 'Email', val: 'contact.binsense@gmail.com' },
  { ico: '📞', lbl: 'Phone', val: '+91 9302597193' },
  { ico: '📍', lbl: 'Location', val: 'India · Open to Global Partnerships' },
];
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
const submit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_vkwozun',   // from EmailJS
    'template_xw23app',  // from EmailJS
    {
      name: form.name,
      email: form.email,
      message: form.message,
    },
    'Thd4fY_aauyXC6E4x'    // from EmailJS
  )
  .then(() => {
    setSent(true);
  })
  .catch((err) => {
    console.error(err);
    alert("Failed to send message ❌");
  });
};  return (
    <section className="section" id="contact">
      <div className="contact-grid">
        <div>
          <div className="sh">
            <div className="sh-kicker">Get in Touch</div>
            <h2>Let's build smarter cities together</h2>
            <p className="sh-sub">Whether you're a municipality, investor, or partner — we'd love to hear from you.</p>
          </div>
          {INFO.map((i) => (
            <div key={i.lbl} className="ci">
              <div className="ci-ico">{i.ico}</div>
              <div><div className="ci-lbl">{i.lbl}</div><div className="ci-val">{i.val}</div></div>
            </div>
          ))}
          <a href="https://aditisingh2903.github.io/binsense/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>View Live Demo ↗</a>
        </div>
        <div className="cf">
          <h3>Send us a message</h3>
          {sent ? (
            <div className="cf-sent">✅ Message received! We'll reply within 24 hours.</div>
          ) : (
            <form onSubmit={submit}>
              <div className="fg"><label>Your Name</label><input name="name" type="text" placeholder="Jane Smith" value={form.name} onChange={handle} required /></div>
              <div className="fg"><label>Email Address</label><input name="email" type="email" placeholder="jane@example.com" value={form.email} onChange={handle} required /></div>
              <div className="fg"><label>Message</label><textarea name="message" rows={5} placeholder="Tell us about your city or use case..." value={form.message} onChange={handle} required /></div>
              <button type="submit" className="cf-submit">Send Message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
