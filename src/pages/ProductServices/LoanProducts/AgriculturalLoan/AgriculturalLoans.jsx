import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import "./AgriculturalLoans.css";

function AgriculturalLoans () {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("Agricultural");
    const [categories, setCategories] = useState([]);
    const [loanProducts, setloanProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/src/pages/ProductServices/LoanProducts/AgriculturalLoan/AgriculturalLoans.json');
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
        <div className="AL-personal-loans">
            <Navbar />
            
            <div className="AL-container">
                <div className="AL-header">
                    <h1 className="AL-title">Agricultural Loans</h1>
                    <p className="AL-subtitle">Time to make a change</p>
                </div>

                {/*Category Mapping via under the Title*/}
                <div className="AL__categories">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`AL__category-button ${activeCategory === category.id ? 'AL__category-button--active' : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>


                <div className="AL-loan-types">
                    {filteredProducts.map(loan => (
                        <div 
                            key={loan.id} 
                            className="AL-loan-card"
                            onClick={() => handleLoanCardClick(loan.route)}
                        >
                            <div className="AL-loan-icon">{loan.icon}</div>
                            <h3>{loan.title}</h3>
                            <p>{loan.description}</p>
                            <button 
                                className="AL-learn-more"
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

export default AgriculturalLoans;