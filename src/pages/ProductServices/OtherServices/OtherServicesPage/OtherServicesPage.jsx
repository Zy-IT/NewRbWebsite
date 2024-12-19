import { useNavigate } from 'react-router-dom';
import Navbar from '../../../../components/Navbar/Navbar';
import servicesData from './OtherServicesPage.json';
import './OtherServicesPage.css';

function OtherServicesPage() {
    const navigate = useNavigate();

    const handleServiceClick = (route) => {
        navigate(route);
    };

    return (
        <div className="OSP-container">
            <Navbar />

            <div className="OSP-content">
                <div className='OSP-title-content'>
                    <h1 className="OSP-title">Other Services</h1>
                    <p className="OSP-title-description">Explore our range of additional services tailored to meet your needs</p>\
                </div>
                <div className="OSP-services-grid">
                    {servicesData.services.map((service) => (
                        <div
                            key={service.id}
                            className="OSP-service-card"
                            onClick={() => handleServiceClick(service.route)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    handleServiceClick(service.route);
                                }
                            }}
                        >
                            <div className="OSP-service-icon">{service.icon}</div>
                            <h2 className="OSP-service-title">{service.title}</h2>
                            <p className="OSP-service-description">
                                {service.description}
                            </p>
                            <button
                                className="OSP-service-button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleServiceClick(service.route);
                                }}
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OtherServicesPage;