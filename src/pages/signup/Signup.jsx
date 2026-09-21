import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useAuth } from "../../contexts/AuthContext";
import "./Signup.css";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const { signup, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            navigate("/");
        } catch (err) {
            setError("Failed to create an account.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        try {
            setError("");
            setGoogleLoading(true);
            await loginWithGoogle();
            navigate("/");
        } catch (err) {
            setError("Failed to sign up with Google.");
            console.error(err);
        } finally {
            setGoogleLoading(false);
        }
    }

    return (
        <div className="signup-page">

            {/* Header */}
            <header className="signup-header">
                JELLYBYTE STUDIOS
            </header>

            {/* Back to Home */}
            <Link to="/" className="signup-back-home" id="signup-back-home-btn">
                ← BACK TO HOME
            </Link>

            {/* Background Overlay */}
            <div className="signup-overlay"></div>

            {/* Signup Card */}
            <div className="signup-card">

                {/* Heading */}
                <div className="signup-heading">
                    ACCESS PORTAL
                </div>

                <p className="signup-subtitle">
                    Enter your Credentials To Continue
                </p>

                {error && <div className="error-message" style={{ color: '#ff4d4d', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

                <form onSubmit={handleSubmit}>

                    {/* Username */}
                    <div className="signup-input-group">
                        <label htmlFor="username">
                            USERNAME
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter a Unique Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* Email */}
                    <div className="signup-input-group">
                        <label htmlFor="email">
                            EMAIL
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Your Email Here"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div className="signup-input-group">
                        <label htmlFor="password">
                            PASSWORD
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="***************"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="signup-input-group">
                        <label htmlFor="confirmPassword">
                            CONFIRM PASSWORD
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="***************"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    {/* Signup Button */}
                    <div className="signup-button">
                        <Button
                            type="submit"
                            disabled={loading || googleLoading}
                            text={loading ? "SIGNING UP..." : "SIGNUP"}
                            color="#dfff00"
                            padding="10px 0"
                        />
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <Button
                            type="button"
                            disabled={loading || googleLoading}
                            onClick={handleGoogleSignup}
                            text={googleLoading ? "CONNECTING..." : "CONTINUE WITH GOOGLE"}
                            color="#dfff00"
                            padding="10px 0"
                            icon={
                                <svg viewBox="0 0 48 48" width="20" height="20">
                                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                                    <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.0 24.0 0 0 0 0 21.56l7.98-6.19z" />
                                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                                </svg>
                            }
                        />
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Signup;