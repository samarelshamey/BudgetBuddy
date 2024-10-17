    import React, { useContext } from 'react'
    import { Link } from 'react-router-dom';
    import '../CSS/Header.css'
    import { AuthContext } from '../context/AuthContext';
    import icon from '../imgs/icon.png';


    export const Header = () => {
        const { isAuthenticated } = useContext(AuthContext); 
        const handleLogout = () => {
                sessionStorage.removeItem('access_token');
                sessionStorage.removeItem('refresh_token');
                sessionStorage.removeItem('transactions')
                window.location.href = '/Home';
            };
            
            return (
                <header className="header-container">
                        <div className='nav-left'>
                            <img src={icon} alt="BudgetBuddy Logo" className="logo" />
                            <h2>Budget Buddy</h2>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                        </div>
                        <div className='nav-right'>
                            {isAuthenticated ? (
                            <button onClick={handleLogout}>Logout</button>
                            ) : (
                            <>
                                <Link to="/login">Login</Link>
                            </>
                            )}
                        </div>
                    
                </header>
            );
    }