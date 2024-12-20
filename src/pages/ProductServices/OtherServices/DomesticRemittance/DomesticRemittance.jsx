import { useNavigate } from 'react-router-dom';
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import './DomesticRemittance.css';
import { BsSpeedometer, BsShieldCheck, BsCashStack } from 'react-icons/bs';


function DomesticRemittance() {
    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/A&U/ContactUs');
    }

    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.DR-offer-icon');
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
        <div className="Domestic-Remittance">
            <Navbar />

            <div className="DR-container">
                <div className="DR-header">
                    <h1 className="DR-title">Domestic Remittance</h1>
                    <p className="DR-subtitle">Your quick and reliable financial partner</p>
                    <button
                        className="DR-header-button"
                        onClick={scrolltodescription}
                    >Learn More
                    </button>
                </div>
            </div>

            <div className="DR-type-card">
                <div className="DR-offer-card">
                    <span className="DR-offer-icon">
                        <BsSpeedometer />
                    </span>
                    <h3>Fast Approval</h3>
                    <p>Get approved within 24 hours with minimal requirements</p>
                    <div className="DR-card-accent"></div>
                </div>
                <div className="DR-offer-card">
                    <span className="DR-offer-icon">
                        <BsCashStack />
                    </span>
                    <h3>Flexible Amount</h3>
                    <p>Borrow from ₱10,000 up to ₱500,000</p>
                    <div className="DR-card-accent"></div>
                </div>
                <div className="DR-offer-card">
                    <span className="DR-offer-icon">
                        <BsShieldCheck />
                    </span>
                    <h3>Low Interest Rate</h3>
                    <p>Competitive rates starting at 1.3% monthly</p>
                    <div className="DR-card-accent"></div>
                </div>
            </div>

            <div className="DR-description">
                <div className="DR-description-content">
                    <h2>Why Choose Domestic Remittance?</h2>
                    <p>Get the financial boost you need with our hassle-free loan service.
                        Perfect for emergency expenses, business needs, or personal goals.</p>
                </div>
            </div>

            <div className="DR-requirements-container">
                <div className="DR-requirements-item">
                    <div className="DR-requirements-list">
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

            <div className="DR-apply-container">
                <div className="DR-apply-section">
                    <h3>Visit our Branch?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="DR-apply-button"
                        onClick={handletonavigate}
                    >Find Nearest Branch</button>
                </div>
                <button
                    className="DR-scroll-top"
                    onClick={scrolltotop}
                >↑</button>
            </div>
            <Footer />
        </div>
    );
}

export default DomesticRemittance;
