import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-glow glow-1"></div>
                <div className="hero-glow glow-2"></div>
                <div className="hero-grid"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge animate-fadeUp">
                        <span className="badge-dot"></span>
                        Celebrating 5 Years of Educational Innovation
                    </div>

                    <h1 className="hero-title animate-fadeUp animate-delay-1">
                        Play holds the power <br />
                        to <span className="gradient-text">transform learning.</span>
                    </h1>

                    <p className="hero-subtitle animate-fadeUp animate-delay-2">
                        Explore half a decade of the EduGame Conference, where educators, researchers, and game designers converge to build the future of immersive education.
                    </p>

                    <div className="hero-actions animate-fadeUp animate-delay-3">
                        <a href="#years" className="btn btn-primary">
                            Explore Past Conferences
                        </a>
                        <Link to="/conference/2026" className="btn btn-secondary">
                            Latest Edition (2026)
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
