import Navbar from "../../../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./BillsPayments.css";
import { BsSpeedometer, BsShieldCheck, BsCashStack } from 'react-icons/bs';


function BillsPayment() {
    const navigate = useNavigate();
    
    const handletonavigate = () => {
        navigate('/A&U/ContactUs');
    };

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
        <div className="Bills-Payment">
            <Navbar />

            <div className="BP-container">
                <div className="BP-header">
                    <h1 className="BP-title">Bills Payment</h1>
                    <p className="BP-subtitle">Your quick and reliable financial partner</p>
                    <button
                        className="BP-header-button"
                        onClick={scrolltodescription}
                    >Learn More
                    </button>
                </div>
            </div>

            <div className="BP-type-card">
                <div className="BP-offer-card">
                    <span className="BP-offer-icon">
                        <BsSpeedometer />
                    </span>
                    <h3>Fast Approval</h3>
                    <p>Get approved within 24 hours with minimal requirements</p>
                    <div className="BP-card-accent"></div>
                </div>
                <div className="BP-offer-card">
                    <span className="BP-offer-icon">
                        <BsCashStack />
                    </span>
                    <h3>Flexible Amount</h3>
                    <p>Borrow from ₱10,000 up to ₱500,000</p>
                    <div className="BP-card-accent"></div>
                </div>
                <div className="BP-offer-card">
                    <span className="BP-offer-icon">
                        <BsShieldCheck />
                    </span>
                    <h3>Low Interest Rate</h3>
                    <p>Competitive rates starting at 1.3% monthly</p>
                    <div className="BP-card-accent"></div>
                </div>
            </div>

            <div className="BP-description">
                <div className="BP-description-content">
                    <h2>Why Choose Bills Payment?</h2>
                    <p>Get the financial boost you need with our hassle-free loan service.
                        Perfect for emergency expenses, business needs, or personal goals.</p>
                </div>
            </div>

            <div className="BP-requirements-container">
                <div className="BP-requirements-item">
                    <div className="BP-requirements-list">
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

            <div className="BP-apply-container">
                <div className="BP-apply-section">
                    <h3>Visit our Branch?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="BP-apply-button"
                        onClick={handletonavigate}
                    >Find Nearest Branch</button>
                </div>
                <button
                    className="BP-scroll-top"
                    onClick={scrolltotop}
                >↑</button>
            </div>
        </div>
    );
}

export default BillsPayment;
