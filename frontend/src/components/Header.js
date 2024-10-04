    import React, { useContext } from 'react'
    import { Link } from 'react-router-dom';
    import '../CSS/Header.css'
    import { AuthContext } from '../context/AuthContext';

    export const Header = () => {
        const { isAuthenticated } = useContext(AuthContext); 
        const handleLogout = () => {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.href = '/login';
            };
            
            return (
                <header>
                    <h2>BudgetBuddy</h2>
                <nav>
                    <Link to="/">Home</Link>
                    {isAuthenticated ? (
                    <button onClick={handleLogout}>Logout</button>
                    ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                    )}
                </nav>
                </header>
            );
    }