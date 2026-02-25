import { useEffect } from "react";
import Hero from "../components/Hero";
import ConferenceCard from "../components/ConferenceCard";
import { conferences } from "../data/conferences";
import "./Home.css";

export default function Home() {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-home">
            <Hero />

            <section id="years" className="section bg-surface">
                <div className="container">
                    <div className="text-center mb-16 animate-fadeUp">
                        <h2 className="section-title">A Legacy of <span className="gradient-text">Innovation</span></h2>
                        <p className="section-subtitle mx-auto">
                            Explore half a decade of the EduGame Conference.
                            Each year brought new insights into how play fundamentally transforms the way we discover, learn, and grow.
                        </p>
                    </div>

                    <div className="conf-grid">
                        {/* Reverse array to show newest first */}
                        {[...conferences].reverse().map((conf, index) => (
                            <ConferenceCard
                                key={conf.year}
                                conference={conf}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Mini CTA Section */}
            <section className="section bg-pitch animate-fadeUp">
                <div className="container mini-cta">
                    <h2>Ready for EduGame 2027?</h2>
                    <p>Join our newsletter to be the first to know about dates, locations, and call for speakers.</p>
                    <div className="subscribe-form">
                        <input type="email" placeholder="Enter your email address" className="form-input" />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
