import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { login, loginWithGoogle } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(email, password);
            navigate("/");
        } catch (err) {
            setError("Failed to sign in. Please check your credentials.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            setError("");
            setLoading(true);
            await loginWithGoogle();
            navigate("/");
        } catch (err) {
            setError("Failed to sign in with Google.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-page">

            {/* Header */}
            <header className="login-header">
                JELLYBYTE STUDIOS
            </header>

            {/* Back to Home */}
            <Link to="/" className="login-back-home" id="login-back-home-btn">
                ← BACK TO HOME
            </Link>

            {/* Background Overlay */}
            <div className="login-overlay"></div>

            {/* Login Card */}
            <div className="login-card">

                <div className="login-heading">
                    ACCESS PORTAL
                </div>

                <p className="login-subtitle">
                    Enter your Credentials To Continue
                </p>

                {error && <div className="error-message" style={{ color: '#ff4d4d', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className="input-group">
                        <label htmlFor="email">EMAIL</label>

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
                    <div className="input-group">
                        <label htmlFor="password">PASSWORD</label>

                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Your Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="forgot-password">
                        <Link to="/forgot-password">
                            FORGOT PASSWORD?
                        </Link>
                    </div>

                    <Button type="submit" disabled={loading} text={loading ? "LOGGING IN..." : "LOGIN"} color="#dfff00" padding="10px 0" />

                    <div style={{ marginTop: '15px' }}>
                        <Button
                            type="button"
                            disabled={loading}
                            onClick={handleGoogleLogin}
                            text="CONTINUE WITH GOOGLE"
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

                {/* Create Account */}
                <div className="create-account">
                    <span>NEW TO JELLYBYTE?</span>

                    <Link to="/signup">
                        CREATE ACCOUNT
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Login;