import { useNavigate } from 'react-router-dom';
import Navbar from "../../../../components/Navbar/Navbar";
import './InterBranch.css';
import { BsSpeedometer, BsShieldCheck, BsCashStack } from 'react-icons/bs';

function InterBranchDeposit() {
    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/A&U/ContactUs');
    }

    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.IBD-offer-icon');
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
        <div className="Inter-Branch-Deposit">
            <Navbar />

            <div className="IBD-container">
                <div className="IBD-header">
                    <h1 className="IBD-title">Inter Branch Deposit</h1>
                    <p className="IBD-subtitle">Your quick and reliable financial partner</p>
                    <button
                        className="IBD-header-button"
                        onClick={scrolltodescription}
                    >Learn More
                    </button>
                </div>
            </div>

            <div className="IBD-type-card">
                <div className="IBD-offer-card">
                    <span className="IBD-offer-icon">
                        <BsSpeedometer />
                    </span>
                    <h3>Fast Approval</h3>
                    <p>Get approved within 24 hours with minimal requirements</p>
                    <div className="IBD-card-accent"></div>
                </div>
                <div className="IBD-offer-card">
                    <span className="IBD-offer-icon">
                        <BsCashStack />
                    </span>
                    <h3>Flexible Amount</h3>
                    <p>Borrow from ₱10,000 up to ₱500,000</p>
                    <div className="IBD-card-accent"></div>
                </div>
                <div className="IBD-offer-card">
                    <span className="IBD-offer-icon">
                        <BsShieldCheck />
                    </span>
                    <h3>Low Interest Rate</h3>
                    <p>Competitive rates starting at 1.3% monthly</p>
                    <div className="IBD-card-accent"></div>
                </div>
            </div>

            <div className="IBD-description">
                <div className="IBD-description-content">
                    <h2>Why Choose Inter-Branch Deposit?</h2>
                    <p>Get the financial boost you need with our hassle-free loan service.
                        Perfect for emergency expenses, business needs, or personal goals.</p>
                </div>
            </div>

            <div className="IBD-requirements-container">
                <div className="IBD-requirements-item">
                    <div className="IBD-requirements-list">
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

            <div className="IBD-apply-container">
                <div className="IBD-apply-section">
                    <h3>Visit our Branch?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="IBD-apply-button"
                        onClick={handletonavigate}
                    >Find Nearest Branch</button>
                </div>
                <button
                    className="IBD-scroll-top"
                    onClick={scrolltotop}
                >↑</button>
            </div>
        </div>
    );
}

export default InterBranchDeposit;
