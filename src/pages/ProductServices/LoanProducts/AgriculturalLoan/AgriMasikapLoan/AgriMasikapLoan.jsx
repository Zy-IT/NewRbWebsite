import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import './AgriMasikapLoan.css';

function AgriMasikapLoan() {
    const navigate = useNavigate();

    const handleNavigateToContact = () => {
        navigate('/A%U/ContactUs');
    };

    const scrollToDescription = () => {
        const description = document.querySelector('.AML-description-section');
        if (description) {
            description.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="agri-masikap-loan-container">
            <Navbar />

            <div className="AML-hero-section">
                <div className="AML-hero-content">
                    <div className="AML-hero-text">
                        <h1>Agri-Masikap Loan</h1>
                        <p>Cultivating Growth, Harvesting Prosperity</p>
                        <button onClick={scrollToDescription} className="AML-learn-more-btn">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="AML-benefits-section">
                <div className="AML-benefits-grid">
                    <div className="AML-benefit-card">
                        <div className="AML-benefit-icon">🌱</div>
                        <h3>Flexible Financing</h3>
                        <p>Customized loan solutions for agricultural entrepreneurs</p>
                    </div>
                    <div className="AML-benefit-card">
                        <div className="AML-benefit-icon">💰</div>
                        <h3>Competitive Rates</h3>
                        <p>Affordable interest rates tailored for farmers</p>
                    </div>
                    <div className="AML-benefit-card">
                        <div className="AML-benefit-icon">📈</div>
                        <h3>Growth Support</h3>
                        <p>Empowering agricultural development</p>
                    </div>
                </div>
            </div>

            <div className='AML-description-container'>
                <div className="AML-description-section">
                    <div className="AML-description-content">
                        <h2>Why Choose Agri-Masikap Loan?</h2>
                        <p>
                            Agri-Masikap Loan is a unique loan option designed for farmers and agricultural entrepreneurs.
                            With competitive interest rates, flexible financing options, and growth support,
                            it's the perfect solution for your agricultural business. Explore the benefits and apply now!
                        </p>
                    </div>
                </div>
            </div>

            <div className="AML-features-section" >
                <div className="AML-features-content">
                    <h2>Loan Features</h2>
                    <div className="AML-features-grid">
                        <div className="AML-feature-item">
                            <div className="AML-feature-icon">💡</div>
                            <div className="AML-feature-details">
                                <h4>Low Interest Rates</h4>
                                <p>Competitive rates to support your agricultural ventures</p>
                            </div>
                        </div>
                        <div className="AML-feature-item">
                            <div className="AML-feature-icon">⚡</div>
                            <div className="AML-feature-details">
                                <h4>Quick Processing</h4>
                                <p>StreAMLined application and approval process</p>
                            </div>
                        </div>
                        <div className="AML-feature-item">
                            <div className="AML-feature-icon">🤝</div>
                            <div className="AML-feature-details">
                                <h4>Flexible Terms</h4>
                                <p>Adaptable repayment options for farmers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="AML-cta-section">
                <div className="AML-cta-content">
                    <h2>Ready to Grow Your Agricultural Business?</h2>
                    <p>Apply for an Agri-Masikap Loan and unlock your farming potential</p>
                    <button
                        className="AML-cta-button"
                        onClick={handleNavigateToContact}
                    >
                        Apply Now
                    </button>
                </div>
            </div>

            <button
                className="AML-scroll-top"
                onClick={scrollToTop}
            >
                ↑
            </button>
        </div>
    );
}

export default AgriMasikapLoan;