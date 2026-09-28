import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import backArrow from "../../assets/Icons/back-arrow.png";
import "./TermsOfServices.css";

const TermsOfServices = () => {

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="tos-page">

            {/* Navbar */}
            <Navbar />

            {/* Back to Home */}
            <Link to="/" className="tos-back-home" id="tos-back-home-btn">
                <img src={backArrow} alt="" className="back-arrow-icon" /> BACK TO HOME
            </Link>

            {/* Page Title */}
            <header className="tos-header">
                <h1 className="tos-title">TERMS OF SERVICES</h1>
                <p className="tos-subtitle">
                    Last Updated: October 14, 2026. These Terms of Use outline the rules of engagement within the JellyByte Studios
                    ecosystem. Read them fully before using the platform.
                </p>
            </header>

            {/* Body: Sidebar + Content */}
            <div className="tos-body">

                {/* Sidebar Index */}
                <aside className="tos-sidebar">
                    <div className="tos-index">
                        <span className="tos-index-label">INDEX</span>

                        <ul className="tos-index-list">
                            <li>
                                <button onClick={() => scrollToSection("user-conduct")}>
                                    <span className="tos-index-num">01.</span> User Conduct
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("intellectual-property")}>
                                    <span className="tos-index-num">02.</span> Intellectual Property
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("limitation-of-liability")}>
                                    <span className="tos-index-num">03.</span> Limitation of Liability
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("governing-law")}>
                                    <span className="tos-index-num">04.</span> Governing Law
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="tos-content">

                    {/* 01. User Conduct */}
                    <section className="tos-section" id="user-conduct">
                        <h2 className="tos-section-title">
                            <span className="tos-section-num">01.</span>
                            USER CONDUCT
                        </h2>

                        <p>
                            By accessing JellyByte Studios' services, you agree to maintain a standard of conduct
                            fitting for our digital realm. You shall not engage in activities that disrupt, exploit, or
                            differentiate from the infrastructure, community, or integrity of our games and platforms.
                        </p>

                        <p>
                            Prohibited actions include, but are not limited to, the use of unauthorized third-party
                            software, harassment of other users, and any attempt to reverse-engineer our
                            proprietary code or systems. Violation of these terms will result in immediate
                            termination of access privileges.
                        </p>
                    </section>

                    {/* 02. Intellectual Property */}
                    <section className="tos-section" id="intellectual-property">
                        <h2 className="tos-section-title">
                            <span className="tos-section-num">02.</span>
                            INTELLECTUAL PROPERTY
                        </h2>

                        <p>
                            All content, including but not limited to visual assets, narrative structures,
                            audio/scores, and underlying code, is the exclusive property of JellyByte Studios.
                            These digital artifacts are protected by international copyright and trademark laws.
                        </p>

                        <p>
                            Users are granted a limited, non-exclusive, non-transferable license to access and
                            interact with our services for personal, non-commercial use. Unauthorized
                            reproduction, modification, or distribution of our intellectual property is strictly
                            forbidden.
                        </p>
                    </section>

                    {/* 03. Limitation of Liability */}
                    <section className="tos-section" id="limitation-of-liability">
                        <h2 className="tos-section-title">
                            <span className="tos-section-num">03.</span>
                            LIMITATION OF LIABILITY
                        </h2>

                        <p>
                            JellyByte Studios provides its services "as is" and "as available." We make no
                            warranties, expressed or implied, regarding the uninterrupted or error-free operation of
                            our platforms. The digital realm is unpredictable.
                        </p>

                        <p>
                            To the maximum extent permitted by law, JellyByte Studios shall not be liable for any
                            indirect, incidental, special, consequential, or punitive damages arising from your use
                            of or inability to use our services, even if advised of the possibility of such damages.
                        </p>
                    </section>

                    {/* 04. Governing Law */}
                    <section className="tos-section" id="governing-law">
                        <h2 className="tos-section-title">
                            <span className="tos-section-num">04.</span>
                            GOVERNING LAW
                        </h2>

                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of the
                            jurisdiction in which JellyByte Studios is headquartered, without regard to its conflict of
                            law provisions.
                        </p>

                        <p>
                            Any disputes arising out of or relating to these Terms or our services shall be resolved
                            exclusively in the competent courts located within said jurisdiction. You consent to the
                            personal jurisdiction of such courts.
                        </p>
                    </section>

                </main>
            </div>

            {/* Footer */}
            <Footer />

        </div>
    );
};

export default TermsOfServices;