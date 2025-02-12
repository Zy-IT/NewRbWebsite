import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import "./RegularSavingsAccount.css";

function RegularSavingsAccount() {

  const navigate = useNavigate();

  const handletonavigate = () => {
    navigate("/T&C");
  }

  const scrolltoApply = () => {
    const Apply = document.querySelector('.RSA-cta');
    if (Apply) {
      Apply.scrollIntoView({ behavior: 'smooth' });
    }
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
          <h1>Regular Savings Deposit</h1>
          <p>Build your savings with our flexible and reliable savings account</p>
          <button className="RSA-header-button"
            onClick={scrolltoApply}
          >Apply Now</button>
        </div>
      </div>

      <div className="RSA-wrapper">
        <section className="RSA-features">
          <h2>Account Features</h2>
          <div className="RSA-features-grid">
            <div className="BSA-feature-card">
              <div className="BSA-feature-icon">💵</div>
              <h3>Start Saving</h3>
              <p>Start saving as low as 1000.00 Pesos</p>
            </div>
            <div className="BSA-feature-card">
              <div className="BSA-feature-icon">💵</div>
              <h3>Maintaining Balance</h3>
              <p>Keep your balance above the minimum balance for as low as 1,000</p>
            </div>
            <div className="RSA-feature-card">
              <div className="RSA-feature-icon">💰</div>
              <h3>Competitive Interest Rates</h3>
              <p>Earn more with our attractive interest rates on your savings</p>
            </div>
          </div>
        </section>

        <section className="RSA-description-section">
          <div className="RSA-description-container">
            <div className="RSA-description-grid">
              <div className="RSA-description-content">
                <h2>What is a Regular Savings Deposit?</h2>
                <p>
                  This refers to the bank’s deposit product that facilitates the deposit transactions 
                  of a regular client/depositor, either natural or juridical person that can provide bank’s 
                  requirements and accept the banks terms and condition that govern this product.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="RSA-requirements">
          <h2>Requirements</h2>
          <div className="RSA-requirements-container">
            <ul className="RSA-requirements-list">
              <li>1 Valid Photo-bearing ID</li>
              <li>(2) Copies of 1x1 Picture</li>
              <li>Alien Certificate of Registration (if foreign national)</li>
              <li>Joint Account Agreement (for joint accounts)</li>
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
