import React, { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import "./NewsUpdate.css";

function NewsUpdate() {
    const [activeCategory, setActiveCategory] = useState("News");
    const [categories, setCategories] = useState([]);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedNews, setSelectedNews] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('./src/pages/NewsUpdatePage/NewsUpdate.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }
                const data = await response.json();
                
                // Parse and sort news by date in descending order (latest first)
                const sortedNews = data.news.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB - dateA;
                });

                setCategories(data.categories)
                setNews(sortedNews);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchNews();
    }, [])

    const filteredNews = news.filter(news => news.category === activeCategory);

    const openNewsModal = (newsItem) => {
        setSelectedNews(newsItem);
    };

    const closeNewsModal = () => {
        setSelectedNews(null);
    };

    useEffect(() => {
        const handleEscKey = (event) => {
            if (event.key === 'Escape' && selectedNews) {
                closeNewsModal();
            }
        };

        // Add event listener when a news item is selected
        if (selectedNews) {
            document.addEventListener('keydown', handleEscKey);
        }

        // Cleanup the event listener
        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [selectedNews]);

    if (loading) {
        return <div className='NU-loading'>Loading...</div>;
    }

    if (error) {
        return <div className='NU-error'>Error: {error}</div>;
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="News-Update">
            <Navbar />
            
            <div className="NU-container">
                <div className='NU-header-container'>
                    <div className='NU-header-content'>
                        <h1>News and Update</h1> 
                        <p>Stay Tuned with the latest updates</p> 
                    </div>
                </div>

                <div className='NU-categories-section'>
                    <div className='NU-content'>
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`NU-category-button ${activeCategory === category.id ? 'NU-category-button--active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='NU-news-details'>
                    {filteredNews.map(News => (
                        <div
                            key={News.id}
                            className='NU-news-card'
                            onClick={() => openNewsModal(News)}
                        >
                            <div className='NU-news-image-container'>
                                <img
                                    src={News.image}
                                    alt={News.title}
                                    className='NU-news-image'
                                />
                            </div>
                            <div className='NU-news-content'>
                                <h3 className='NU-news-title'>{News.title}</h3>
                                <p className='NU-news-description'>{News.description}</p>
                                <button className='NU-news-button'>Learn More →</button>
                                <p className='NU-news-date'>{News.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* News Details Modal */}
                {selectedNews && (
                    <div 
                        className="NU-modal-overlay"
                        onClick={closeNewsModal}
                    >
                        <div 
                            className="NU-modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                className="NU-modal-close"
                                onClick={closeNewsModal}
                            >
                                ×
                            </button>
                            <div className='NU-modal-image-container'>
                                <img
                                    src={selectedNews.image}
                                    alt={selectedNews.title}
                                    className='NU-modal-image'
                                />
                            </div>
                            <div className='NU-modal-text-content'>
                                <h2 className='NU-news-title'>{selectedNews.title}</h2>
                                <p className='NU-news-date'>{selectedNews.date}</p>
                                <p className='NU-news-description'>{selectedNews.fullDescription || selectedNews.description}</p>
                            </div>
                        </div>
                    </div>
                )}

            <button className='NU-scroll-top'
            onClick={scrollToTop}
            > ↑ </button>
            </div>
        </div>
    );
}

export default NewsUpdate;