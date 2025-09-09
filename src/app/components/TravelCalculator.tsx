'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    GiSnail,
    GiSpaceship,
    GiElectric,
    GiWarpPipe
} from 'react-icons/gi';
import {
    FaWalking,
    FaRunning,
    FaCar,
    FaPlane,
    FaMapMarkerAlt,
    FaMoon,
    FaSun,
    FaGlobeAmericas,
    FaDog,
    FaBolt,
    FaBicycle,
    FaHorse,
    FaTrain
} from 'react-icons/fa';
import { MdHealthAndSafety, MdSchool } from 'react-icons/md';
import { IoFastFood } from 'react-icons/io5';
import { BsStars } from 'react-icons/bs';
import { useTheme } from './ThemeProvider';

// Destinations (20 adet - yakından uzağa sıralı)
const destinations = [
    { id: 'kitchen', name: 'Your kitchen', distance: 0.01, icon: FaMapMarkerAlt },
    { id: 'burger-king', name: 'Burger King', distance: 1, icon: IoFastFood },
    { id: 'grandpa-school', name: 'Your grandpa going to school', distance: 50, icon: MdSchool },
    { id: 'free-healthcare', name: 'Nearest free healthcare in America', distance: 1000, icon: MdHealthAndSafety },
    { id: 'capital', name: 'Nearest capital city', distance: 2000, icon: FaMapMarkerAlt },
    { id: 'continent-border', name: 'Nearest continent border', distance: 10000, icon: FaGlobeAmericas },
    { id: 'around-world', name: 'Around the world', distance: 40000, icon: FaGlobeAmericas },
    { id: 'mariana', name: 'Bottom of Mariana Trench', distance: 50000, icon: FaMapMarkerAlt },
    { id: 'iss', name: 'International Space Station', distance: 408, icon: GiSpaceship },
    { id: 'moon', name: 'To the Moon', distance: 384400, icon: FaMoon },
    { id: 'venus', name: 'To Venus', distance: 42000000, icon: FaMapMarkerAlt },
    { id: 'mars', name: 'To Mars', distance: 225000000, icon: FaMapMarkerAlt },
    { id: 'jupiter', name: 'To Jupiter', distance: 778000000, icon: FaMapMarkerAlt },
    { id: 'pluto', name: 'To Pluto', distance: 5900000000, icon: FaMapMarkerAlt },
    { id: 'sun', name: 'To the Sun', distance: 150000000, icon: FaSun },
    { id: 'nearest-star', name: 'To the nearest star', distance: 39735000000000, icon: BsStars },
    { id: 'oort-cloud', name: 'Edge of Oort Cloud', distance: 1500000000000, icon: BsStars },
    { id: 'nearest-galaxy', name: 'To the nearest galaxy', distance: 2.36e19, icon: BsStars },
    { id: 'local-group', name: 'To the center of the Local Group', distance: 4.73e19, icon: BsStars },
    { id: 'observable-universe', name: 'Edge of Observable Universe', distance: 4.4e23, icon: BsStars },
];

// Speeds (20 adet - yavaştan hızlıya sıralı)
const speeds = [
    { id: 'sloth', name: 'Sloth', speed: 0.24, icon: FaDog },
    { id: 'snail', name: 'Snail', speed: 0.0036, icon: GiSnail },
    { id: 'walking', name: 'Walking', speed: 5, icon: FaWalking },
    { id: 'running', name: 'Running human', speed: 15, icon: FaRunning },
    { id: 'bicycle', name: 'Bicycle', speed: 25, icon: FaBicycle },
    { id: 'usain-bolt', name: 'Usain Bolt', speed: 37, icon: FaRunning },
    { id: 'horse', name: 'Horse', speed: 88, icon: FaHorse },
    { id: 'cheetah', name: 'Cheetah', speed: 120, icon: FaDog },
    { id: 'eagle', name: 'Eagle', speed: 160, icon: FaDog },
    { id: 'car', name: 'Car avg', speed: 100, icon: FaCar },
    { id: 'bugatti', name: 'Bugatti', speed: 490, icon: FaCar },
    { id: 'train', name: 'Shinkansen Train', speed: 600, icon: FaTrain },
    { id: 'jet', name: 'Jet', speed: 900, icon: FaPlane },
    { id: 'concorde', name: 'Concorde', speed: 2179, icon: FaPlane },
    { id: 'spaceship', name: 'Space-ship', speed: 28000, icon: GiSpaceship },
    { id: 'probe', name: 'New Horizons Probe', speed: 58000, icon: GiSpaceship },
    { id: 'electron', name: 'Electron', speed: 1080000000, icon: GiElectric },
    { id: 'light', name: 'Light', speed: 1080000000, icon: FaBolt },
    { id: 'light-10x', name: 'Light × 10', speed: 10800000000, icon: FaBolt },
    { id: 'warp', name: 'Warp Jumping', speed: Infinity, icon: GiWarpPipe },
];

export default function TravelCalculator() {
    const { colors } = useTheme();
    const [selectedDestination, setSelectedDestination] = useState(destinations[0].id);
    const [selectedSpeed, setSelectedSpeed] = useState(speeds[0].id);
    const [travelTime, setTravelTime] = useState('');

    const calculateTravelTime = () => {
        const destination = destinations.find(d => d.id === selectedDestination);
        const speed = speeds.find(s => s.id === selectedSpeed);

        if (!destination || !speed) return;

        if (speed.speed === Infinity || destination.distance === 0) {
            setTravelTime('Instant');
            return;
        }

        const timeInHours = destination.distance / speed.speed;
        const timeInSeconds = timeInHours * 3600;

        if (timeInSeconds < 0.000000001) {
            const nanoseconds = timeInSeconds * 1000000000;
            setTravelTime(`${nanoseconds.toFixed(3)} nanoseconds`);
        } else if (timeInSeconds < 0.000001) {
            const microseconds = timeInSeconds * 1000000;
            if (microseconds < 1) {
                setTravelTime(`${microseconds.toFixed(3)} microseconds`);
            } else {
                const roundedMicro = Math.round(microseconds);
                setTravelTime(`${roundedMicro} microsecond${roundedMicro !== 1 ? 's' : ''}`);
            }
        } else if (timeInSeconds < 1) {
            const milliseconds = timeInSeconds * 1000;
            if (milliseconds < 1) {
                setTravelTime(`${milliseconds.toFixed(3)} milliseconds`);
            } else {
                const roundedMs = Math.round(milliseconds);
                setTravelTime(`${roundedMs} millisecond${roundedMs !== 1 ? 's' : ''}`);
            }
        } else if (timeInSeconds < 60) {
            const seconds = Math.round(timeInSeconds);
            setTravelTime(`${seconds} second${seconds !== 1 ? 's' : ''}`);
        } else if (timeInHours < 1) {
            const minutes = Math.round(timeInHours * 60);
            setTravelTime(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
        } else if (timeInHours < 48) {
            const hours = Math.round(timeInHours);
            setTravelTime(`${hours} hour${hours !== 1 ? 's' : ''}`);
        } else if (timeInHours < 24 * 60) {
            const days = Math.round(timeInHours / 24);
            setTravelTime(`${days} day${days !== 1 ? 's' : ''}`);
        } else if (timeInHours < 24 * 365 * 2) {
            const months = Math.round(timeInHours / (24 * 30));
            setTravelTime(`${months} month${months !== 1 ? 's' : ''}`);
        } else {
            const years = Math.round(timeInHours / (24 * 365));
            setTravelTime(`${years.toLocaleString()} year${years !== 1 ? 's' : ''}`);
        }
    };

    useEffect(() => {
        calculateTravelTime();
    }, [selectedDestination, selectedSpeed]);

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
    };

    const resultCardStyle = {
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: '1rem',
        padding: '1.5rem',
        textAlign: 'center' as const,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '1.5rem',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '1.5rem',
    };

    const sectionStyle = {
        backgroundColor: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: '1rem',
        padding: '1.25rem',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };

    const titleStyle = {
        fontSize: '1.125rem',
        fontWeight: 'bold',
        color: colors.text,
        marginBottom: '1rem',
    };

    const listStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '0.5rem',
        maxHeight: '24rem',
        overflowY: 'auto' as const,
        overflowX: 'hidden' as const,
    };

    const getOptionStyle = (isSelected: boolean, accentColor: string) => ({
        display: 'flex',
        alignItems: 'center',
        padding: '0.75rem',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        backgroundColor: isSelected ? `${accentColor}20` : colors.background,
        border: `1px solid ${isSelected ? accentColor : 'transparent'}`,
        transition: 'all 0.2s ease',
    });

    const getHoverStyle = (isSelected: boolean, accentColor: string) => ({
        backgroundColor: isSelected ? `${accentColor}30` : `${colors.border}40`,
    });

    const iconStyle = (color: string) => ({
        fontSize: '1.125rem',
        marginRight: '0.75rem',
        color: color,
        flexShrink: 0,
    });

    const nameStyle = {
        fontWeight: '500',
        fontSize: '0.875rem',
        color: colors.text,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap' as const,
    };

    const detailStyle = {
        fontSize: '0.75rem',
        color: colors.textSecondary,
    };

    return (
        <div style={containerStyle}>
            {/* Travel Time Result */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={resultCardStyle}
            >
                <h3 style={{ ...titleStyle, marginBottom: '0.75rem' }}>Travel Time</h3>
                <motion.div
                    key={travelTime}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: 'bold',
                        backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    {travelTime}
                </motion.div>
            </motion.div>

            <div style={gridStyle}>
                {/* Destinations Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={sectionStyle}
                >
                    <h2 style={titleStyle}>Choose Your Destination</h2>
                    <div style={listStyle}>
                        {destinations.map((destination) => {
                            const IconComponent = destination.icon;
                            const isSelected = selectedDestination === destination.id;
                            return (
                                <motion.label
                                    key={destination.id}
                                    whileHover={getHoverStyle(isSelected, colors.primary)}
                                    whileTap={{ scale: 0.98 }}
                                    style={getOptionStyle(isSelected, colors.primary)}
                                >
                                    <input
                                        type="radio"
                                        name="destination"
                                        value={destination.id}
                                        checked={isSelected}
                                        onChange={(e) => setSelectedDestination(e.target.value)}
                                        style={{ display: 'none' }}
                                    />
                                    <IconComponent style={iconStyle(colors.primary)} />
                                    <div style={{ minWidth: 0, flex: 1 }}>
                                        <div style={nameStyle}>{destination.name}</div>
                                        <div style={detailStyle}>
                                            {destination.distance.toLocaleString()} km
                                        </div>
                                    </div>
                                </motion.label>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Speeds Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={sectionStyle}
                >
                    <h2 style={titleStyle}>Choose Your Speed</h2>
                    <div style={listStyle}>
                        {speeds.map((speed) => {
                            const IconComponent = speed.icon;
                            const isSelected = selectedSpeed === speed.id;
                            return (
                                <motion.label
                                    key={speed.id}
                                    whileHover={getHoverStyle(isSelected, colors.success)}
                                    whileTap={{ scale: 0.98 }}
                                    style={getOptionStyle(isSelected, colors.success)}
                                >
                                    <input
                                        type="radio"
                                        name="speed"
                                        value={speed.id}
                                        checked={isSelected}
                                        onChange={(e) => setSelectedSpeed(e.target.value)}
                                        style={{ display: 'none' }}
                                    />
                                    <IconComponent style={iconStyle(colors.success)} />
                                    <div style={{ minWidth: 0, flex: 1 }}>
                                        <div style={nameStyle}>{speed.name}</div>
                                        <div style={detailStyle}>
                                            {speed.speed === Infinity ? 'Instant' : `${speed.speed.toLocaleString()} km/h`}
                                        </div>
                                    </div>
                                </motion.label>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
