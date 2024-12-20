import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import './MobilePOSAtm.css';
import { BsSpeedometer, BsShieldCheck, BsCashStack } from 'react-icons/bs';


function MobilePOSAtm() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/A&U/ContactUs');
    }

    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.MP-offer-icon');
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
        <div className="Mobile-POSATM">
            <Navbar />

            <div className="MP-container">
                <div className="MP-header">
                    <h1 className="MP-title">Mobile/POS ATM</h1>
                    <p className="MP-subtitle">Your quick and reliable financial partner</p>
                    <button
                        className="MP-header-button"
                        onClick={scrolltodescription}
                    >Learn More
                    </button>
                </div>
            </div>

            <div className="MP-type-card">
                <div className="MP-offer-card">
                    <span className="MP-offer-icon">
                        <BsSpeedometer />
                    </span>
                    <h3>Fast Approval</h3>
                    <p>Get approved within 24 hours with minimal requirements</p>
                    <div className="MP-card-accent"></div>
                </div>
                <div className="MP-offer-card">
                    <span className="MP-offer-icon">
                        <BsCashStack />
                    </span>
                    <h3>Flexible Amount</h3>
                    <p>Borrow from ₱10,000 up to ₱500,000</p>
                    <div className="MP-card-accent"></div>
                </div>
                <div className="MP-offer-card">
                    <span className="MP-offer-icon">
                        <BsShieldCheck />
                    </span>
                    <h3>Low Interest Rate</h3>
                    <p>Competitive rates starting at 1.3% monthly</p>
                    <div className="MP-card-accent"></div>
                </div>
            </div>

            <div className="MP-description">
                <div className="MP-description-content">
                    <h2>Why Choose Mobile/POS ATM?</h2>
                    <p>Get the financial boost you need with our hassle-free loan service.
                        Perfect for emergency expenses, business needs, or personal goals.</p>
                </div>
            </div>

            <div className="MP-requirements-container">
                <div className="MP-requirements-item">
                    <div className="MP-requirements-list">
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

            <div className="MP-apply-container">
                <div className="MP-apply-section">
                    <h3>Visit our Branch?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="MP-apply-button"
                        onClick={handletonavigate}
                    >Find Nearest Branch</button>
                </div>
                <button
                    className="MP-scroll-top"
                    onClick={scrolltotop}
                >↑</button>
            </div>
            <Footer />
        </div>
    );
}

export default MobilePOSAtm;
