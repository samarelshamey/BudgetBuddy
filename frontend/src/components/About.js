import React from 'react';
import '../CSS/About.css';
import about from '../imgs/about.png'

const About = () => {
    return (
        <div className="about-container">
            <img src={about} alt="About Us" className="about-image" />
            <p>
                Welcome to Budget Buddy! We are dedicated to helping you manage your finances
                effectively. Our platform provides tools to track your expenses, set budgets,
                and achieve your financial goals.
            </p>
            <p>
                Our mission is to empower individuals to take control of their financial health
                through user-friendly resources and comprehensive support. Whether you’re
                looking to save for a dream vacation, plan for retirement, or simply keep track
                of your daily spending, Budget Buddy is here for you.
            </p>
        </div>
    );
};

export default About;