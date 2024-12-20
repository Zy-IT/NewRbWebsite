import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import "./BasicSavingsAccount.css";

function BasicSavingsAccount() {

  const navigate = useNavigate();

  const handletonavigate = () => {
    navigate('/T&C');
  }


  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="BSA-container">
      <Navbar />

      <div className="BSA-hero">
        <div className="BSA-hero-content">
          <h1>Basic Savings Account</h1>
          <p>Start your savings journey with our simple and secure account</p>
        </div>
      </div>

      <div className="BSA-wrapper">
        <section className="BSA-features">
          <h2>Account Features</h2>
          <div className="BSA-features-grid">
            <div className="BSA-feature-card">
              <div className="BSA-feature-icon">💰</div>
              <h3>Competitive Interest Rates</h3>
              <p>Earn more with our attractive interest rates</p>
            </div>
            <div className="BSA-feature-card">
              <div className="BSA-feature-icon">💵</div>
              <h3>Zero Minimum Balance</h3>
              <p>Start saving with any amount you're comfortable with</p>
            </div>
            <div className="BSA-feature-card">
              <div className="BSA-feature-icon">📱</div>
              <h3>Digital Banking</h3>
              <p>24/7 access to your account through our mobile app</p>
            </div>
            <div className="BSA-feature-card">
              <div className="BSA-feature-icon">💳</div>
              <h3>ATM Access</h3>
              <p>Convenient withdrawals through our ATM network</p>
            </div>
          </div>
        </section>

        <section className="BSA-requirements">
          <h2>Requirements</h2>
          <div className="BSA-requirements-container">
            <ul className="BSA-requirements-list">
              <li>Valid ID</li>
              <li>Initial deposit (any amount)</li>
              <li>Proof of address</li>
              <li>Completed application form</li>
            </ul>
          </div>
        </section>

        <section className="BSA-cta">
          <div className="BSA-cta-content">
            <h2>Ready to Start Saving?</h2>
            <p>Open your Basic Savings Account today</p>
            <div className="BSA-cta-buttons">
              <button
                className="BSA-cta-button primary"
                onClick={handletonavigate}
              >Apply Now</button>
            </div>
          </div>
        </section>
        <button
          className="BSA-scroll-top"
          onClick={scrolltoTop}
        >↑</button>
      </div>
      <Footer />
    </div>
  );
}

export default BasicSavingsAccount;