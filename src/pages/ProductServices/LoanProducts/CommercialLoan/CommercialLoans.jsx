import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import "./CommercialLoans.css";

function CommercialLoans () {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("Commercial");
    const [categories, setCategories] = useState([]);
    const [loanProducts, setloanProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/src/pages/ProductServices/LoanProducts/CommercialLoan/CommercialLoans.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCategories(data.categories);
                setloanProducts(data.loanProducts);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredProducts = loanProducts.filter(product => product.category === activeCategory);

    const handleLoanCardClick = (route) => {
        navigate(route);
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    const handleCategoryClick = (category) => {
        switch(category) {
            case "Agricultural":
                navigate("/loan/AgriculturalLoans");
                break;
            case "Commercial":
                navigate("/loan/CommercialLoans");
                break;
            case "Personal":
                navigate("/loan/PersonalLoans");
                break;
            default:
                break;
        }
    };

    return (
        <div className="CL-personal-loans">
            <Navbar />
            
            <div className="CL-container">
                <div className="CL-header">
                    <h1 className="CL-title">Commerial Loans</h1>
                    <p className="CL-subtitle">Context needed here</p>
                </div>

                {/*Category Mapping via under the Title*/}
                <div className="CL__categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`CL__category-button ${activeCategory === category.id ? 'CL__category-button--active' : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>


                <div className="CL-loan-types">
                    {filteredProducts.map(loan => (
                        <div 
                            key={loan.id} 
                            className="CL-loan-card"
                            onClick={() => handleLoanCardClick(loan.route)}
                        >
                            <div className="CL-loan-icon">{loan.icon}</div>
                            <h3>{loan.title}</h3>
                            <p>{loan.description}</p>
                            <button 
                                className="CL-learn-more"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleLoanCardClick(loan.route);
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

export default CommercialLoans;