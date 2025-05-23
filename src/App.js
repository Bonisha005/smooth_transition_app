import { useEffect, useRef, useState } from 'react';
import './index.css';

export default function App() {
  const blackRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsDark(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (blackRef.current) observer.observe(blackRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`transition-colors duration-1000 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <section className="h-screen flex flex-col justify-center items-center parallax bg-gradient-to-b from-white to-gray-100">
        <div className="animate-fadeInUp text-center px-4">
          <h1 className="text-5xl font-bold mb-4">White Section</h1>
          <p className="text-lg">Scroll down to transition smoothly</p>
        </div>
      </section>

      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1440 320" className="w-full -mt-1">
          <path fill="#000000" fillOpacity="1" d="M0,224L1440,64L1440,320L0,320Z"></path>
        </svg>
      </div>

      <section ref={blackRef} className="h-screen flex flex-col justify-center items-center bg-black">
        <div className="animate-fadeInUp text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Black Section</h1>
          <p className="text-lg">You’ve reached the dark side 🌑</p>
        </div>
      </section>
    </div>
  );
}
