# 🚀 How Long Would It Take?

Ever wondered how long it would take to reach the Moon by walking? Or how about traveling to the nearest galaxy at the speed of light? This interactive web app lets you calculate travel times to anywhere in the universe using various modes of transportation!

## ✨ Features

- 🌍 **20 Destinations**: From your kitchen to the edge of the observable universe
- 🏃 **20 Speed Options**: From a sloth to warp jumping
- 🌙 **Dark/Light Theme**: Beautiful theme switching with smooth animations
- ⚡ **Real-time Calculations**: Instant results as you change selections
- 📱 **Responsive Design**: Works perfectly on all devices
- 🎨 **Modern UI**: Clean, animated interface with Framer Motion

## 🎯 Destinations Include

- **Everyday Places**: Your kitchen, Burger King, nearest capital city
- **Earth Locations**: Around the world, Mariana Trench
- **Space Objects**: Moon, Mars, Jupiter, Sun, nearest star
- **Cosmic Distances**: Nearest galaxy, edge of observable universe
- **Fun Locations**: Your grandpa going to school, nearest free healthcare in America

## 🏃 Speed Options Include

- **Living Creatures**: Sloth, snail, human walking/running, cheetah, eagle
- **Vehicles**: Bicycle, car, Bugatti, Shinkansen train, jet, Concorde
- **Space Travel**: Spaceship, New Horizons probe
- **Physics**: Electron speed, speed of light, warp jumping

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS Variables
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Theme**: Custom theme system with localStorage persistence

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/how-long-would-it-take.git
   cd how-long-would-it-take
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Theme System

The app features a custom theme system with:
- Light and dark mode support
- Smooth transitions between themes
- System preference detection
- localStorage persistence
- CSS variables for consistent theming

## 📱 Responsive Design

- Mobile-first approach
- Flexible grid layouts
- Optimized for all screen sizes
- Touch-friendly interactions

## 🧮 Time Calculations

The app calculates travel times with precision:
- **Nanoseconds** for extremely fast speeds
- **Microseconds** for very fast speeds  
- **Milliseconds** for fast speeds
- **Seconds, minutes, hours** for normal speeds
- **Days, months, years** for long journeys

## 🎭 Animations

Powered by Framer Motion:
- Smooth page transitions
- Interactive hover effects
- Theme toggle animations
- Result animations

## 📦 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── ThemeProvider.tsx    # Theme context and logic
│   │   ├── ThemeToggle.tsx      # Theme switch button
│   │   └── TravelCalculator.tsx # Main calculator component
│   ├── globals.css              # Global styles and theme variables
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
```

## 🚀 Deployment

Deploy easily on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/how-long-would-it-take)

Or deploy manually:
```bash
npm run build
npm start
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new destinations
- Add new speed options
- Improve the UI/UX
- Fix bugs
- Add new features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Fun Facts

- The app can calculate times from nanoseconds to billions of years
- Includes both realistic and fantastical travel methods
- Features scientifically accurate distances and speeds
- The observable universe is about 93 billion light-years in diameter!

---

Made with ❤️ and lots of ☕
