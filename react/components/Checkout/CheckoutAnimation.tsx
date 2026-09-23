import React from 'react';
import { motion } from 'framer-motion';

interface CheckoutAnimationProps {
  steps: Array<{ id: string; name: string; }>;
}

class CheckoutAnimation extends React.Component<CheckoutAnimationProps> {
  private readonly steps: Array<{ id: string; name: string; }>;

  constructor(props: CheckoutAnimationProps) {
    super(props);
    this.steps = props.steps;
    if (this.steps.length === 0) {
      throw new Error('Checkout steps cannot be empty');
    }
  }

  render() {
    return (
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {this.steps.map(step => (
          <motion.div
            key={step.id}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {step.name}
          </motion.div>
        ))}
      </motion.div>
    );
  }
}

export default CheckoutAnimation;