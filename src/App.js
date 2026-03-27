import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Recognition from './components/Recognition';
import Team from './components/Team';
import VisionMission from './components/VisionMission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Survey from "./components/survey";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// ✅ Create a Home component
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Recognition />
      <Team />
      <VisionMission />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router> {/* ✅ Router at top */}
      <Navbar /> {/* ✅ Only once */}

      <Routes>
        <Route path="/" element={<Home />} /> {/* ✅ main page */}
        <Route path="/survey" element={<Survey />} /> {/* ✅ survey page */}
      </Routes>
    </Router>
  );
}