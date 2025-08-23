import { motion } from 'framer-motion';
import './AnimatedText.css';

const AnimatedText = ({
  text,
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  stagger = 0.03,
  once = true,
  splitBy = 'word' // 'word', 'char', or 'line'
}) => {
  // Get text content from either text prop or children
  const textContent = text || (typeof children === 'string' ? children : '');

  // Split text based on splitBy prop
  const splitText = (text, type) => {
    if (!text || typeof text !== 'string') return [''];

    switch (type) {
      case 'char':
        return text.split('');
      case 'line':
        return text.split('\n');
      case 'word':
      default:
        return text.split(' ');
    }
  };

  const textArray = splitText(textContent, splitBy);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    fadeUp: {
      hidden: { 
        opacity: 0, 
        y: 20,
        rotateX: 90,
      },
      visible: { 
        opacity: 1, 
        y: 0,
        rotateX: 0,
        transition: {
          duration,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration },
      },
    },
    slideLeft: {
      hidden: { 
        opacity: 0, 
        x: 50,
      },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    },
    slideRight: {
      hidden: { 
        opacity: 0, 
        x: -50,
      },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    },
    scale: {
      hidden: { 
        opacity: 0, 
        scale: 0.8,
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    },
    rotate: {
      hidden: { 
        opacity: 0, 
        rotateY: 90,
      },
      visible: { 
        opacity: 1, 
        rotateY: 0,
        transition: {
          duration,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    },
  };

  return (
    <motion.div
      className={`animated-text ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
    >
      {textArray.map((item, index) => (
        <motion.span
          key={index}
          className={`animated-text-item ${splitBy}`}
          variants={itemVariants[variant]}
        >
          {item}
          {splitBy === 'word' && index < textArray.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Preset components for common use cases
export const AnimatedHeading = ({ children, ...props }) => {
  const textContent = typeof children === 'string' ? children : '';
  return (
    <AnimatedText
      text={textContent}
      variant="fadeUp"
      splitBy="word"
      stagger={0.08}
      duration={0.8}
      {...props}
    />
  );
};

export const AnimatedParagraph = ({ children, ...props }) => {
  const textContent = typeof children === 'string' ? children : '';
  return (
    <AnimatedText
      text={textContent}
      variant="fadeUp"
      splitBy="word"
      stagger={0.02}
      duration={0.6}
      {...props}
    />
  );
};

export const AnimatedCharacters = ({ children, ...props }) => {
  const textContent = typeof children === 'string' ? children : '';
  return (
    <AnimatedText
      text={textContent}
      variant="fadeUp"
      splitBy="char"
      stagger={0.03}
      duration={0.4}
      {...props}
    />
  );
};

export const TypewriterText = ({ text, className = '', delay = 0 }) => {
  if (!text || typeof text !== 'string') return null;
  const characters = text.split('');

  return (
    <motion.div
      className={`typewriter-text ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + (index * 0.05),
            duration: 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const GradientText = ({ children, className = '' }) => (
  <motion.span
    className={`gradient-text ${className}`}
    initial={{ backgroundPosition: '0% 50%' }}
    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.span>
);

export const RevealText = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={`reveal-text ${className}`}
    initial={{ clipPath: 'inset(0 100% 0 0)' }}
    whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
    transition={{
      duration: 1.2,
      delay,
      ease: [0.76, 0, 0.24, 1],
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default AnimatedText;
