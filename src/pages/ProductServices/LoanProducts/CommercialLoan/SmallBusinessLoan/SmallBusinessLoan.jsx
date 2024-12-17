import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import './SmallBusinessLoan.css';

function SmallBusinessLoan() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.SBL-offer-icon');
        if (descriptionElement) {
            descriptionElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrolltotop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="Small-Business-Loan">
            <Navbar />

            <div className="SBL-container">

                <div className="SBL-header-container">
                    <div className="SBL-header">
                        <h1 className="SBL-title">Small Business Loan</h1>
                        <p className="SBL-subtitle">NOTICE: Put a subtitle in this content</p>
                        <button className="SBL-header-button"
                            onClick={scrolltodescription}
                        >Learn More</button>
                    </div>
                </div>

                <div className="SBL-offers">
                    <div className="SBL-offer-card">
                        <span className="SBL-offer-icon">...</span>
                        <h3>Title Here</h3>
                        <p>Kindly input context here</p>
                    </div>
                    <div className="SBL-offer-card">
                        <span className="SBL-offer-icon">...</span>
                        <h3>Title Here</h3>
                        <p>Kindly input context here</p>
                    </div>
                    <div className="SBL-offer-card">
                        <span className="SBL-offer-icon">...</span>
                        <h3>Title Here</h3>
                        <p>Kindly input context here</p>
                    </div>
                </div>

                <div className="SBL-description-container">
                    <div className="SBL-description-content">
                        <div className="SBL-description">
                            <h2>What is Small Business Loan</h2>
                            <p>kindly input the description for udpates</p>
                        </div>
                    </div>
                </div>

                <div className="SBL-apply-container">
                    <div className="SBL-apply-section">
                        <h3>Want to Apply?</h3>
                        <p>implement context here for better design and context</p>
                        <button
                            className="SBL-apply-button"
                            onClick={handletonavigate}
                        >Apply</button>
                    </div>
                </div>
                <button className="SBL-scroll-top"
                onClick={scrolltotop}
                >↑</button>
            </div>
        </div>
    );
}

export default SmallBusinessLoan;