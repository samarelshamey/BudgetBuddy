// import './CSS/Home.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthProvider } from './context/AuthContext';
import Footer from './components/Footer'


const App = () => {
    const isAuthenticated = !!localStorage.getItem('access_token');

    return (
        <AuthProvider>
        <div>
            <Header />
            <main>
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
            </main>
            <Footer />
        </div>
        </AuthProvider>
    );
};

export default App;