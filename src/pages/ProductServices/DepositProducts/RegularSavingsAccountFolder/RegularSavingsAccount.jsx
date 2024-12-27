import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import "./RegularSavingsAccount.css";

function RegularSavingsAccount() {

  const navigate = useNavigate();

  const handletonavigate = () => {
    navigate("/T&C");
  }

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="RSA-container">
      <Navbar />

      <div className="RSA-hero">
        <div className="RSA-hero-content">
          <h1>Regular Savings Account</h1>
          <p>Build your savings with our flexible and reliable savings account</p>
        </div>
      </div>

      <div className="RSA-wrapper">
        <section className="RSA-features">
          <h2>Account Features</h2>
          <div className="RSA-features-grid">
            <div className="RSA-feature-card">
              <div className="RSA-feature-icon">💰</div>
              <h3>Competitive Interest Rates</h3>
              <p>Earn more with our attractive interest rates on your savings</p>
            </div>
            <div className="RSA-feature-card">
              <div className="RSA-feature-icon">🔐</div>
              <h3>Secure Banking</h3>
              <p>Advanced security measures to protect your funds</p>
            </div>
          </div>
        </section>

        <section className="RSA-description-section">
          <div className="RSA-description-container">
            <div className="RSA-description-grid">
              <div className="RSA-description-content">
                <h2>What is a Regular Savings Account?</h2>
                <p>
                  A Regular Savings Account is a secure and convenient deposit product designed
                  for individuals or businesses. It enables easy deposit transactions while meeting
                  the bank's requirements and adhering to its terms and conditions.
                  Ideal for regular savers seeking a reliable way to manage their funds.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="RSA-requirements">
          <h2>Requirements</h2>
          <div className="RSA-requirements-container">
            <ul className="RSA-requirements-list">
              <li>Valid ID</li>
              <li>Minimum initial deposit</li>
              <li>Proof of address</li>
              <li>Completed application form</li>
            </ul>
          </div>
        </section>

        <section className="RSA-cta">
          <div className="RSA-cta-content">
            <h2>Ready to Open an Account?</h2>
            <p>Start managing your finances with our checking account today</p>
            <button className="RSA-cta-button-primary"
              onClick={handletonavigate}
            >Apply Now</button>
          </div>
        </section>
        <button className="RSA-scroll-top"
          onClick={scrolltoTop}
        >↑</button>
      </div>
      <Footer />
    </div>
  );
}

export default RegularSavingsAccount;
