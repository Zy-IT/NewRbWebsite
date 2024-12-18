{/*Imported Tools*/ }
import { BrowserRouter, Routes, Route } from 'react-router-dom';

{/*Components of the System*/ }
import Navbar from "./components/Navbar/Navbar";
{/*Pages  of the WEB*/ }
import Home from "./pages/Homepage/Home";
import ProductServices from "./pages/ProductServices/ProductServices";
import DepositProductsPage from "./pages/ProductServices/DepositProducts/DepositProductsPageFolder/DepositProductsPage";
import BasicSavings from "./pages/ProductServices/DepositProducts/BasicSavingsAccountFolder/BasicSavingsAccount";
import RegularSaving from "./pages/ProductServices/DepositProducts/RegularSavingsAccountFolder/RegularSavingsAccount";
import CheckingDemand from "./pages/ProductServices/DepositProducts/CheckingAccountFolder/CheckingAccount";
import StudentSavings from "./pages/ProductServices/DepositProducts/StudentSavingsFolder/StudentSavingsDeposit";
import TimeCertofDeposit from "./pages/ProductServices/DepositProducts/TimeCertofDepositFolder/TimeCertOfDeposit";
import LoanProducts from './pages/ProductServices/LoanProducts/LoanProductsPage/LoanProductsPage';
import AgriculturalLoans from './pages/ProductServices/LoanProducts/AgriculturalLoan/AgriculturalLoans';
import AgriMasikapLoan from './pages/ProductServices/LoanProducts/AgriculturalLoan/AgriMasikapLoan/AgriMasikapLoan';
import AgriSagsaganLoan from './pages/ProductServices/LoanProducts/AgriculturalLoan/AgriSagsaganLoan/AgriSagsaganLoan';
import CropLoan from './pages/ProductServices/LoanProducts/AgriculturalLoan/CropLoan/CropLoan';
import CommercialLoans from './pages/ProductServices/LoanProducts/CommercialLoan/CommercialLoans';
import NegoAsensoLoan from './pages/ProductServices/LoanProducts/CommercialLoan/NegoAsensoLoan/NegoAsensoLoan';
import KaAsensoLoan from './pages/ProductServices/LoanProducts/CommercialLoan/KaAsensoLoan/KaAsensoLoan';
import MoneyShopLoan from './pages/ProductServices/LoanProducts/CommercialLoan/MoneyShopLoan/MoneyShopLoan';
import SmallBusinessLoan from './pages/ProductServices/LoanProducts/CommercialLoan/SmallBusinessLoan/SmallBusinessLoan';
import PersonalLoans from './pages/ProductServices/LoanProducts/PersonalLoansPage/PersonalLoans';
import InstaCashLoan from './pages/ProductServices/LoanProducts/PersonalLoansPage/InstaCashLoan/InstaCashLoan';
import SalaryLoan from './pages/ProductServices/LoanProducts/PersonalLoansPage/SalaryLoan/SalaryLoan';
import OtherServices from './pages/ProductServices/OtherServices/OtherServicesPage/OtherServicesPage';
import InterBranch from './pages/ProductServices/OtherServices/InterBranch/InterBranch';
import DomesticRemittance from './pages/ProductServices/OtherServices/DomesticRemittance/DomesticRemittance';
import BillsPayment from './pages/ProductServices/OtherServices/BillsPayment/BillsPayment';
import FundTransfer from './pages/ProductServices/OtherServices/FundTransfer/FundTransfer';
import MobilePOSAtm from './pages/ProductServices/OtherServices/MobilePOSAtm/MobilePOSAtm';
import CompanyProfile from './pages/AboutUs/CompanyProfile/CompanyProfile';
import Careers from './pages/AboutUs/Careers/Careers';
import ContactUs from './pages/AboutUs/ContactUs/ContactUs';
import AnnualReport from './pages/AboutUs/AnnualReport';
import NewsUpdatePage from './pages/NewsUpdatePage/NewsUpdate';
import TermsCondition from './pages/Application/TermsCondition/TermsConditions';
import OnlineProcess from './pages/Application/OnlineProcess/OnlineProcess';



function App() {
  return (
    <BrowserRouter>
      <div className="App-container">

        <main className='Main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Products and Services  Sector*/}
            <Route path="/P&S" element={<ProductServices />} />
            {/* Depost Products */}
            <Route path="/P&S/DepositProducts" element={<DepositProductsPage />} />
            <Route path="/deposit/BasicSavings" element={<BasicSavings />} />
            <Route path="/deposit/RegularSavings" element={<RegularSaving />} />
            <Route path="/deposit/CheckingDemand" element={<CheckingDemand />} />
            <Route path="/deposit/StudentSavings" element={<StudentSavings />} />
            <Route path="/deposit/TimeCertofDeposit" element={<TimeCertofDeposit />} />
            {/* Loan Products */}
            <Route path="/P&S/LoanProducts" element={<LoanProducts />} />

            <Route path="/loan/AgriculturalLoans" element={<AgriculturalLoans />} />
            <Route path="/loan/AgriculturalLoans/AgriMasikapLoan" element={<AgriMasikapLoan />} />
            <Route path="/loan/AgriculturalLoans/AgriSagsaganLoan" element={<AgriSagsaganLoan />} />
            <Route path="/loan/AgriculturalLoans/CropLoans" element={<CropLoan/>} />

            <Route path="/loan/CommercialLoans" element={<CommercialLoans />} />
            <Route path="/loan/CommercialLoans/NegoAsensoLoan" element={<NegoAsensoLoan/>} />
            <Route path="/loan/CommercialLoans/KaAsensoLoan" element={<KaAsensoLoan/>} />
            <Route path="/loan/CommercialLoans/SmallBusinessLoan" element={<SmallBusinessLoan />} />
            <Route path="/loan/CommercialLoans/MoneyShopLoan" element={<MoneyShopLoan/>} />
            
            <Route path="/loan/PersonalLoans" element={<PersonalLoans />} />
            <Route path="/loan/PersonalLoans/InstaCashLoan" element={<InstaCashLoan />} />
            <Route path="/loan/PersonalLoans/SalaryLoan" element={<SalaryLoan />} />
            {/*Other Services */}
            <Route path="/P&S/OtherServices" element={<OtherServices />} />
            <Route path="/other/InterBranch" element={<InterBranch />} />
            <Route path="/other/DomesticRemittance" element={<DomesticRemittance />} />
            <Route path="/other/BillsPayment" element={<BillsPayment />} />
            <Route path="/other/FundTransfer" element={<FundTransfer />} />
            <Route path="/other/MobilePOSAtm" element={<MobilePOSAtm />} />
            {/*About Us */}
            <Route path="/A&U/CompanyProfile" element={<CompanyProfile />} />
            <Route path="/A&U/Careers" element={<Careers />} />
            <Route path="/A&U/ContactUs" element={<ContactUs />} />
            <Route path="/A&U/AnnualReport" element={<AnnualReport />} />
            {/*News and Update */}
            <Route path="/N&U" element={<NewsUpdatePage />} />

            {/*Terms and Conditions page and another set of page again */}
            <Route path="/T&C" element={<TermsCondition />} />
            <Route path="/Application" element={<OnlineProcess />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>

  );
}

export default App;   