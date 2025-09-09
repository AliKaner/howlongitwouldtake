import TravelCalculator from './components/TravelCalculator';
import ThemeToggle from './components/ThemeToggle';

export default function Home() {
  return (
    <div className="page-container">
      <ThemeToggle />
      <div className="container">
        <div className="header">
          <h1 className="title">
            How Long Would It Take?
          </h1>
          <p className="subtitle">
            Calculate travel time to anywhere in the universe
          </p>
        </div>
        <TravelCalculator />
      </div>
    </div>
  );
}