import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="relative py-10">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold text-lg">Let’s work together</h3>
            <p className="text-blue-200/80 text-sm">Available for freelance and full‑time roles.</p>
          </div>
          <a href="mailto:hello@example.com" className="inline-flex items-center px-5 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-400 transition-colors">
            Email me
          </a>
        </div>
        <p className="mt-6 text-center text-blue-300/60 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
