    import React, { useContext } from 'react'
    import { Link } from 'react-router-dom';
    import '../CSS/Header.css'
    import { AuthContext } from '../context/AuthContext';
    import icon from '../icon.png';


    export const Header = () => {
        const { isAuthenticated } = useContext(AuthContext); 
        const handleLogout = () => {
                sessionStorage.removeItem('access_token');
                sessionStorage.removeItem('refresh_token');
                sessionStorage.removeItem('transactions')
                window.location.href = '/login';
            };
            
            return (
                <header>
                    <img src={icon} alt="BudgetBuddy Logo" className="logo" />
                    <h2>BudgetBuddy</h2>
                <nav>
                    <Link to="/">Home</Link>
                    {isAuthenticated ? (
                    <button onClick={handleLogout}>Logout</button>
                    ) : (
                    <>
                        <Link to="/login">Login</Link>
                    </>
                    )}
                </nav>
                </header>
            );
    }