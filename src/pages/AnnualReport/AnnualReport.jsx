import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';    
import './AnnualReport.css';

const AnnualReport = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [documentUrl] = useState(null);

    // Simulate document loading
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 10000); //15 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="annual-report-container">
            <Navbar />
            {/* Header */}
            <div className="Report-header">
                <div className="Report-header-content">
                    <h1 className="Report-header-title">Annual Report</h1>
                </div>
            </div>

            {/* Main content area */}
            <div className="Report-main-content">
                <div className="Report-document-container">
                    {isLoading ? (
                        // Loading state
                        <div className="Report-loading-container">
                            <Loader2 className="Report-loading-spinner" />
                            <p className="Report-loading-text">Loading annual report...</p>
                        </div>
                    ) : documentUrl ? (
                        // Document viewer
                        <div className="Report-document-viewer">
                            <p className="Report-document-message">
                                Document viewer would go here - you'll need to implement the actual
                                document viewing component based on your requirements (PDF.js, Word viewer, etc.)
                            </p>
                        </div>
                    ) : (
                        // No document state
                        <div className="loading-container">
                            <p className="loading-text">No document loaded</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AnnualReport;