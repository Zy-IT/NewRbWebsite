import { useNavigate } from 'react-router-dom';
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './LoyaltyLoan.css';
import { BsSpeedometer, BsShieldCheck, BsCashStack } from 'react-icons/bs';

function LoyaltyLoan() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltodescription = () => {
        const details = document.querySelector('.LL-description');
        if (details) {
            details.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        <div className="Loyalty-Loan">
            <Navbar />

            <div className="LL-container">
                <div className="LL-header">
                    <h1 className="LL-title">Loyalty Loan</h1>
                    <p className="LL-subtitle">Your quick and reliable financial partner</p>
                    <button
                        className="LL-header-button"
                        onClick={scrolltodescription}
                    >Learn More
                    </button>
                </div>
            </div>

            <div className="LL-type-card">
                <div className="LL-offer-card">
                    <span className="LL-offer-icon">
                        <BsSpeedometer />
                    </span>
                    <h3>Fast Approval</h3>
                    <p>Get approved within 24 hours with minimal requirements</p>
                    <div className="LL-card-accent"></div>
                </div>
                <div className="LL-offer-card">
                    <span className="LL-offer-icon">
                        <BsCashStack />
                    </span>
                    <h3>Flexible Amount</h3>
                    <p>Borrow from ₱10,000 up to ₱500,000</p>
                    <div className="LL-card-accent"></div>
                </div>
                <div className="LL-offer-card">
                    <span className="LL-offer-icon">
                        <BsShieldCheck />
                    </span>
                    <h3>Low Interest Rate</h3>
                    <p>Competitive rates starting at 1.3% monthly</p>
                    <div className="LL-card-accent"></div>
                </div>
            </div>

            <div className="LL-description">
                <div className="LL-description-content">
                    <h2>What is Loyalty Loan?</h2>
                    <p>
                        This loan facility is exclusively offered to dedicated employees of the bank
                        who have completed ten (10) years of permanent service. It aims to provide
                        financial support as a reward for their loyalty and commitment.
                    </p>
                    <p>
                        !!!Note: This is only Applicable to Employees of Rural Bank of Cauayuan, INC
                    </p>
                </div>
            </div>

            <div className="LL-requirements-container">
                <div className="LL-requirements-item">
                    <div className="LL-requirements-list">
                        <h4>Requirements</h4>
                        <ul>
                            <li>Regular Employee of Rural Bank of Cauayan, INC</li>
                            <li>Worked in the Bank for 10+yrs</li>
                            <li>Valid government-issued ID</li>
                            <li>Latest proof of income</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="LL-apply-container">
                <div className="LL-apply-section">
                    <h3>Ready to Apply?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="LL-apply-button"
                        onClick={handletonavigate}
                    >Apply Now</button>
                </div>
                <button
                    className="LL-scroll-top"
                    onClick={scrolltoTop}
                >↑</button>
            </div>
            <Footer />
        </div>
    );
}

export default LoyaltyLoan;