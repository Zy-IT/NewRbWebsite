import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ScrollAnimation from '../../components/ScrollAnimation/ScrollAnimation';
import { ArrowRight, Shield, Landmark, CreditCard } from 'lucide-react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import HomeImage1 from '../../Assets/Home-Image.jpg';
import HomeImage2 from '../../Assets/Home-image2.png';
import HomeImage3 from '../../Assets/Home-image3.jpg';

function Home() {

    const images = [HomeImage1, HomeImage2, HomeImage3];

    const [currentImage, setCurrentImage] = useState(0);

    const changeBackground = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }

    useEffect(() => {
        const interval = setInterval(changeBackground, 10000);
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--current-background", `url(${images[currentImage]})`);
    }, [currentImage]);

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate("/A&U/ContactUs")
    }

    const handletoDepositProducts = () => {
        navigate("/P&S/DepositProducts")
    }

    const handletoLoanProducts = () => {
        navigate("/P&S/LoanProducts")
    }

    const handletoOtherServices = () => {
        navigate("/P&S/OtherServices");
    }

    const handletoAboutUs = () => {
        navigate("/A&U/CompanyProfile");
    }


    const scrolltoServices = () => {
        const services = document.querySelector('.features-section');
        if (services) {
            services.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const [selectedFeature, setSelectedFeature] = useState(0);

    return (
        <div className="Home">
            <Navbar />

            {/* Header Section*/}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Banking Made Simple</h1>
                    <h3>with Rural Bank of Cauayan, Inc</h3>
                    <p>Secure, reliable, and innovative financial solutions for your future</p>
                    <div className="hero-buttons">
                        <button className="primary-button"
                            onClick={scrolltoServices}>
                            Get Started 🡲
                        </button>
                    </div>
                </div>
            </section >

            {/* Features Section */}
            < section className="features-section" >
                <div className='feature-header'>
                    <h2>Products and Services</h2>
                    <p>Explore our range of products and services tailored to meet your banking needs.</p>
                </div>
                <div className="features-grid">
                    <ScrollAnimation delay={0}>
                        <div
                            className={`feature-card ${selectedFeature === 0 ? 'active' : ''}`}
                            onMouseEnter={() => setSelectedFeature(0)}
                        >
                            <div className="feature-icon"><Landmark className="w-6 h-6" /></div>
                            <h3>Deposit Products</h3>
                            <p>Unlock your financial potential with our range of deposit products, designed to help you save and grow your wealth effortlessly.</p>
                            <button className='feature-button'
                                onClick={handletoDepositProducts}
                            >Learn More</button>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.1}>
                        <div
                            className={`feature-card ${selectedFeature === 1 ? 'active' : ''}`}
                            onMouseEnter={() => setSelectedFeature(1)}
                        >
                            <div className="feature-icon"><Shield className="w-6 h-6" /></div>
                            <h3>Loan Products</h3>
                            <p>Make your dreams come true with our easy loan options, giving you the money you need to reach your goals!</p>
                            <button className='feature-button'
                                onClick={handletoLoanProducts}
                            >Learn More</button>
                        </div>
                    </ ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <div
                            className={`feature-card ${selectedFeature === 2 ? 'active' : ''}`}
                            onMouseEnter={() => setSelectedFeature(2)}
                        >
                            <div className="feature-icon"><CreditCard className="w-6 h-6" /></div>
                            <h3>Other Services</h3>
                            <p>Simplify your life with our range of services, designed to make everyday banking easy and convenient for you!</p>
                            <button className='feature-button'
                                onClick={handletoOtherServices}
                            >Learn More</button>
                        </div>
                    </ScrollAnimation>
                </div>
            </section >

            {/* Statistics Section */}
            < section className="stats-section" >
                <div className="stats-grid">
                    <div className="stat-card">
                        <p>Up to</p>
                        <h3>10M</h3>
                        <p>Loan </p>
                    </div>
                    <div className="stat-card">
                        <p>Up to</p>
                        <h3>50M</h3>
                        <p>Transactions</p>
                    </div>
                    <div className="stat-card">
                        <p>Over</p>
                        <h3>16</h3>
                        <p>Branches</p>
                    </div>
                    <div className="stat-card">
                        <p>Weekdays</p>
                        <h3>9:30AM-5:00PM</h3>
                        <p>Support</p>
                    </div>
                </div>
            </section >

            {/*About Us*/}
            <section className='About-section'>
                <div className='About-container'>
                    <div className='About-Content'>
                        <div className="about-header">
                            <h2>About Us</h2>
                            <div className="underline"></div>
                        </div>

                        <div className="about-grid">
                            <div className="about-card">
                                <div className="card-icon">
                                    <i className="fas fa-bullseye"></i>
                                </div>
                                <h3>Our Mission</h3>
                                <p>To deliver innovative solutions that empower businesses and individuals to achieve their full potential through cutting-edge technology and exceptional service.</p>
                            </div>

                            <div className="about-card">
                                <div className="card-icon">
                                    <i className="fas fa-eye"></i>
                                </div>
                                <h3>Our Vision</h3>
                                <p>To be the leading force in digital transformation, creating sustainable solutions that shape the future of technology and business.</p>
                            </div>
                        </div>

                        <div className="about-cta">
                            <button className="read-more-btn" onClick={handletoAboutUs}>
                                Read More
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/*News Section */}
            <section className='News-Section'>
                <div className='News-Container'>
                    <div className='News-Content'>

                    </div>
                </div>
            </section>

            {/* Contacts Sections*/}
            <section className="cta-section" >
                <div className="cta-content">
                    <h2>Reach out to Us?</h2>
                    <p> Contact us anytime anywhere</p>
                    <div className='cta-buttons'>
                        <button
                            className="cta-button1"
                            onClick={handletonavigate}
                        >Contact Us
                        </button>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
}

export default Home;