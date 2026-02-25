import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo-mark" />
                        <span className="logo-text">EduGame Conference</span>
                        <p className="footer-tagline">
                            Shaping the future of education through play and immersive design.
                        </p>
                    </div>

                    <div className="footer-links-grid">
                        <div className="footer-col">
                            <h4>Organization</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Manifesto</a></li>
                                <li><a href="#">Press Kit</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">Past Proceedings</a></li>
                                <li><a href="#">Code of Conduct</a></li>
                                <li><a href="#">Call for Papers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} EduGame Org. All rights reserved.</p>
                    <div className="social-links">
                        {/* Simple mock social icons */}
                        <a href="#" className="social-icon">Tw</a>
                        <a href="#" className="social-icon">In</a>
                        <a href="#" className="social-icon">Yt</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
