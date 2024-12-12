import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import './CropLoan.css';

function CropLoan () {
    const navigate = useNavigate();

    const handleNavigateToContact = () => {
        navigate('/A%U/ContactUs');
    };

    const scrollToDescription = () => {
        const description = document.querySelector('.CLL-description-section');
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

            <div className="CLL-hero-section">
                <div className="CLL-hero-content">
                    <div className="CLL-hero-text">
                        <h1>Crop Loan</h1>
                        <p>Cultivating Growth, Harvesting Prosperity</p>
                        <button onClick={scrollToDescription} className="CLL-learn-more-btn">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="CLL-benefits-section">
                <div className="CLL-benefits-grid">
                    <div className="CLL-benefit-card">
                        <div className="CLL-benefit-icon">🌱</div>
                        <h3>Flexible Financing</h3>
                        <p>Customized loan solutions for agricultural entrepreneurs</p>
                    </div>
                    <div className="CLL-benefit-card">
                        <div className="CLL-benefit-icon">💰</div>
                        <h3>Competitive Rates</h3>
                        <p>Affordable interest rates tailored for farmers</p>
                    </div>
                    <div className="CLL-benefit-card">
                        <div className="CLL-benefit-icon">📈</div>
                        <h3>Growth Support</h3>
                        <p>Empowering agricultural development</p>
                    </div>
                </div>
            </div>

            <div className='CLL-description-container'>
                <div className="CLL-description-section">
                    <div className="CLL-description-content">
                        <h2>Why Choose Crop Loan?</h2>
                        <p>
                            Agri-Masikap Loan is a unique loan option designed for farmers and agricultural entrepreneurs.
                            With competitive interest rates, flexible financing options, and growth support,
                            it's the perfect solution for your agricultural business. Explore the benefits and apply now!
                        </p>
                    </div>
                </div>
            </div>

            <div className="CLL-features-section" >
                <div className="CLL-features-content">
                    <h2>Loan Features</h2>
                    <div className="CLL-features-grid">
                        <div className="CLL-feature-item">
                            <div className="CLL-feature-icon">💡</div>
                            <div className="CLL-feature-details">
                                <h4>Low Interest Rates</h4>
                                <p>Competitive rates to support your agricultural ventures</p>
                            </div>
                        </div>
                        <div className="CLL-feature-item">
                            <div className="CLL-feature-icon">⚡</div>
                            <div className="CLL-feature-details">
                                <h4>Quick Processing</h4>
                                <p>StreCLLined application and approval process</p>
                            </div>
                        </div>
                        <div className="CLL-feature-item">
                            <div className="CLL-feature-icon">🤝</div>
                            <div className="CLL-feature-details">
                                <h4>Flexible Terms</h4>
                                <p>Adaptable repayment options for farmers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="CLL-cta-section">
                <div className="CLL-cta-content">
                    <h2>Ready to Grow Your Agricultural Business?</h2>
                    <p>Apply for an Agri-Masikap Loan and unlock your farming potential</p>
                    <button
                        className="CLL-cta-button"
                        onClick={handleNavigateToContact}
                    >
                        Apply Now
                    </button>
                </div>
            </div>

            <button
                className="CLL-scroll-top"
                onClick={scrollToTop}
            > ↑ </button>
        </div>
    );
}

export default CropLoan;