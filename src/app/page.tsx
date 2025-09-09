'use client';

import TravelCalculator from './components/TravelCalculator';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './components/ThemeProvider';

export default function Home() {
  const { colors } = useTheme();

  const containerStyle = {
    minHeight: '100vh',
    background: `linear-gradient(135deg, ${colors.background}, ${colors.surface})`,
    overflowX: 'hidden' as const,
  };

  const innerContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  };

  const headerStyle = {
    textAlign: 'center' as const,
    marginBottom: '1.5rem',
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
    fontWeight: 'bold',
    marginBottom: '0.75rem',
    backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const subtitleStyle = {
    fontSize: '1rem',
    color: colors.textSecondary,
  };

  return (
    <div style={containerStyle}>
      <ThemeToggle />
      <div style={innerContainerStyle}>
        <div style={headerStyle}>
          <h1 style={titleStyle}>
            How Long Would It Take?
          </h1>
          <p style={subtitleStyle}>
            Calculate travel time to anywhere in the universe
          </p>
        </div>
        <TravelCalculator />
      </div>
    </div>
  );
}