// FundTransfer.jsx
import Navbar from "../../../../components/Navbar/Navbar";
import { useNavigate } from 'react-router-dom';
import './FundTransfer.css';
import { BsSpeedometer, BsShieldCheck, BsCashStack } from 'react-icons/bs';

function FundTransfer() {
    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    };

    
    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.FT-offer-icon');
        if (descriptionElement) {
            descriptionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="Fund-Transfer">
            <Navbar />

            <div className="FT-container">
                <div className="FT-header">
                    <h1 className="FT-title">Fund Transfer</h1>
                    <p className="FT-subtitle">Your quick and reliable financial partner</p>
                    <button
                        className="FT-header-button"
                        onClick={scrolltodescription}
                    >Learn More
                    </button>
                </div>
            </div>

            <div className="FT-type-card">
                <div className="FT-offer-card">
                    <span className="FT-offer-icon">
                        <BsSpeedometer />
                    </span>
                    <h3>Fast Approval</h3>
                    <p>Get approved within 24 hours with minimal requirements</p>
                    <div className="FT-card-accent"></div>
                </div>
                <div className="FT-offer-card">
                    <span className="FT-offer-icon">
                        <BsCashStack />
                    </span>
                    <h3>Flexible Amount</h3>
                    <p>Borrow from ₱10,000 up to ₱500,000</p>
                    <div className="FT-card-accent"></div>
                </div>
                <div className="FT-offer-card">
                    <span className="FT-offer-icon">
                        <BsShieldCheck />
                    </span>
                    <h3>Low Interest Rate</h3>
                    <p>Competitive rates starting at 1.3% monthly</p>
                    <div className="FT-card-accent"></div>
                </div>
            </div>

            <div className="FT-description">
                <div className="FT-description-content">
                    <h2>Why Choose Fund Transfer?</h2>
                    <p>Get the financial boost you need with our hassle-free loan service.
                        Perfect for emergency expenses, business needs, or personal goals.</p>
                </div>
            </div>

            <div className="FT-requirements-container">
                <div className="FT-requirements-item">
                    <div className="FT-requirements-list">
                        <h4>Simple Requirements</h4>
                        <ul>
                            <li>Filipino Citizen, 21-65 years old</li>
                            <li>Minimum gross monthly income of ₱20,000</li>
                            <li>Valid government-issued ID</li>
                            <li>Latest proof of income</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="FT-apply-container">
                <div className="FT-apply-section">
                    <h3>Visit our Branch?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="FT-apply-button"
                        onClick={handletonavigate}
                    >Find Nearest Branch</button>
                </div>
                <button
                    className="FT-scroll-top"
                    onClick={scrolltotop}
                >↑</button>
            </div>
        </div>
    );
}

export default FundTransfer;
