import React from 'react';
import Hero from './components/Hero';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      {/* Background texture */}
      <div className="fixed inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />

      <Hero />
      <ExperienceTimeline />
      <Footer />
    </div>
  );
}

export default App;
