'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme, colors } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const buttonStyle = {
    position: 'fixed' as const,
    top: '1.5rem',
    right: '1.5rem',
    zIndex: 50,
    padding: '0.75rem',
    borderRadius: '50%',
    backgroundColor: colors.surface,
    border: `1px solid ${colors.border}`,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  };

  const iconStyle = {
    fontSize: '1.25rem',
    color: theme === 'light' ? colors.textSecondary : colors.warning,
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      style={buttonStyle}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <FaMoon style={iconStyle} />
        ) : (
          <FaSun style={iconStyle} />
        )}
      </motion.div>
    </motion.button>
  );
}