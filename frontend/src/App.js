// import './CSS/Home.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './context/AuthContext';


const App = () => {
    const isAuthenticated = !!localStorage.getItem('access_token');

    return (
        <AuthProvider>
        <div>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home isAuthenticated={isAuthenticated} />
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
        </AuthProvider>
    );
};

export default App;