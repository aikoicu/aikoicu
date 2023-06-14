import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const updateScrollPercent = () => {
      if (!document) return;

      const winScroll = document?.body?.scrollTop || document?.documentElement?.scrollTop;
      const height =
        document?.documentElement?.scrollHeight - document?.documentElement?.clientHeight;
      const scrolled = winScroll / height;

      setPercent(Math.round(scrolled * 100));
    };

    if (window) window.addEventListener('scroll', updateScrollPercent);

    return () => {
      if (window) window.removeEventListener('scroll', updateScrollPercent);
    };
  }, []);

  return (
    <motion.div
      animate={{ width: `${percent}%` }}
      className="bg-primary-focus fixed inset-x-0 top-0 z-50 h-0.5"
      style={{
        backgroundImage: 'linear-gradient(to right, #4F46E577, #D53CF577)',
      }}
      transition={{ duration: 0.1 }}
    />
  );
}