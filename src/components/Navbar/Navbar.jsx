import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';
import Logo from '../../Assets/rbci-logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  // New state for mobile nested menus
  const [mobileNestedMenu, setMobileNestedMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset other states when main menu is toggled
    setIsProductsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setMobileNestedMenu(null);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
    setIsAboutDropdownOpen(false);
    setMobileNestedMenu(null);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
    setIsProductsDropdownOpen(false);
    setMobileNestedMenu(null);
  };

  const toggleMobileNestedMenu = (menu) => {
    setMobileNestedMenu(mobileNestedMenu === menu ? null : menu);
  };

  const handleSubMenuEnter = (submenu) => {
    setActiveSubMenu(submenu);
  };

  const handleSubMenuLeave = () => {
    setActiveSubMenu(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Mobile Logo Container - Only visible on mobile */}
        <div className={styles.mobileBrandContainer}>
          <Link to="/">
            <img src={Logo} alt="RBCI Logo" className={styles.mobileLogo} />
          </Link>
          <div className={styles.mobileBrandText}>
            <Link to="/" className={styles.logo}>Rural Bank of Cauayan, Inc.</Link>
            <p className={styles.mobileTagline}>Your Harvest Starts Here</p>
          </div>
        </div>

        {/* Desktop Logo Container - Only visible on desktop */}
        <div className={styles.desktopLogoContainer}>
          <div className={styles.desktopBrandWrapper}>
            <Link to="/">
              <img src={Logo} alt="RBCI Logo" className={styles.desktopLogo} />
            </Link>
            <div className={styles.desktopBrandText}>
              <Link to="/" className={styles.desktopBrandName}>Rural Bank of Cauayan, Inc.</Link>
              <p className={styles.desktopTagline}>Your Harvest Starts Here</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.desktopNav}>
          <li><Link to="/" className={styles.navLink}>Home</Link></li>
          
          {/* Products and Services Dropdown */}
          <li 
            className={styles.dropdownContainer}
            onMouseEnter={toggleProductsDropdown}
            onMouseLeave={toggleProductsDropdown}
          >
            <Link to="/P&S" className={styles.navLink}>
              Products and Services
              <span className={styles.dropdownIcon}>▼</span>
            </Link>
            {isProductsDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li 
                  className={styles.nestedDropdown}
                  onMouseEnter={() => handleSubMenuEnter('deposit')}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link to="/P&S/DepositProducts">
                    Deposit Products
                    <span className={styles.dropdownIcon}>▼</span>
                  </Link>
                  {activeSubMenu === 'deposit' && (
                    <ul className={styles.submenu}>
                      <li><Link to="/deposit/BasicSavings">Basic Savings Account</Link></li>
                      <li><Link to="/deposit/RegularSavings">Regular Saving Deposit</Link></li>
                      <li><Link to="/deposit/CheckingDemand">Checking Account/ Demand Deposit</Link></li>
                      <li><Link to="/deposit/StudentSavings">Student Savings Deposit</Link></li>
                      <li><Link to="/deposit/TimeCertofDeposit">Time Certificate of Deposit</Link></li>
                    </ul>
                  )}
                </li>
                <li 
                  className={styles.nestedDropdown}
                  onMouseEnter={() => handleSubMenuEnter('loan')}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link to="/loan/AgriculturalLoans">
                    Loan Products
                    <span className={styles.dropdownIcon}>▼</span>
                  </Link>
                  {activeSubMenu === 'loan' && (
                    <ul className={styles.submenu}>
                      <li><Link to="/loan/AgriculturalLoans">Agricultural Loan</Link></li>
                      <li><Link to="/loan/CommercialLoans">Commercial Loan</Link></li>
                      <li><Link to="/loan/PersonalLoans">Personal Loan</Link></li>
                    </ul>
                  )}
                </li>
                <li 
                  className={styles.nestedDropdown}
                  onMouseEnter={() => handleSubMenuEnter('services')}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link to="/P&S/OtherServices">
                    Other Services
                    <span className={styles.dropdownIcon}>▼</span>
                  </Link>
                  {activeSubMenu === 'services' && (
                    <ul className={styles.submenu}>
                      <li><Link to="/other/InterBranch">Inter Branch Deposit</Link></li>
                      <li><Link to="/other/DomesticRemittance">Domestic Remittance</Link></li>
                      <li><Link to="/other/BillsPayment">Bills Payment</Link></li>
                      <li><Link to="/other/FundTransfer">Fund Transfer</Link></li>
                      <li><Link to="/other/MobilePOSAtm">Mobile/ POS ATM</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          
          {/* About Us Dropdown */}
          <li 
            className={styles.dropdownContainer}
            onMouseEnter={toggleAboutDropdown}
            onMouseLeave={toggleAboutDropdown}
          >
            <Link to="/A&U/CompanyProfile" className={styles.navLink}>
              About Us
              <span className={styles.dropdownIcon}>▼</span>
            </Link>
            {isAboutDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li><Link to="/A&U/CompanyProfile">Company Profile</Link></li>
                <li><Link to="/A&U/Careers">Careers</Link></li>
                <li><Link to="/A&U/ContactUs">Contact Us</Link></li>
                <li><Link to="/A&U/AnnualReport">Annual Report</Link></li>
              </ul>
            )}
          </li>
          
          <li><Link to="/ROPA" className={styles.navLink}>ROPA</Link></li>
          <li><Link to="/N&U" className={styles.navLink}>News and Update</Link></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div 
          className={`${styles.mobileMenuToggle} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <ul className={styles.mobileNav}>
            <li><Link to="/" className={styles.mobileNavLink} onClick={toggleMenu}>Home</Link></li>
            
            {/* Mobile Products and Services Dropdown */}
            <li>
              <div 
                className={styles.mobileDropdownToggle}
                onClick={toggleProductsDropdown}
              >
                Products and Services {isProductsDropdownOpen ? '▲' : '▼'}
              </div>
              {isProductsDropdownOpen && (
                <ul className={styles.mobileDropdownMenu}>
                  <li>
                    <div 
                      className={styles.mobileNestedToggle}
                      onClick={() => toggleMobileNestedMenu('deposit')}
                    >
                      Deposit Products {mobileNestedMenu === 'deposit' ? '▲' : '▼'}
                    </div>
                    {mobileNestedMenu === 'deposit' && (
                      <ul className={styles.mobileSubmenu}>
                        <li><Link to="/deposit/BasicSavings" onClick={toggleMenu}>Basic Savings Account</Link></li>
                        <li><Link to="/deposit/RegularSavings" onClick={toggleMenu}>Regular Saving Deposit</Link></li>
                        <li><Link to="/deposit/CheckingDemand" onClick={toggleMenu}>Checking Account/ Demand Deposit</Link></li> 
                        <li><Link to="/deposit/StudentSavings" onClick={toggleMenu}>Student Savings Deposit</Link></li>
                        <li><Link to="/deposit/TimeCertofDeposit" onClick={toggleMenu}>Time Certificate of Deposit</Link></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div 
                      className={styles.mobileNestedToggle}
                      onClick={() => toggleMobileNestedMenu('loan')}
                    >
                      Loan Products {mobileNestedMenu === 'loan' ? '▲' : '▼'}
                    </div>
                    {mobileNestedMenu === 'loan' && (
                      <ul className={styles.mobileSubmenu}>
                        <li><Link to="/loan/AgriculturalLoans" onClick={toggleMenu}>Agricultural Loan</Link></li>
                        <li><Link to="/loan/CommercialLoans" onClick={toggleMenu}>Commercial Loan</Link></li>
                        <li><Link to="/loan/PersonalLoans" onClick={toggleMenu}>Personal Loan</Link></li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <div 
                      className={styles.mobileNestedToggle}
                      onClick={() => toggleMobileNestedMenu('services')}
                    >
                      Other Services {mobileNestedMenu === 'services' ? '▲' : '▼'}
                    </div>
                    {mobileNestedMenu === 'services' && (
                      <ul className={styles.mobileSubmenu}>
                        <li><Link to="/other/InterBranch" onClick={toggleMenu}>Inter Branch Deposit</Link></li>
                        <li><Link to="/other/DomesticRemittance" onClick={toggleMenu}>Domestic Remittance</Link></li>
                        <li><Link to="/other/BillsPayment" onClick={toggleMenu}>Bills Payment</Link></li>
                        <li><Link to="/other/FundTransfer" onClick={toggleMenu}>Fund Transfer</Link></li>
                        <li><Link to="/other/MobilePOSAtm" onClick={toggleMenu}>Mobile/ POS ATM</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            
            {/* Mobile About Us Dropdown */}
            <li>
              <div 
                className={styles.mobileDropdownToggle}
                onClick={toggleAboutDropdown}
              >
                About Us {isAboutDropdownOpen ? '▲' : '▼'}
              </div>
              {isAboutDropdownOpen && (
                <ul className={styles.mobileDropdownMenu}>
                  <li><Link to="/A&U/CompanyProfile" onClick={toggleMenu}>Company Profile</Link></li>
                  <li><Link to="/A&U/Careers" onClick={toggleMenu}>Careers</Link></li>
                  <li><Link to="/A&U/ContactUs" onClick={toggleMenu}>Contact Us</Link></li>
                  <li><Link to="/A&U/AnnualReport" onClick={toggleMenu}>Annual Report</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/ROPA" className={styles.mobileNavLink} onClick={toggleMenu}>ROPA</Link></li>
            <li><Link to="/N&U" className={styles.mobileNavLink} onClick={toggleMenu}>News and Update</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;