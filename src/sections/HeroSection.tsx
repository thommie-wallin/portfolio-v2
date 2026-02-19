import { useEffect, useState } from 'react';
import { smoothScrollToId } from '../utils/smoothScroll';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(id);
  }, []);

  return (
    <section id="hero" aria-labelledby="hero-heading" className="w-full h-dvh flex items-center">
      <div className="max-w-3xl mx-auto text-center px-6">
        <div
          className={`transition-all duration-500 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thommie Wallin
          </h1>
          <span className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Fullstack Web Developer</span>

          <p className="text-gray-600 mb-8">
            Skilled in building modern, responsive and user-focused web applications. I work across the full stack — from intuitive interfaces to scalable backend solutions. Passionate about clean code, great UX, and solving real problems with practical solutions.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              onClick={(e) => smoothScrollToId(e, 'projects')}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium shadow-sm hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 transition-colors duration-200"
              aria-label="View my work (scroll to projects)"
            >
              View My Work
            </a>

            <a
              href="#contact"
              onClick={(e) => smoothScrollToId(e, 'contact')}
              className="inline-block border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-50 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 transition-colors duration-200"
              aria-label="Contact me"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
