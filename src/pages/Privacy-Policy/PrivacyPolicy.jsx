import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
    return (
        <div className="pp-page">

            {/* Navbar */}
            <Navbar />

            {/* Back to Home */}
            <Link to="/" className="pp-back-home" id="pp-back-home-btn">
                ← BACK TO HOME
            </Link>

            {/* Page Title */}
            <header className="pp-header">
                <h1 className="pp-title">PRIVACY POLICY</h1>
                <p className="pp-updated">Last Updated: September 1, 2026</p>
            </header>

            {/* Main Content */}
            <main className="pp-content">

                {/* Information Collection */}
                <section className="pp-card">
                    <h2>
                        <span className="pp-card-icon green">⊙</span>
                        Information Collection
                    </h2>

                    <div className="pp-card-body">
                        <p>
                            At JellyByte Studios, we believe in transparency. When you interact with our high-performance
                            gaming ecosystem, we collect essential data to ensure seamless gameplay and robust account
                            security. This includes:
                        </p>

                        <ul>
                            <li>
                                <strong>Account Data:</strong> Usernames, email addresses, and encrypted passwords for authentication.
                            </li>
                            <li>
                                <strong>Telemetry:</strong> In-game performance metrics, hardware configurations, and crash logs to
                                optimize our engines.
                            </li>
                            <li>
                                <strong>Transaction Records:</strong> Securely tokenized payment histories for premium acquisitions
                                (processed via certified partners).
                            </li>
                        </ul>
                    </div>
                </section>


                {/* Data Usage */}
                <section className="pp-card">
                    <h2>
                        <span className="pp-card-icon gray">◈</span>
                        Data Usage
                    </h2>

                    <div className="pp-card-body">
                        <p>
                            Your data fuels our engines. We do not sell your personal information. We utilize collected
                            metrics strictly to:
                        </p>

                        <div className="pp-usage-grid">
                            <div className="pp-usage-box">
                                <h3>SYSTEM OPTIMIZATION</h3>
                                <p>
                                    Fine-tuning server response times,
                                    balancing matchmaking algorithms,
                                    and deploying critical patches based
                                    on aggregate crash reports.
                                </p>
                            </div>

                            <div className="pp-usage-box">
                                <h3>SECURITY PROTOCOLS</h3>
                                <p>
                                    Monitoring for anomalous activity,
                                    preventing unauthorized access, and
                                    maintaining the integrity of our
                                    multiplayer environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Cookies & Tracking Technologies */}
                <section className="pp-card">
                    <h2>
                        <span className="pp-card-icon green">⚙</span>
                        Cookies & Tracking Technologies
                    </h2>

                    <div className="pp-card-body">
                        <p>
                            We deploy essential session tokens and analytics scripts across our web properties. These
                            lightweight scripts are designed to remember your aesthetic preferences (like Dark Mode) and
                            keep you authenticated during active sessions. You can configure your local browser to reject
                            non-essential telemetry, though this may degrade certain interactive web experiences.
                        </p>
                    </div>
                </section>


                {/* Third-Party Sharing */}
                <section className="pp-card">
                    <h2>
                        <span className="pp-card-icon purple">✦</span>
                        Third-Party Sharing
                    </h2>

                    <div className="pp-card-body">
                        <p>
                            We operate within a controlled network. Data is only shared with verified third-party
                            infrastructure providers (e.g., cloud hosting, payment gateways) under strict non-disclosure
                            agreements. We will surrender data to legal authorities only when compelled by a valid,
                            localized court order.
                        </p>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default PrivacyPolicy;
