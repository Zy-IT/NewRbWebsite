import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import './MoneyShopLoan.css';

function MoneyShopLoan() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/P&S/ContactUs');
    }

    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.MSL-offer-icon');
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
        <div className="Money-Shop-Loan">
            <Navbar />

            <div className="MSL-container">

                <div className="MSL-header-container">
                    <div className="MSL-header">
                        <h1 className="MSL-title">Money Shop Loan</h1>
                        <p className="MSL-subtitle">Context to be inputed</p>
                        <button className="MSL-header-button"
                            onClick={scrolltodescription}
                        >Learn More</button>
                    </div>
                </div>

                <div className="MSL-offers">
                    <div className="MSL-offer-card">
                        <span className="MSL-offer-icon">ICON</span>
                        <h3>Title here</h3>
                        <p>Input context here</p>
                    </div>
                    <div className="MSL-offer-card">
                        <span className="MSL-offer-icon">ICON</span>
                        <h3>Title here</h3>
                        <p>Input context here</p>
                    </div>
                    <div className="MSL-offer-card">
                        <span className="MSL-offer-icon">ICON</span>
                        <h3>Title here</h3>
                        <p>Input context here</p>
                    </div>
                </div>

                <div className="MSL-description-container">
                    <div className="MSL-description-content">
                        <div className="MSL-description">
                            <h2>What is Money Shop Loan</h2>
                            <p>context here pls</p>
                        </div>
                    </div>
                </div>

                <div className="MSL-appply-container">
                    <div className="MSL-apply-section">
                        <h3>Want to Apply?</h3>
                        <p>Process youre request here</p>
                        <button
                            className="MSL-apply-button"
                            onClick={handletonavigate}
                        >Apply Now </button>
                    </div>
                </div>
                <button className="MSL-scroll-top"
                    onClick={scrolltotop}
                > ↑ </button>
            </div>
        </div>
    );
}

export default MoneyShopLoan;