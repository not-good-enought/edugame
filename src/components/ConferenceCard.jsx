import { Link } from "react-router-dom";
import "./ConferenceCard.css";

export default function ConferenceCard({ conference, index }) {
    const { year, theme, location, dates, color, gradientFrom, gradientTo, description } = conference;

    return (
        <Link
            to={`/conference/${year}`}
            className="conf-card animate-fadeUp"
            style={{
                animationDelay: `${index * 0.1}s`,
                "--card-color": color,
                "--card-grad-from": gradientFrom,
                "--card-grad-to": gradientTo,
            }}
        >
            <div className="conf-card-bg"></div>

            <div className="conf-card-header">
                <h2 className="conf-year">{year}</h2>
                <div className="conf-meta">
                    <span className="conf-location">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {location}
                    </span>
                    <span className="conf-dates">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        {dates}
                    </span>
                </div>
            </div>

            <div className="conf-card-body">
                <h3 className="conf-theme">{theme}</h3>
                <p className="conf-desc">{description.substring(0, 120)}...</p>
            </div>

            <div className="conf-card-footer">
                <span className="explore-link">
                    Explore Edition
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </span>
            </div>
        </Link>
    );
}
