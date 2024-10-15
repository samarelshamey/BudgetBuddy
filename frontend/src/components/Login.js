import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../CSS/Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import CustomButton from './AnimatedButton.js';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { setIsAuthenticated } = useContext(AuthContext); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', { 
                username,
                password, 
            });

            const { access, refresh } = response.data;

            sessionStorage.setItem('access_token', access);
            sessionStorage.setItem('refresh_token', refresh);
            setIsAuthenticated(true);

            console.log('Login successful:', response.data);
            
            window.location.href = '/'; 
        } catch (error) {
            setError('Invalid username or password');
            console.error('Error during login:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-form">
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <CustomButton 
                    onClick={handleSubmit} 
                    loading={loading} 
                    text="Login" 
                />
            </form>
            <p>
                Don't have an account? <Link to="/signup">Register NOW!</Link>
            </p>
        </div>
    );
};

export default Login;
