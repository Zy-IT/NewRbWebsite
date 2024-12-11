import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import "./LoanProductsPage.css";

function LoanProductsPage() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("Agricultural");
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/src/pages/ProductServices/LoanProducts/LoanProductsPage/LoanProductsPage.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCategories(data.categories);
                setProducts(data.loanProducts);
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
        return <div className="LP-loading">Loading...</div>;
    }

    if (error) {
        return <div className="LP-error">Error: {error}</div>;
    }

    return (
        <div className="LP">
            <Navbar />


            <div className="LP__container">

                <div className="LP-header">
                    <h1 className="LP__main-title">Loan Products</h1>
                </div>

                {/*Category Mapping via under the Title*/}
                <div className="LP__categories">

                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`LP__category-button ${activeCategory === category.id ? 'LP__category-button--active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="LP__grid">
                    {filteredProducts.map(product => (
                        <div
                            key={product.id}
                            className="LP__card"
                            onClick={() => navigate(product.route)}
                        >
                            <div className="LP__card-image-container">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="LP__card-image"
                                />
                            </div>
                            <div className="LP__card-content">
                                <h3 className="LP__card-title">{product.title}</h3>
                                <p className="LP__card-description">{product.description}</p>
                                <button className="LP__card-button">Learn More →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LoanProductsPage;
