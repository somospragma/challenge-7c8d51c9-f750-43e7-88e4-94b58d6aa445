import React from 'react';
import { motion } from 'framer-motion';

interface SearchAnimationProps {
  query: string;
  results: Array<{ id: string; name: string; }>;
}

class SearchAnimation extends React.Component<SearchAnimationProps> {
  private readonly query: string;
  private readonly results: Array<{ id: string; name: string; }>;

  constructor(props: SearchAnimationProps) {
    super(props);
    this.query = props.query;
    this.results = props.results;
    if (!this.query) {
      throw new Error('Query cannot be empty');
    }
  }

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {this.results.map(result => (
          <motion.div
            key={result.id}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {result.name}
          </motion.div>
        ))}
      </motion.div>
    );
  }
}

export default SearchAnimation;