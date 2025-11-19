import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900" />

      {/* Accent glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
            <span className="size-1.5 rounded-full bg-blue-400 animate-pulse" />
            Open to opportunities
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Building thoughtful digital experiences
          </h1>
          <p className="mt-4 text-blue-200/90 text-base md:text-lg leading-relaxed">
            A portfolio highlighting years of hands‑on work across product design, front‑end engineering, and delightful micro‑interactions — all wrapped in a calm blue aesthetic.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <a href="#experience" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-400 transition-colors">
              Explore experience
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-blue-100 hover:bg-white/10 transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        {/* 3D Spline scene */}
        <div className="relative h-[340px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-slate-900">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
