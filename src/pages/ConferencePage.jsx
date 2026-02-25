import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getConferenceByYear } from "../data/conferences";
import StatsBar from "../components/StatsBar";
import SpeakerCard from "../components/SpeakerCard";
import ScheduleTable from "../components/ScheduleTable";
import "./ConferencePage.css";

export default function ConferencePage() {
    const { year } = useParams();
    const conference = getConferenceByYear(year);

    // Scroll to top on mount or year change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [year]);

    if (!conference) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="page-conference" style={{ "--page-color": conference.color }}>
            {/* Dynamic Hero Banner */}
            <section className="conf-hero animate-fadeUp">
                <div
                    className="conf-hero-bg"
                    style={{
                        background: `linear-gradient(135deg, ${conference.gradientFrom}, ${conference.gradientTo})`
                    }}
                />

                <div className="container conf-hero-content">
                    <Link to="/" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Back to Home
                    </Link>

                    <div className="badge hero-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        {conference.location} • {conference.dates}
                    </div>

                    <h1 className="conf-page-title">EduGame {conference.year}</h1>
                    <h2 className="conf-page-theme">"{conference.theme}"</h2>
                    <p className="conf-page-tagline">{conference.tagline}</p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container main-content">

                {/* Intro & Stats */}
                <section className="section intro-section">
                    <div className="intro-text animate-fadeUp animate-delay-1">
                        <h3 className="section-title">About the {year} Edition</h3>
                        <p className="conf-full-desc">{conference.description}</p>
                    </div>

                    <div className="stats-wrapper animate-fadeUp animate-delay-2">
                        <StatsBar stats={conference.stats} color={conference.color} />
                    </div>
                </section>

                {/* Highlights */}
                <section className="section highlights-section">
                    <h3 className="section-title animate-fadeUp">Key Highlights</h3>
                    <div className="highlights-grid">
                        {conference.highlights.map((highlight, idx) => (
                            <div
                                key={idx}
                                className="highlight-card animate-fadeUp"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                            >
                                <div className="highlight-icon" style={{ color: conference.color }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </div>
                                <p>{highlight}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Speakers */}
                <section className="section speakers-section bg-surface-local">
                    <div className="text-center mb-16 animate-fadeUp">
                        <h3 className="section-title">Featured Voices</h3>
                        <p className="section-subtitle mx-auto">Thought leaders defining the next era of educational play.</p>
                    </div>

                    <div className="speakers-grid">
                        {conference.speakers.map((speaker, idx) => (
                            <SpeakerCard key={speaker.id} speaker={speaker} />
                        ))}
                    </div>
                </section>

                {/* Schedule */}
                <section className="section schedule-section">
                    <div className="mb-16 animate-fadeUp">
                        <h3 className="section-title">Conference Schedule</h3>
                        <p className="section-subtitle">A deep dive into sessions, workshops, and ceremonies.</p>
                    </div>

                    <ScheduleTable schedule={conference.schedule} color={conference.color} />
                </section>

            </div>
        </div>
    );
}
