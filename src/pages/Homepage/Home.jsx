import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { ArrowRight, Shield, Landmark, CreditCard } from 'lucide-react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const handletonavigate = () => {
        navigate("/A&U/ContactUs")
    }

    
    const scrolltoServices = () => {
        const services = document.querySelector('.features-section');
        if (services) {
            services.scrollIntoView({ behavior: 'smooth' });
        }
    }



    const [selectedFeature, setSelectedFeature] = useState(0);

    const features = [
        {
            title: "Deposit Products",
            description: "Unlock your financial potential with our range of deposit products, designed to help you save and grow your wealth effortlessly.",
            icon: <Landmark className="w-6 h-6" />
        },
        {
            title: "Loan Products",
            description: "Make your dreams come true with our easy loan options, giving you the money you need to reach your goals!",
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "Other Services",
            description: "Simplify your life with our range of services, designed to make everyday banking easy and convenient for you!",
            icon: <CreditCard className="w-6 h-6" />
        }
    ];

    return (
        <div className="Home">
            <Navbar />

            {/* Header Section*/}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Banking Made Simple</h1>
                    <p>Secure, reliable, and innovative financial solutions for your future</p>
                    <div className="hero-buttons">
                        <button className="primary-button"
                            onClick={scrolltoServices}>
                            Get Started
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2>Why Choose Us</h2>
                <h2>Products and Services that we offer:</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card ${selectedFeature === index ? 'active' : ''}`}
                            onMouseEnter={() => setSelectedFeature(index)}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Statistics Section */}
            <section className="stats-section">
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
            </section>

            {/* Contacts Sections*/}
            <section className="cta-section">
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
            </section>

            <Footer />
        </div>
    );
}

export default Home;