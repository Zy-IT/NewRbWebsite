import { useNavigate } from 'react-router-dom';
import Navbar from '../../../../components/Navbar/Navbar'
import Footer from '../../../../components/Footer/Footer';
import "./CheckingAccount.css";

function CheckingAccount() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltoApply = () => {
        const Apply = document.querySelector('.CA-cta');
        if (Apply) {
            Apply.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="CA-container">
            <Navbar />

            <div className="CA-hero">
                <div className="CA-hero-content">
                    <h1>Checking Account/Demand Deposit</h1>
                    <p>Manage your daily transactions with ease and flexibility</p>
                    <button className='CA-header-button'
                        onClick={scrolltoApply}
                    >Apply Now</button>
                </div>
            </div>

            <div className="CA-wrapper">
                <section className="CA-benefits">
                    <h2>Account Benefits</h2>
                    <div className="CA-benefits-grid">
                        <div className="CA-benefit-card">
                            <div className="CA-benefit-icon">💵</div>
                            <h3>Start Now</h3>
                            <p>open an Account starting at 10,000 Php</p>
                        </div>
                        <div className="CA-benefit-card">
                            <div className="CA-benefit-icon">💵</div>
                            <h3>Maintaning Balance</h3>
                            <p>Keep your balance above the minimum balance for as low as 10,000</p>
                        </div>
                        <div className="CA-benefit-card">
                            <div className="CA-benefit-icon">✔️</div>
                            <h3>Interesting Rates</h3>
                            <p>Annual Interest 0% Compute Based on Average daily Balance</p>
                        </div>
                    </div>
                </section>

                <section className='CA-description-section'>
                    <div className='CA-description-container'>
                        <div className='CA-description-'>

                        </div>
                    </div>
                </section>


                <section className="CA-features">
                    <div className="CA-features-container">
                        <div className="CA-features-content">
                            <h2>Key Features</h2>
                            <ul className="CA-features-list">
                                <li>
                                    <span className="CA-check">✓</span>
                                    Free checkbook
                                </li>
                                <li>
                                    <span className="CA-check">✓</span>
                                    Free Passbook
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="CA-requirements">
                    <h2>Opening Requirements</h2>
                    <div className="CA-requirements-grid">
                        <div className="CA-requirement-item">
                            <h3>Documents Needed</h3>
                            <ul>
                                <li>Valid Government ID</li>
                                <li>Complete Application Form</li>
                                <li>Initial Deposit</li>
                            </ul>
                        </div>
                        <div className="CA-requirement-item">
                            <h3>Special Notice</h3>
                            <ul>
                                <li>Non-Activity foy a 1 whole year shall be considered as Dormant</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="CA-cta">
                    <div className="CA-cta-content">
                        <h2>Ready to Open an Account?</h2>
                        <p>Start managing your finances with our checking account today</p>
                        <div className="CA-cta-buttons">
                            <button className="CA-cta-button primary"
                                onClick={handletonavigate}
                            >Apply Now</button>
                        </div>
                    </div>
                </section>
                <button className='CA-scroll-top'
                    onClick={scrolltoTop}
                > ↑ </button>
            </div>
            <Footer />
        </div>
    );
}

export default CheckingAccount;