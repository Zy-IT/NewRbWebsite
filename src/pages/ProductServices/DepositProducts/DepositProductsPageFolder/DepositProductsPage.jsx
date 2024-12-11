import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./DepositProductsPage.css";

function DepositProductsPage() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("Deposit"); 
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/src/pages/ProductServices/DepositProducts/DepositProductsPageFolder/DepositProductPage.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCategories(data.categories);
                setProducts(data.depositProducts); 
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredProducts = products.filter(product => product.category === activeCategory);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    const handleProductClick = (route) => {
        navigate(route);
    };

    return (
        <div className="deposit-page">
            <div className="deposit-header">
                <h1>Deposit Products</h1>
                <p>Secure your future with our comprehensive range of deposit solutions</p>
            </div>

            {/* Category Filter Buttons */}
            <div className="deposit-categories">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            <div className="deposit-grid">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="product-card"
                        onClick={() => handleProductClick(product.route)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                handleProductClick(product.route);
                            }
                        }}
                    >
                        <div className="product-icon">{product.icon}</div>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <div className="features-list">
                            <h3>Key Features</h3>
                            <ul>
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <button 
                            className="learn-more-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleProductClick(product.route);
                            }}
                        >
                            Learn More
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DepositProductsPage;