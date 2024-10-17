import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

const pageVariants = {
initial: { opacity: 0, y: 50 },
in: { opacity: 1, y: 0 },
out: { opacity: 0, y: -50 },
};

const pageTransition = {
duration: 0.5,
ease: 'easeInOut',
};

const App = () => {
const isAuthenticated = !!localStorage.getItem('access_token');
const location = useLocation();

return (
<AuthProvider>
    <div>
    <Header />
    <main>
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route
            path="/"
            element={
                <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                >
                <Home isAuthenticated={isAuthenticated} />
                </motion.div>
            }
            />
            <Route
            path="/Home"
            element={
                <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                >
                <Home />
                </motion.div>
            }
            />
            <Route
            path="/login"
            element={
                <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                >
                <Login />
                </motion.div>
            }
            />
            <Route
            path="/signup"
            element={
                <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                >
                <Signup />
                </motion.div>
            }
            />
            <Route
            path="/about"
            element={
                <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                >
                <About />
                </motion.div>
            }
            />
        </Routes>
        </AnimatePresence>
    </main>
    <Footer />
    </div>
</AuthProvider>
);
};

export default App;
