import { useEffect, useRef } from 'react';

export const usePerformance = () => {
  const animationFrameRef = useRef<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleAnimationFrame = () => {
      // Simulate a performance check
      console.log('Performance check: Animation frame executed');
      animationFrameRef.current = requestAnimationFrame(handleAnimationFrame);
    };

    animationFrameRef.current = requestAnimationFrame(handleAnimationFrame);

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Performance check: Element is in view');
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection);

    return () => observerRef.current?.disconnect();
  }, []);

  return {
    animationFrameRef,
    observerRef,
  };
};