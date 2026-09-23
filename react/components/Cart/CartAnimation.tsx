import React from 'react';
import { motion } from 'framer-motion';

interface CartAnimationProps {
  items: Array<{ id: string; name: string; }>;
}

class CartAnimation extends React.Component<CartAnimationProps> {
  private readonly items: Array<{ id: string; name: string; }>;

  constructor(props: CartAnimationProps) {
    super(props);
    this.items = props.items;
    if (this.items.length === 0) {
      throw new Error('Cart cannot be empty');
    }
  }

  render() {
    return (
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {this.items.map(item => (
          <motion.div
            key={item.id}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {item.name}
          </motion.div>
        ))}
      </motion.div>
    );
  }
}

export default CartAnimation;