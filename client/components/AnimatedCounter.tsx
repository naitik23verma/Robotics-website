import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration: number;
  suffix?: string;
  trigger?: boolean;
}

export default function AnimatedCounter({ end, duration, suffix = '', trigger = false }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!trigger || hasAnimated) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [end, duration, trigger, hasAnimated]);

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  );
}
