import { useNavigate } from 'react-router-dom';
import Navbar from "../../../../../components/Navbar/Navbar";
import Footer from "../../../../../components/Footer/Footer";
import './KaAsensoLoan.css';

function KaAsensoLoan() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate('/T&C');
    }

    const scrolltodescription = () => {
        const descriptionElement = document.querySelector('.KAL-offer-icon');
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
        <div className="Ka-Asenso-Loan">
            <Navbar />

            <div className="KAL-container">
                <div className='KAL-header-container'>
                    <div className='KAL-header'>
                        <h1 className='KAL-title'>Ka-Asenso Loan</h1>
                        <p className='KAL-subtitle'>NOTICE: Put a subtitle in this content</p>
                        <button className='KAL-header-button'
                            onClick={scrolltodescription}>Learn More</button>
                    </div>
                </div>

                <div className='KAL-offers-container'>
                    <div className='KAL-offers'>
                        <div className='KAL-offer-card'>
                            <span className='KAL-offer-icon'>...</span>
                            <h3>Title Here</h3>
                            <p>Kindly input context here</p>
                        </div>
                        <div className='KAL-offer-card'>
                            <span className='KAL-offer-icon'>...</span>
                            <h3>Title Here</h3>
                            <p>Kindly input context here</p>
                        </div>
                        <div className='KAL-offer-card'>
                            <span className='KAL-offer-icon'>...</span>
                            <h3>Title Here</h3>
                            <p>Kindly input context here</p>
                        </div>
                    </div>
                </div>

                <div className='KAL-description-container'>
                    <div className='KAL-description-content'>
                        <div className='KAL-description'>
                            <h2>What is Ka-Asenso Loan?</h2>
                            <p>kindly input the description for udpates</p>
                        </div>
                    </div>
                </div>

                <div className='KAL-apply-container'>
                    <div className='KAL-apply-section'>
                        <h3>Want to Apply?</h3>
                        <p>implement context here for better design and context</p>
                        <button
                            className='KAL-apply-button'
                            onClick={handletonavigate}
                        >Apply Now</button>
                    </div>
                </div>
                <button className='KAL-scroll-top'
                    onClick={scrolltotop}
                > ↑ </button>
            </div>
            <Footer />
        </div>
    );
}

export default KaAsensoLoan;