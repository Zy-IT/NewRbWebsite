import { useState } from "react";
import { useNavigate } from "react-router-dom";


const TermsCondition = () => {

    const [list1section, setlist1Section] = useState(false);
    const [list2section, setlist2Section] = useState(false);
    const [list3section, setlist3Section] = useState(false);
    const [list4section, setlist4Section] = useState(false);
    const [list5section, setlist5Section] = useState(false);
    const [list6section, setlist6Section] = useState(false);
    const [list7section, setlist7section] = useState(false);

    const navigate = new useNavigate();

    const goback = () => {
        navigate(-1);
    }

    const togglevisibility = (listSetter) => {
        listSetter(prev => !prev);
    }

    const scrollltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    return (
        <div className="Terms-and-Condition">
            <button className="TC-back-button"
                onClick={goback}
            >Back</button>
            <div className="terms-condition-container">
                <div className="TC-header-container">
                    <div className="TC-header-content">
                        <h1>Terms and Condition</h1>
                        <p>Included here are the terms and conditions for apply of the specific services that you have selected</p>
                    </div>
                </div>

                <div className="TC-body">
                    <div className="TC-body-container">

                        {/*1st Section */}
                        <div className="TC-BDA-section">
                            <button
                                className="TC-toggle-button"
                                onClick={() => togglevisibility(setlist1Section)}
                            >Basic Deposit Account</button>
                            {list1section && (
                                <div className="TC-BDA-Container">
                                    <div className="TC-BDA-contents">
                                        <h2>Basic Deposit Account</h2>
                                        <ol className="TC-BDA-list">
                                            <li>Passbook must be presented every time a deposit or withdrawal is made.</li>
                                            <li>Initial Deposit should not more than P100.00.</li>
                                            <li>Required minimum Average Daily Balance (ADB) is P1000.00 to earn interest.</li>
                                            <li>
                                                The depositor agrees that this Basic Deposit Account is governed by the laws, Presidential Decrees, Circulars of the Bangko Sentral ng Pilipinas
                                                and policies adopted by the Board of Directors of the Rural Bank of Cauayan, (Isa.), Inc.
                                            </li>
                                            <li>
                                                Checks deposited shall be accepted on collection basis and maybe withdrawn only after the prescribed reglamentary clearing period.
                                                The bank may charge back any defective or lost items credited to this account, regardless of the time that has elapsed, whether or not the item itself can be returned.
                                                The depositor assumes full responsibility for the validity of the items deposited, as well as the correctness and genuineness of all the endorsements thereon.
                                            </li>
                                            <li>Deposits and withdrawals must be in units of One Peso (1.00).</li>
                                            <li> A Basic Deposit Account opened and subsequently closed within a period of thirty (30) days will be charged P100.00 to cover the cost of the passbook and ledger card.</li>
                                            <li>Deposit under Basic Deposit Account shall earn an annual Interest of 0.25% computed based on the account’s Average Daily Balance (ADB) and shall be posted every quarter end.</li>
                                            <li>Accounts closed before the end of reference quarter will not earn interest for the quarter.</li>
                                            <li>Interest Earned every quarter shall be subject to Twenty percent (20%) withholding tax as per National Bureau of Internal Revenue Code of 1997 Chapter III Sec. 24 under RA 10653.</li>
                                            <li>The bank reserves the right to require advance notice in writing before any substantial withdrawal is made.</li>
                                            <li>Any claim by the depositor against any erroneous entry in the book must be made before leaving the bank.</li>
                                            <li>Depositors must not write or alter anything in the passbook or deface the same.</li>
                                            <li>In case of death of the depositors the balance outstanding will be paid to  his/her legal heir/s.</li>
                                            <li>Notify the bank immediately in case of loss or destruction of the passbook.</li>
                                            <li>Deposit account showing no activity for a period of two (2) years shall be considered as dormant account.
                                                The Bank shall send individual notifications to the client’s last known address/email address/ contact number
                                                indicated in the Client Information Sheet sixty (60) days prior to dormancy of the account.
                                            </li>
                                            <li>Should the depositor exceed the P 50,000.00 maximum balance, the bank should convert the Basic Deposit Account to a Regular Deposit Account.</li>
                                            <li>
                                                That as per BSP Circular 928 Series of 2016, pursuant to Monetary Board Resolution dated September 29, 2016
                                                Dormant Accounts will be included in the list of unclaimed balances to be submitted to the Treasurer of the Philippines
                                                for escheat in accordance with the Unclaimed Balances Act if account has no activity for ten (10) years.
                                            </li>
                                            <li>The foregoing rules, regulations and conditions shall be deemed accepted by the depositor upon acceptance this TERMS and CONDITIONS.</li>
                                        </ol>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* 2nd List */}
                        <div className="TC-IBCA-section">
                            <button
                                className="TC-toggle-button"
                                onClick={() => togglevisibility(setlist2Section)}
                            >Interest Bearing Checking Account</button>
                            {list2section && (
                                <div className="TC-IBCA-container">
                                    <div className="TC-IBCA-contents">
                                        <h2>Interest Bearing Checking Account</h2>
                                        <ol className="TC-IBCA-list">
                                            <li>
                                                The depositor agrees that this demand deposit account is governed by the laws, Presidential Decrees,
                                                Circulars of the Banko Sentral ng Pilipinas and policies adopted by the
                                                Board of Directors of the Rural Bank of Cauayan, (Isa.), Inc.
                                            </li>
                                            <li>Initial deposit should not be less than P 10,000.00 to open an Interest Bearing Checking Account.</li>
                                            <li>Withdrawal over the counter is not allowed. All withdrawals shall be done using a check.</li>
                                            <li>The bank shall issue a passbook and Check booklet at the cost of the depositor and shall surrender all unused checks upon closing of the account.</li>
                                            <li>Required minimum Average Daily Balance (ADB) is P 10,000.00.</li>
                                            <li>
                                                Interest Bearing Checking Account shall earn an annual interest of 0.25% computed
                                                based on the account’s Average Daily Balance (ADB) and shall be posted every quarter end.
                                            </li>
                                            <li>Accounts closed before the end of reference quarter will not earn interest for the quarter.</li>
                                            <li>
                                                Interest Earned every quarter shall be subject to Twenty percent (20%) withholding tax as per
                                                National Internal Revenue Code of 1997 Chapter III Sec. 24 under RA 10653.
                                            </li>
                                            <li>
                                                Checks deposited shall be accepted on collection basis and maybe withdrawn only after the prescribed reglamentary clearing period.
                                                The bank may charge back any defective or lost items credited to this account, regardless of the time that has elapsed,
                                                whether or not the item itself can be returned. The depositor assumes full responsibility for the validity of the items deposited,
                                                as well as the correctness and genuineness of all the endorsements thereon.
                                            </li>
                                            <li>The Depositor assumes full responsibility of monitoring/checking if fund is enough against issued checks.</li>
                                            <li>Cash deposits must be in units of One Peso (1.00).</li>
                                            <li>A Demand deposit account opened and subsequently closed within a period of thirty (30) days will be charged P100.00 to cover the cost of the passbook and supplies.</li>
                                            <li>The bank reserves the right to require advance notice in writing before any substantial issuance of check is made.</li>
                                            <li></li>
                                            <li>Any claim by the depositor against any erroneous entry in the book must be made before leaving the bank.</li>
                                            <li>Depositors must not write or alter anything in the passbook or deface the same.</li>
                                            <li>In case of death of the depositors the outstanding balance will be paid to his/her legal heir/s.</li>
                                            <li>Notify the bank immediately in case of loss or destruction of the passbook.</li>
                                            <li>
                                                Deposit account showing non-activity for a period of one (1) year/365 days after the last activity shall be considered dormant.
                                                The Bank shall send individual notifications to the client’s last known address/email address/ contact number indicated in the
                                                Client Information Sheet sixty (60) days prior to dormancy of the account.
                                            </li>
                                            <li>
                                                The Bank shall impose and collect Dormant Service Charge (DSC) of P30.00 monthly on dormant
                                                accounts that fall below the required minimum monthly average daily balance without any transaction
                                                for five (5) years (1825 days).
                                            </li>
                                            <li>The Bank shall impose and collect Below Maintaining Service Charge of P50.00 every end of day on deposit accounts that fall below the required minimum average daily balance.</li>
                                            <li>The bank reserves the right to dishonor checks issued by the drawer and return them to the payee in the following cases:
                                                <ol type="a">
                                                    <li>When the check is drawn against insufficient funds (“DAIF”).</li>
                                                    <li>When the check is drawn against uncollected deposit (“DAUD”).</li>
                                                    <li>When the drawer notifies the bank of a stop payment order for the issued check (“SPO”).</li>
                                                    <li>When the check is from a drawer’s closed account (“AC”).</li>
                                                    <li>When the check is drawn six (6) months ago from the date of the check (“STALE CHECK”).</li>
                                                    <li>When the check is post-dated once it is drawn to the bank (“PDC”).</li>
                                                    <li>When the check has the following technical defects:
                                                        <ol type="i">
                                                            <li>Checks with erasure, alteration, and/or deficiency (e.g., incomplete information such as date, payee, amount in words/figures, signature) will no longer be accepted, regardless of any signature indicating authorization.</li>
                                                            <li>Checks that are folded, crumpled, deformed, mutilated, with torn edges, smudges, among others.</li>
                                                            <li>Use of a “check-writer” which affixes the numbers in the amount in words line.</li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>The bank shall impose a filing fee of P200.00 per check on Stop Payment Order (SPO) requested by the depositor.</li>
                                            <li>
                                                The bank shall impose Returned Check Service Charge for every check mentioned in number 21 letter A, B and C by P2,000.00
                                                for the first P40,000.00 and additional P200.00 for every P40,000.00 excess and a fraction thereof.
                                            </li>
                                            <li>
                                                The bank has the discretion to impose Returned Check Service Charge for every check mention in number 21 letter “G” by P2,000.00
                                                for the first P40,000.00 and additional P200.00 for every P40,000.00 excess and a fraction thereof.
                                            </li>
                                            <li>The bank reserves the right to automatically close the account under the following grounds:</li>
                                            <ol type="a">
                                                <li>When the DDA has ten (10) or more returned checks in a month.</li>
                                                <li>The ADB is not enough to cover Returned Check Charges.</li>
                                                <li>The depositor intentionally uses the account for fraudulent transactions.</li>
                                                <li>The account is identified/involved in suspicious activity e.i, issuing a check with an amount that is not consistent to his financial capacity. Issued 1M amount of check but his declared source of income is below 30k per month.</li>
                                            </ol>
                                            <li>
                                                That as per BSP Circular 928 Series of 2016, pursuant to Monetary Board Resolution dated September 29, 2016
                                                Dormant Accounts will be included in the list of unclaimed balances to be submitted to the Treasurer of the Philippines
                                                for escheat in accordance with the Unclaimed Balances Act if account has no activity for ten (10) years.
                                            </li>
                                            <li>The foregoing rules, regulations and conditions shall be deemed accepted by the depositor upon signing this term and condition.</li>
                                        </ol>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/*3rd Section*/}
                        <div className="TC-RCA-section">
                            <button
                                className="TC-toggle-button"
                                onClick={() => togglevisibility(setlist3Section)}
                            >Regular Checking Account</button>
                            {list3section && (
                                <div className="TC-RCA-container">
                                    <div className="TC-RCA-contents">
                                        <h2>Regular Checking Account</h2>
                                        <ol>
                                            <li>
                                                The depositor agrees that this demand deposit account is governed by the laws, Presidential Decrees,
                                                Circulars of the Banko Sentral ng Pilipinas and policies adopted by the Board of Directors of the Rural Bank of Cauayan, (Isa.), Inc.
                                            </li>
                                            <li>Initial deposit should not be less than P 5,000.00 to open a Regular Checking Account.</li>
                                            <li>Withdrawal over the counter is not allowed. All withdrawals shall be done using a check.</li>
                                            <li>The bank shall issue a passbook and Check booklet at the cost of the depositor and shall surrender all unused checks upon closing of the account.</li>
                                            <li>Required minimum Average Daily Balance (ADB) is P 5,000.00.</li>
                                            <li>Interest Bearing Checking Account shall earn an annual interest of 0.25% computed based on the account’s Average Daily Balance (ADB) and shall be posted every quarter end.</li>
                                            <li>Accounts closed before the end of reference quarter will not earn interest for the quarter.</li>
                                            <li>
                                                Interest Earned every quarter shall be subject to Twenty percent (20%) withholding tax
                                                as per National Internal Revenue Code of 1997 Chapter III Sec. 24 under RA 10653.
                                            </li>
                                            <li>
                                                Checks deposited shall be accepted on collection basis and maybe withdrawn only after the prescribed reglamentary clearing period. The bank may charge back any defective
                                                or lost items credited to this account, regardless of the time that has elapsed, whether or not the item itself can be returned.
                                                The depositor assumes full responsibility for the validity of the items deposited, as well as the correctness and genuineness of all the endorsements thereon.
                                            </li>
                                            <li>The Depositor assumes full responsibility of monitoring/checking if fund is enough against issued checks.</li>
                                            <li>Cash deposits must be in units of One Peso (1.00).</li>
                                            <li>
                                                A Demand deposit account opened and subsequently closed within a period of thirty (30) days will be
                                                charged P100.00 to cover the cost of the passbook and supplies.
                                            </li>
                                            <li>The bank reserves the right to require advance notice in writing before any substantial issuance of check is made.</li>
                                            <li>Any claim by the depositor against any erroneous entry in the book must be made before leaving the bank.</li>
                                            <li>Depositors must not write or alter anything in the passbook or deface the same.</li>
                                            <li>In case of death of the depositors the outstanding balance will be paid to his/her legal heir/s.</li>
                                            <li>Notify the bank immediately in case of loss or destruction of the passbook.</li>
                                            <li>
                                                Deposit account showing non-activity for a period of one (1) year/365 days after the last activity shall be considered dormant.
                                                The Bank shall send individual notifications to the client’s last known address/email address/ contact number indicated in the
                                                Client Information Sheet sixty (60) days prior to dormancy of the account.
                                            </li>
                                            <li>
                                                The Bank shall impose and collect Dormant Service Charge (DSC) of P30.00 monthly on dormant accounts that fall below the
                                                required minimum monthly average daily balance without any transaction for five (5) years (1825 days).
                                            </li>
                                            <li>The Bank shall impose and collect Below Maintaining Service Charge of P50.00 every end of day on deposit accounts that fall
                                                below the required minimum average daily balance.
                                            </li>
                                            <li>The bank shall dishonor checks issued by the drawer and return it to payee whenever the check is under the following cases;
                                                <ol type="a">
                                                    <li>When the check is drawn against insufficient fund (“DAIF”).</li>
                                                    <li>When the check is drawn against uncollected deposit (“DAUD”).</li>
                                                    <li>When the Drawer notify the bank of a stop payment order for the issued check (“SPO”).</li>
                                                    <li>When the check is from a drawer’s closed account (“AC”).</li>
                                                    <li>When the check is drawn six (6) month ago from the date of the check (“STALE CHECK”).</li>
                                                    <li>When the check is post dated once it is drawn to the bank (“PDC”).</li>
                                                    <li>When the check has a the following technical defects;
                                                        <ol type="i">
                                                            <li>Checks with erasure, alteration and/or deficiency (incomplete information such as date, payee, amount in words,/figures, signature)
                                                                will no longer be accepted, regardless of any signature to indicate authorization.
                                                            </li>
                                                            <li>Checks that are folded, crumpled, deformed, mutilated, with torn edges, smudges among others.</li>
                                                            <li>Use of “check-writer” which affixes the numbers in the amount in words line.</li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>The bank shall impose a filing fee of P200.00 per check on Stop Payment Order (SPO) requested by the depositor.</li>
                                            <li>
                                                The bank shall impose Returned Check Service Charge for every check mentioned in number 21 letter A, B and C by P2,000.00
                                                for the first P40,000.00 and additional P200.00 for every P40,000.00 excess and a fraction thereof.
                                            </li>
                                            <li>
                                                The bank has the discretion to impose Returned Check Service Charge for every check mention in number 21 letter “G” by P2,000.00
                                                for the first P40,000.00 and additional P200.00 for every P40,000.00 excess and a fraction thereof.
                                            </li>
                                            <li>
                                                The bank reserves the right to automatically close the account under the following grounds:
                                                <ol typeof="a">
                                                    <li>When the DDA has ten (10) or more returned checks in a month.</li>
                                                    <li>The ADB is not enough to cover Returned Check Charges.</li>
                                                    <li>The depositor intentionally uses the account for fraudulent transactions.</li>
                                                    <li>
                                                        The account is identified/involved in suspicious activity e.i, issuing a check with an amount that is not consistent to his financial capacity.
                                                        Issued 1M amount of check but his declared source of income is below 30k per month.
                                                    </li>
                                                </ol>
                                            </li>
                                            <li>
                                                That as per BSP Circular 928 Series of 2016, pursuant to Monetary Board Resolution dated September 29, 2016 Dormant Accounts will be included
                                                in the list of unclaimed balances to be submitted to the Treasurer of the Philippines for escheat in accordance with the Unclaimed Balances Act
                                                if account has no activity for ten (10) years.
                                            </li>
                                            <li>The foregoing rules, regulations and conditions shall be deemed accepted by the depositor upon signing this term and condition.</li>
                                        </ol>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/*4th Section */}
                        <div className="TS-SA-section">
                            <button
                                className="TC-toggle-button"
                                onClick={() => togglevisibility(setlist4Section)}
                            >Savings Account</button>
                            {list4section && (
                                <div className="TC-SA-container">
                                    <div className="TC-SA-contents">
                                        <h2>Savings Account</h2>
                                        <ol>
                                            <li>Passbook must be presented every time a deposit or withdrawal is made.</li>
                                            <li>Initial Deposit should not be less than P1,000.00</li>
                                            <li>Required minimum Average Daily Balance (ADB) is P1,000.00 to earn interest.</li>
                                            <li>
                                                The depositor agrees that this Savings Account is governed by the laws, Presidential Decrees,
                                                Circulars of the Bangko Sentral ng Pilipinas and policies adopted by the Board of Directors of the Rural Bank of Cauayan, (Isa.), Inc.
                                            </li>
                                            <li>
                                                Checks deposited shall be accepted on collection basis and maybe withdrawn only after the prescribed reglamentary clearing period.
                                                The bank may charge back any defective or lost items credited to this account, regardless of the time that has elapsed, whether or not the item itself can be returned.
                                                The depositor assumes full responsibility for the validity of the items deposited, as well as the correctness and genuineness of all the endorsements thereon.
                                            </li>
                                            <li>Deposits and withdrawals must be in units of One Peso (1.00).</li>
                                            <li>A Savings Account opened and subsequently closed within a period of thirty (30) days will be charged P100.00 to cover the cost of the passbook and ledger card.</li>
                                            <li>Deposit under Savings Account shall earn an annual Interest of 0.25% computed based on the account’s Average Daily Balance (ADB) and shall be posted every quarter end.</li>
                                            <li>Accounts closed before the end of reference quarter will not earn interest for the quarter.</li>
                                            <li>Interest Earned every quarter shall be subject to Twenty percent (20%) withholding tax as per National Bureau of Internal Revenue Code of 1997 Chapter III Sec. 24 under RA 10653.</li>
                                            <li>The bank reserves the right to require advance notice in writing before any substantial withdrawal is made.</li>
                                            <li>Any claim by the depositor against any erroneous entry in the book must be made before leaving the bank.</li>
                                            <li>Depositors must not write or alter anything in the passbook or deface the same.</li>
                                            <li>In case of death of the depositors the balance outstanding will be paid to his/her legal heir/s.</li>
                                            <li>Notify the bank immediately in case of loss or destruction of the passbook.</li>
                                            <li>
                                                Deposit account showing no activity for a period of two (2) years shall be considered as dormant account. The Bank shall send individual notifications to the client’s last known
                                                address/email address/ contact number indicated in the Client Information Sheet sixty (60) days prior to dormancy of the account.
                                            </li>
                                            <li>
                                                The Bank shall collect Below Maintaining Service Charge (BMSC) of P25.00per month on deposit account that fall below the required minimum monthly average daily balance for
                                                two (2) consecutive months for active accounts and upon transfer for dormant accounts.
                                            </li>
                                            <li>
                                                The Bank shall collect a Dormancy Service Charge (DSC) of 30.00 per month on dormant accounts that fall below the required minimum monthly Average Daily Balance (ADB)
                                                five (5) years (1825 days) after last transaction.
                                            </li>
                                            <li>
                                                That as per BSP Circular 928 Series of 2016, pursuant to Monetary Board Resolution dated September 29, 2016 Dormant Accounts will be included in the list of
                                                unclaimed balances to be submitted to the Treasurer of the Philippines for escheat in accordance with the Unclaimed Balances Act if account has no activity
                                                for ten (10) years.
                                            </li>
                                            <li> The foregoing rules, regulations and conditions shall be deemed accepted by the depositor upon signing this TERMS and CONDITIONS.</li>
                                        </ol>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="TC-second-area-section">
                            <div className="TC-second-area-header">
                                <h1>Data Privacy Statement</h1>
                            </div>
                            <div className="TC-inner-body">
                                <div className="TC-PN-section">
                                    <h2>Privacy Notice</h2>
                                    <p>
                                        Confidentiality and privacy are vital features of the banking industry. Rural Bank of Cauayan, Inc.
                                        (RB Cauayan) is committed in ensuring that your data is protected in accordance with
                                        Republic Act no. 10173 or the Data Privacy Act of 2012 and its Implementing Rules and Regulations.
                                    </p>
                                </div>

                                <div className="TC-DOT-outer-section">
                                    <button
                                        className="TC-toggle-button"
                                        onClick={() => togglevisibility(setlist5Section)}
                                    >Defenition of Terms</button>
                                    {list5section && (
                                        <div className="TC-DOT-section">
                                            <h2>Defenition of Terms</h2>
                                            <p>
                                                Consent of the data subject refers to any freely given, specific, informed indication of will,
                                                whereby the data subject agrees to the collection and processing of personal information about
                                                and/or relating to him or her. Consent shall be evidenced by written, electronic or recorded means.
                                                It may also be given on behalf of the data subject by an agent specifically authorized by the data subject to do so.
                                            </p>
                                            <p>
                                                Personal information refers to any information whether recorded in a material form or not, from which the identity of an
                                                individual is apparent or can be reasonably and directly ascertained by the entity holding the information, or when put
                                                together with other information would directly and certainly identify an individual.
                                            </p>
                                            <p>
                                                Privileged information refers to any and all forms of data which under the Rules of Court and other pertinent laws constitute privileged communication.
                                            </p>
                                            <p>
                                                Sensitive personal information refers to personal information:
                                                <ol type="a">
                                                    <li>About an individual’s race, ethnic origin, marital status, age, color, and religious, philosophical or political affiliations;</li>
                                                    <li>
                                                        About an individual’s health, education, genetic or sexual life of a person, or to any proceeding for any offense committed
                                                        or alleged to have been committed by such person, the disposal of such proceedings, or the sentence of any court in such proceedings;
                                                    </li>
                                                    <li> Issued by government agencies peculiar to an individual which includes, but not limited to, social security numbers, previous or current health records, licenses or its denials, suspension or revocation, and tax returns; and</li>
                                                    <li>Specifically established by an executive order or an act of Congress to be kept classified.</li>
                                                </ol>
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="TC-PPI-outer-section">
                                    <button
                                        className="TC-toggle-button"
                                        onClick={() => togglevisibility(setlist6Section)}
                                    >Processing Personal Information</button>
                                    {list6section && (
                                        <div className="TC-PPI-section">
                                            <h1>Processing Personal Information</h1>
                                            
                                        </div>
                                    )}
                                </div>

                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="TC-scroll-top"
                onClick={scrollltotop}
            > ↑ </button>
        </div>
    )
}

export default TermsCondition;