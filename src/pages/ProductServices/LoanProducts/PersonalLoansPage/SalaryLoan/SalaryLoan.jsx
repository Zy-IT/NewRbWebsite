import { useNavigate } from "react-router-dom";
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './SalaryLoan.css';


function SalaryLoan() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltodescription = () => {
        const details = document.querySelector('.SLL-description-container');
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

            <section className="SLL-section">
                {/*header part*/}
                <div className="SLL-header-container">
                    <div className="SLL-header">
                        <h1 className="SLL-title">Salary Loan</h1>
                        <p className="SLL-subtitle">Your quick and reliable financial partner</p>
                        <button
                            className="SLL-header-button"
                            onClick={scrolltodescription}
                        >Learn More</button>
                    </div>
                </div>
                {/*features part*/}
                <div className="SLL-features">
                    <div className="SLL-features-card">
                        <span className="SLL-featuers-icon">ICON</span>
                        <h3>Title Content</h3>
                        <p>Subcontext here </p>
                    </div>
                    <div className="SLL-features-card">
                        <span className="SLL-featuers-icon">ICON</span>
                        <h3>Title Content</h3>
                        <p>Subcontext here </p>
                    </div>
                    <div className="SLL-features-card">
                        <span className="SLL-featuers-icon">ICON</span>
                        <h3>Title Content</h3>
                        <p>Subcontext here </p>
                    </div>
                </div>

                {/*description part*/}
                <div className="SLL-description-container">
                    <div className="SLL-description-content">
                        <h2>Why Choose Salary Loan?</h2>
                        <p>Kindly put the description here for defenition</p>
                    </div>
                </div>

                {/*Requirements part*/}
                <div className="SLL-requirements-container">
                    <div className="SLL-requirements-content">
                        <h4>List Title</h4>
                        <ul>
                            <li>Requirement 1</li>
                            <li>Requirement 2</li>
                            <li>Requirement 3</li>
                        </ul>
                    </div>
                </div>
                
                {/*Apply Now part*/}
                <div className="SLL-apply-container">
                    <div className="SLL-apply-content">
                        <h3>Want to Avail?</h3>
                        <p>subtitle for defenition</p>
                        <button className="SLL-apply-button"
                            onClick={handletonavigate}
                        >Apply Now</button>
                    </div>
                    <button className="SLL-scroll-top"
                        onClick={scrolltoTop}
                    > ↑ </button>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default SalaryLoan;