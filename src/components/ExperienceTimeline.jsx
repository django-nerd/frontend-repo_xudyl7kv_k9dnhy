import React from 'react';

const experiences = [
  {
    year: '2024 — Present',
    role: 'Senior Front‑End Engineer',
    company: 'Bluewave Labs',
    bullets: [
      'Led the rebuild of a design system used across 6 products',
      'Improved performance scores to 95+ on core pages',
      'Mentored 4 engineers and introduced accessible UI patterns'
    ]
  },
  {
    year: '2022 — 2024',
    role: 'Product Designer & Engineer',
    company: 'Northstar Studio',
    bullets: [
      'Shipped interactive prototypes with motion-first thinking',
      'Launched a marketing site that increased trials by 38%',
      'Partnered with research to refine information architecture'
    ]
  },
  {
    year: '2019 — 2022',
    role: 'Front‑End Developer',
    company: 'Cloudspring',
    bullets: [
      'Built reusable components and documentation',
      'Modernized legacy views from jQuery to React',
      'Collaborated closely with brand to keep visuals cohesive'
    ]
  }
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/30 to-slate-900/0 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience</h2>
        <p className="mt-2 text-blue-200/80">A quick look at the journey over the years.</p>

        <div className="mt-10 grid md:grid-cols-[1fr_auto_1fr] gap-x-10">
          {/* Left column items (even index) */}
          <div className="space-y-10">
            {experiences.filter((_, i) => i % 2 === 0).map((exp, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-blue-300 text-sm font-medium">{exp.year}</div>
                <div className="mt-2 text-white text-lg font-semibold">{exp.role} · {exp.company}</div>
                <ul className="mt-3 list-disc list-inside text-blue-200/90 space-y-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Center timeline line */}
          <div className="relative mx-auto hidden md:block">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 rounded-full" />
            <div className="sticky top-28">
              <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.8)]" />
            </div>
          </div>

          {/* Right column items (odd index) */}
          <div className="space-y-10">
            {experiences.filter((_, i) => i % 2 === 1).map((exp, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-blue-300 text-sm font-medium">{exp.year}</div>
                <div className="mt-2 text-white text-lg font-semibold">{exp.role} · {exp.company}</div>
                <ul className="mt-3 list-disc list-inside text-blue-200/90 space-y-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
