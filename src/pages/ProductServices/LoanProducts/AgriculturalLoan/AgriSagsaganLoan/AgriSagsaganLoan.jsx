import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import './AgriSagsaganLoan.css';

function AgriSagsaganLoan() {
    const navigate = useNavigate();

    const handleNavigateToContact = () => {
        navigate('/A%U/ContactUs');
    };

    const scrollToDescription = () => {
        const description = document.querySelector('.ASL-description-section');
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
        <div className="Agri-Sagsagan-Loan-container">
            <Navbar />

            <section className="ASL-hero-section">
                <div className="ASL-hero-content">
                    <div className="ASL-hero-text">
                        <h1>Agri-Sagsagan Loan</h1>
                        <p>Empowering Agricultural Growth</p>
                        <button
                            className="ASL-learn-more-btn"
                            onClick={scrollToDescription}
                        >
                            Learn more
                        </button>
                    </div>
                </div>
            </section>

            <section className="ASL-benefits-section">
                <div className="ASL-benefits-grid">
                    <div className="ASL-benefit-card">
                        <div className="ASL-benefit-icon">🏦</div>
                        <h3>Online Transfer</h3>
                        <p>Transfer funds from your account to another account seamlessly</p>
                    </div>
                    <div className="ASL-benefit-card">
                        <div className="ASL-benefit-icon">💳</div>
                        <h3>ATM Withdrawal</h3>
                        <p>Convenient withdrawal of funds from any ATM</p>
                    </div>
                </div>
            </section>

            <section className="ASL-description-section">
                <div className="ASL-description-container">
                    <div className="ASL-description-content">
                        <h2>Why Choose Agri-Sagsagan Loan?</h2>
                        <p>
                            Agri-Sagsagan Loan is a unique loan option designed for farmers and agricultural entrepreneurs.
                            With competitive interest rates, flexible financing options, and growth support,
                            it's the perfect solution for your agricultural business. Explore the benefits and apply now!
                        </p>
                    </div>
                </div>
            </section>

            <section className="ASL-features-section">
                <div className="ASL-features-content">
                    <h2>Our Features</h2>
                    <div className="ASL-features-grid">
                        <div className="ASL-feature-item">
                            <div className="ASL-feature-icon">💰</div>
                            <div className="ASL-feature-details">
                                <h4>Competitive Rates</h4>
                                <p>Best exchange rates guaranteed for your financial needs</p>
                            </div>
                        </div>
                        <div className="ASL-feature-item">
                            <div className="ASL-feature-icon">⚡</div>
                            <div className="ASL-feature-details">
                                <h4>Quick Processing</h4>
                                <p>Fast and reliable loan processing</p>
                            </div>
                        </div>
                        <div className="ASL-feature-item">
                            <div className="ASL-feature-icon">🚀</div>
                            <div className="ASL-feature-details">
                                <h4>Instant Accessibility</h4>
                                <p>Loans processed and approved within minutes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ASL-cta-section">
                <div className="ASL-cta-content">
                    <h2>Ready to Grow Your Agricultural Business?</h2>
                    <p>Secure your Agri-Sagsagan Loan today and cultivate success</p>
                    <button
                        className="ASL-cta-button"
                        onClick={handleNavigateToContact}
                    >
                        Apply Now
                    </button>
                </div>
            </section>

            <button 
                className="ASL-scroll-top"
                onClick={scrollToTop}
            >
                ↑
            </button>
        </div>
    );
}

export default AgriSagsaganLoan;