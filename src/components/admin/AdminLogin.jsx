import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlaneTakeoff, Lock } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import './AdminLogin.css';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: credentials.email,
                password: credentials.password
            });

            if (error) throw error;

            // Supabase handles session automatically, just navigate
            navigate('/admin');
        } catch (err) {
            setError(err.message || 'Invalid login credentials.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="admin-login-page">
            <div className="admin-login-container glass-panel">
                <div className="admin-login-header">
                    <img src="/images/logo.png" alt="Hume Freight Admin" className="admin-portal-logo" />
                    <h2>Admin <span className="fw-300">Portal</span></h2>
                    <p>Restricted Access Area</p>
                </div>

                {error && <div className="login-error">{error}</div>}

                <form onSubmit={handleLogin} className="admin-login-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter admin email"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <div className="password-input">
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                required
                                placeholder="Enter password"
                                disabled={isLoading}
                            />
                            <Lock size={18} className="lock-icon" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary login-btn" disabled={isLoading}>
                        {isLoading ? 'Authenticating...' : 'Secure Login'}
                    </button>
                </form>

                <a href="/" className="back-link">← Return to Main Site</a>
            </div>
        </div>
    );
};

export default AdminLogin;
