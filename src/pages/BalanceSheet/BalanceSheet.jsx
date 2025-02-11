import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import balanceSheets from "../BalanceSheet/BalanceSheet.json";
import "./BalanceSheet.css";

function BalanceSheet() {
    const [selectedReport, setSelectedReport] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isLoaded] = useState(false);

    const sortedReports = [...balanceSheets.balancesheets].sort((a, b) => b.id - a.id);

    const handleReportSelect = (balancesheets) => {
        setSelectedReport(balancesheets);
        setIsLoading(true);
        setIsTransitioning(true);

        setTimeout(() => {
            setIsTransitioning(false);
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }, 10000);
    };

    return (
        <div className="Balance-Sheet-container">
            <Navbar />
            <div className="BS-header">
                <div className="BS-header-content">
                    <h1 className="BS-header-title">Balance Sheets</h1>
                </div>
            </div>

            <div className="BS-main-content">
                {!selectedReport ? (
                    <div className="BS-grid">
                        {sortedReports.map((balancesheets) => (
                            <div
                                key={balancesheets.id}
                                className={`BS-card ${isLoaded ? 'animate' : ''}`}
                                onClick={() => handleReportSelect(balancesheets)}
                            >
                                <div className="card-media-container">
                                    <video
                                        className="card-video"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src={balancesheets.videoUrl} type="video/mp4" />
                                    </video>
                                    <div className="card-overlay">
                                        <div className="card-content">
                                            <div className="card-header">
                                                <span className="year-badge">{}</span>
                                                <h3>{}</h3>
                                            </div>
                                            <div className="card-actions">
                                                <button className="view-BS-btn">
                                                    View
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="Report-document-container">
                        {isLoading && (
                            <div className={`loading-overlay ${!isTransitioning ? 'fade-out' : ''}`}>
                                <div className="loading-spinner"></div>
                                <p>Loading Balance Sheet {selectedReport.year}...</p>
                            </div>
                        )}
                        <div className="BS-viewer-header">
                            <button
                                className="back-button"
                                onClick={() => setSelectedReport(null)}
                            >
                                ← Back to Reports
                            </button>
                            <h2>{selectedReport.title}</h2>
                        </div>
                        <iframe
                            src={`${selectedReport.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                            width="100%"
                            height="800px"
                            className={`pdf-viewer ${!isLoading ? 'fade-in' : ''}`}
                            title={`Balance Sheet ${selectedReport.year}`}
                        >
                            <p>Your browser does not support PDFs. Please try a different browser.</p>
                        </iframe>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default BalanceSheet;