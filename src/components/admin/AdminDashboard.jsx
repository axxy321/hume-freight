import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlaneTakeoff, LogOut, Trash2 } from 'lucide-react';
import { supabase } from '../../lib/supabaseClient';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthAndLoadData = async () => {
            // Check authentication
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                navigate('/login');
                return;
            }

            // Load quotes from Supabase
            const { data, error } = await supabase
                .from('quotes')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                console.error("Error fetching quotes:", error);
            } else {
                setQuotes(data || []);
            }
            setIsLoading(false);
        };

        checkAuthAndLoadData();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/login');
    };

    const deleteQuote = async (id) => {
        // Optimistic UI update
        const updated = quotes.filter(q => q.id !== id);
        setQuotes(updated);

        // Actual DB deletion
        const { error } = await supabase
            .from('quotes')
            .delete()
            .eq('id', id);

        if (error) {
            console.error("Error deleting quote:", error);
            // Optionally revert UI state here if delete failed
        }
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString();
    };

    return (
        <div className="admin-dashboard">
            <header className="admin-header glass-panel">
                <div className="admin-logo">
                    <img src="/images/logo.png" alt="Hume Freight Admin" className="admin-dashboard-logo" />
                </div>
                <button onClick={handleLogout} className="logout-btn">
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </header>

            <main className="dashboard-content container mt-40">
                <div className="dashboard-title-row">
                    <h1 className="dashboard-title">Requested Quotes</h1>
                    <span className="quote-count">{quotes.length} Total</span>
                </div>

                {isLoading ? (
                    <div className="empty-state glass-panel">
                        <p>Loading encrypted records...</p>
                    </div>
                ) : quotes.length === 0 ? (
                    <div className="empty-state glass-panel">
                        <p>No quote requests have been submitted yet.</p>
                    </div>
                ) : (
                    <div className="quotes-grid">
                        {quotes.map(quote => (
                            <div key={quote.id} className="quote-card glass-panel">
                                <div className="quote-card-header">
                                    <h3>{quote.name}</h3>
                                    <span className="quote-date">{formatDate(quote.created_at)}</span>
                                </div>

                                <div className="quote-details">
                                    <div className="detail-row">
                                        <span className="detail-label">Phone:</span>
                                        <span className="detail-value">{quote.phone}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">Email:</span>
                                        <span className="detail-value">{quote.email}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">Location:</span>
                                        <span className="detail-value">{quote.location}</span>
                                    </div>
                                </div>

                                <div className="quote-message">
                                    <span className="detail-label">Message:</span>
                                    <p>{quote.message}</p>
                                </div>

                                <div className="quote-card-actions">
                                    <button onClick={() => deleteQuote(quote.id)} className="delete-btn">
                                        <Trash2 size={16} /> Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
