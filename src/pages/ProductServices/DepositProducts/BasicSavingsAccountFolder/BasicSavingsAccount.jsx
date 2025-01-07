import { useNavigate } from "react-router-dom";
import Navbar from "../../../../components/Navbar/Navbar";
import Footer from "../../../../components/Footer/Footer";
import "./BasicSavingsAccount.css";

function BasicSavingsAccount() {

  const navigate = useNavigate();

  const handletonavigate = () => {
    navigate('/T&C');
  }

  const scrolltoApply = () => {
    const Apply = document.querySelector('.BSA-cta');
    if (Apply) {
      Apply.scrollIntoView({ behavior: "smooth"});
    }
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
          <button className="BSA-header-button"
            onClick={scrolltoApply}
          >Apply Now</button>
        </div>
      </div>

      <div className="BSA-wrapper">
        <section className="BSA-features">
          <h2>Account Features</h2>
          <div className="BSA-features-grid">
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
            <div className="BSA-feature-card">
              <div className="BSA-feature-icon">💰</div>
              <h3>Competitive Interest Rates</h3>
              <p>Earn more with our attractive interest rates</p>
            </div>
          </div>

        </section>

        <section className="BSA-description-section">
          <div className="BSA-description-container">
            <div className="BSA-description-content">
              <h2>What is a Basic Savings Account?</h2>
              <p>
                A Basic Savings Account is a savings account designed for individuals who are new
                to banking and want to start saving with a simple and secure account. It offers
                competitive interest rates, zero minimum balance, and convenient ATM withdrawals.
              </p>
            </div>
          </div>
        </section>

        <section className="BSA-requirements">
          <h2>Requirements</h2>
          <div className="BSA-requirements-container">
            <ul className="BSA-requirements-list">
              <li>Valid ID</li>
              <li>Philippines Peso Only</li>
              <li>1x1 Picture</li>
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