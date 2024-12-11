import { useNavigate } from 'react-router-dom';
import Navbar from '../../../../components/Navbar/Navbar'
import "./CheckingAccount.css";

function CheckingAccount() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/A&U/ContactUs');
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
                </div>
            </div>

            <div className="CA-wrapper">
                <section className="CA-benefits">
                    <h2>Account Benefits</h2>
                    <div className="CA-benefits-grid">
                        <div className="CA-benefit-card">
                            <div className="CA-benefit-icon">💳</div>
                            <h3>Free Debit Card</h3>
                            <p>Access your funds 24/7 with our secure debit card</p>
                        </div>
                        <div className="CA-benefit-card">
                            <div className="CA-benefit-icon">📱</div>
                            <h3>Online Banking</h3>
                            <p>Manage your account anytime, anywhere</p>
                        </div>
                        <div className="CA-benefit-card">
                            <div className="CA-benefit-icon">📝</div>
                            <h3>Unlimited Transactions</h3>
                            <p>No limits on withdrawals or deposits</p>
                        </div>
                        <div className="CA-benefit-card">
                            <div className="CA-benefit-icon">✔️</div>
                            <h3>Zero Balance Option</h3>
                            <p>Maintain your account with minimal balance</p>
                        </div>
                    </div>
                </section>

                <section className="CA-features">
                    <div className="CA-features-container">
                        <div className='CA-features-description'>
                            <h1>Description</h1>
                            <p>Our checking account offers a range of features to meet your financial needs</p>
                        </div>
                        <div className="CA-features-content">
                            <h2>Key Features</h2>
                            <ul className="CA-features-list">
                                <li>
                                    <span className="CA-check">✓</span>
                                    Free checkbook for qualified accounts
                                </li>
                                <li>
                                    <span className="CA-check">✓</span>
                                    Bill pay services
                                </li>
                                <li>
                                    <span className="CA-check">✓</span>
                                    Mobile check deposit
                                </li>
                                <li>
                                    <span className="CA-check">✓</span>
                                    Direct deposit capability
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
                                <li>Proof of Address</li>
                                <li>Tax Identification Number</li>
                                <li>Initial Deposit</li>
                            </ul>
                        </div>
                        <div className="CA-requirement-item">
                            <h3>Account Fees</h3>
                            <ul>
                                <li>Monthly Maintenance Fee</li>
                                <li>ATM Network Fee</li>
                                <li>Check Order Fee</li>
                                <li>Foreign Transaction Fee</li>
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
        </div>
    );
}

export default CheckingAccount;