import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import './NegoAsensoLoan.css';

function NegoAsensoLoan() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltoDescription = () => {
        const descriptionElement = document.querySelector('.NAL-offer-icon');
        if (descriptionElement) {
            descriptionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="Nego-Asenso-Loan">
            <Navbar />

            <div className="NAL-container">
                <div className="NAL-header-container">
                    <div className="NAL-header">
                        <h1 className="NAL-title">Nego-Asenso Loan</h1>
                        <p className="NAL-subtitle">NOTICE: Put a subtitle in this content</p>
                        <button className="NAL-header-button"
                            onClick={scrolltoDescription}
                        >Learn More</button>
                    </div>
                </div>

                <div className="NAL-offers-container">
                <div className="NAL-offers">
                    <div className="NAL-offer-card">
                        <span className="NAL-offer-icon">...</span>
                        <h3>Title Here</h3>
                        <p>Kindly input context here</p>
                    </div>
                    <div className="NAL-offer-card">
                        <span className="NAL-offer-icon">...</span>
                        <h3>Title Here</h3>
                        <p>Kindly input context here</p>
                    </div>
                    <div className="NAL-offer-card">
                        <span className="NAL-offer-icon">...</span>
                        <h3>Title Here</h3>
                        <p>Kindly input context here</p>
                    </div>
                </div>
                </div>

                <div className="NAL-description-container">
                    <div className="NAL-description-content">
                        <div className="NAL-description" >
                            <h2>Nego-Asenso Loan</h2>
                            <p>
                            Kindly input here the context that are needed for the information that is needed.

                            </p>
                        </div>
                    </div>
                </div>

                <div className="NAL-apply-container" >
                    <div className="NAL-apply-section">
                        <h3>Want to Apply?</h3>
                        <p>implement context here for better design and context</p>
                        <button
                            className="NAL-apply-button"
                            onClick={handletonavigate}
                        >Apply Now</button>
                    </div>

                </div>
                <button className="NAL-scroll-top"
                    onClick={scrollToTop}
                >↑</button>
            </div>
        </div>
    );
}

export default NegoAsensoLoan;