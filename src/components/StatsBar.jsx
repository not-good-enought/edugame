import { useState, useEffect, useRef } from 'react';
import './StatsBar.css';

const StatCounter = ({ end, label }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) setInView(true);
            },
            { threshold: 0.1 }
        );
        if (nodeRef.current) observer.observe(nodeRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, end]);

    return (
        <div className="stat-item" ref={nodeRef}>
            <div className="stat-number">{count}{label === "Attendees" ? "+" : ""}</div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

export default function StatsBar({ stats, color }) {
    if (!stats) return null;

    return (
        <div className="stats-bar animate-fadeUp" style={{ '--stat-color': color }}>
            <div className="stats-grid">
                <StatCounter end={stats.attendees} label="Attendees" />
                <div className="stat-divider" />
                <StatCounter end={stats.workshops} label="Workshops" />
                <div className="stat-divider" />
                <StatCounter end={stats.countries} label="Countries" />
            </div>
        </div>
    );
}
