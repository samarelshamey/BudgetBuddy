import React from 'react';
import '../CSS/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} BudgetBuddy. All rights reserved.</p>
            <p>
                <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
            </p>
        </footer>
    );
};

export default Footer;