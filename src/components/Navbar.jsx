import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { conferences } from "../data/conferences";
import "./Navbar.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container nav-container">
                <Link to="/" className="brand">
                    <div className="logo-mark" />
                    <span className="logo-text">EduGame</span>
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links desktop-only">
                    {conferences.map((conf) => (
                        <Link
                            key={conf.year}
                            to={`/conference/${conf.year}`}
                            className={`nav-link ${location.pathname === `/conference/${conf.year}` ? "active" : ""
                                }`}
                            style={{
                                "--hover-color": conf.color,
                            }}
                        >
                            {conf.year}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
                        <span />
                        <span />
                        <span />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
                <div className="mobile-links">
                    <Link to="/" className="mobile-link">Home</Link>
                    {conferences.map((conf) => (
                        <Link
                            key={conf.year}
                            to={`/conference/${conf.year}`}
                            className={`mobile-link ${location.pathname === `/conference/${conf.year}` ? "active" : ""
                                }`}
                            style={{ color: location.pathname === `/conference/${conf.year}` ? conf.color : undefined }}
                        >
                            {conf.year} — {conf.location}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
