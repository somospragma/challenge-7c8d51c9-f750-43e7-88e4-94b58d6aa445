import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimationProps {
  type: string;
  duration: number;
  delay: number;
  easing: string;
}

const defaultProps: AnimationProps = {
  type: 'fade',
  duration: 0.5,
  delay: 0,
  easing: 'easeInOut',
};

export const useAnimation = (props: Partial<AnimationProps> = {}) => {
  const { type = defaultProps.type, duration = defaultProps.duration, delay = defaultProps.delay, easing = defaultProps.easing } = props;
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => setIsAnimating(false), duration * 1000);
    }
  }, [isAnimating, duration]);

  const startAnimation = () => {
    setIsAnimating(true);
  };

  const animationVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return {
    isAnimating,
    startAnimation,
    animationVariants,
    type,
    duration,
    delay,
    easing,
  };
};