import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './SalaryLoan.css';
import { BsSpeedometer, BsShieldCheck, BsCashStack } from 'react-icons/bs';

function SalaryLoan() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltodescription = () => {
        const details = document.querySelector('.SLL-description');
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
        <div className="Salary-Loan">
            <Navbar />

            <div className="SLL-container">
                <div className="SLL-header">
                    <h1 className="SLL-title">Salary Loan</h1>
                    <p className="SLL-subtitle">Your quick and reliable financial partner</p>
                    <button
                        className="SLL-header-button"
                        onClick={scrolltodescription}
                    >Learn More
                    </button>
                </div>
            </div>

            <div className="SLL-type-card">
                <div className="SLL-offer-card">
                    <span className="SLL-offer-icon">
                        <BsSpeedometer />
                    </span>
                    <h3>Fast Approval</h3>
                    <p>Get approved within 24 hours with minimal requirements</p>
                    <div className="SLL-card-accent"></div>
                </div>
                <div className="SLL-offer-card">
                    <span className="SLL-offer-icon">
                        <BsCashStack />
                    </span>
                    <h3>Flexible Amount</h3>
                    <p>Borrow from ₱10,000 up to ₱500,000</p>
                    <div className="SLL-card-accent"></div>
                </div>
                <div className="SLL-offer-card">
                    <span className="SLL-offer-icon">
                        <BsShieldCheck />
                    </span>
                    <h3>Low Interest Rate</h3>
                    <p>Competitive rates starting at 1.3% monthly</p>
                    <div className="SLL-card-accent"></div>
                </div>
            </div>

            <div className="SLL-description">
                <div className="SLL-description-content">
                    <h2>What is Salary Loan?</h2>
                    <p>
                        A loan facility designed to support the financial needs of
                        salaried individuals with stable employment. This program is
                        secured through a Memorandum of Agreement between RB Cauayan and the applicant&apos;s employer.
                    </p>
                    <p className="SLL Special Note">
                        !!!Note: This is only Applicable to Employees of Rural Bank of Cauayuan, INC 
                    </p>
                </div>
            </div>

            <div className="SLL-requirements-container">
                <div className="SLL-requirements-item">
                    <div className="SLL-requirements-list">
                        <h4>Requirements</h4>
                        <ul>
                            <li>Regular Employee of Rural Bank of Cauayan, INC</li>
                            <li>Already Finished the Provisionary Period</li>
                            <li>Valid government-issued ID</li>
                            <li>Latest proof of income</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="SLL-apply-container">
                <div className="SLL-apply-section">
                    <h3>Ready to Apply?</h3>
                    <p>Get the funds you need in as fast as 24 hours</p>
                    <button
                        className="SLL-apply-button"
                        onClick={handletonavigate}
                    >Apply Now</button>
                </div>
                <button
                    className="SLL-scroll-top"
                    onClick={scrolltoTop}
                >↑</button>
            </div>
            <Footer />
        </div>
    );
}

export default SalaryLoan;