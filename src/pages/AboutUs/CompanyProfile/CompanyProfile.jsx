import Navbar from "../../../components/Navbar/Navbar";
import "./CompanyProfile.css";

function CompanyProfile() {

    const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }   

    return (
        <div className="CP-company-profile">
            <Navbar />
            {/*Header Section */}
            <section>
                <div className="CP-hero-section">
                    <div className="CP-hero-content">
                        <h1>Our Legacy of Excellence</h1>
                        <p>Building trust and fostering growth since 1965</p>
                    </div>
                </div>
            </section>

            {/*Timeline Sections */}
            <section>
                <div className="CP-timeline-section">
                    <h2>Our Journey Through Time</h2>
                    <div className="CP-timeline">
                        <div className="CP-timeline-item">
                            <div className="CP-year">1965</div>
                            <div className="CP-content">
                                <h3>The Beginning</h3>
                                <p>Founded by Dr. and Mrs. Ireneo C. Bucag Sr. along with distinguished incorporators,
                                    establishing the first bank in Cauayan, Isabela.</p>
                            </div>
                        </div>

                        <div className="CP-timeline-item">
                            <div className="CP-year">1990-2000</div>
                            <div className="CP-content">
                                <h3>Initial Expansion</h3>
                                <p>Opened six new branches, marking the beginning of our regional growth.</p>
                            </div>
                        </div>

                        <div className="CP-timeline-item">
                            <div className="CP-year">2001-2010</div>
                            <div className="CP-content">
                                <h3>Rapid Growth</h3>
                                <p>Established eight additional branches, strengthening our presence in the region.</p>
                            </div>
                        </div>

                        <div className="CP-timeline-item">
                            <div className="CP-year">2011-2013</div>
                            <div className="CP-content">
                                <h3>Continued Evolution</h3>
                                <p>Added three more branches, further expanding our banking network.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Founders Section */}
            <section>
                <div className="CP-founders-section">
                    <h2>Our Pioneering Leaders</h2>
                    <div className="CP-founders-card-section">
                        <div className="CP-founder-card">
                            <img src="/src/Assets/CompanyProfile.png" alt="Historical Photo" className="CP-founder-image" />
                            <div className="CP-founder-info">
                                <h3>Our Founding Team</h3>
                                <p>The visionaries who established our foundation</p>
                            </div>
                        </div>
                        <div className="CP-founder-story">
                            <p>The RURAL BANK OF CAUAYAN INC. was established on April 7,1965. It is the pioneer bank in Cauayan, Isabela founded by Dr. and Mrs. Ireneo C. Bucag Sr. and its incorporator namely: Mr. Domingo San Pedro, Mrs. Aurea B. Carpio, Mr. Antonio M. Perez, Mrs. Lourdes Cruz, and Mr. Domingo Simangan.
                                <br />
                                <br />
                                The simplified and affordable credit window that it offers immediately became a word of mouth among farmers and businessmen in Cauayan , Isabela and its nearby municipalities. Since then, it has not stopped counting more and more satisfied and loyal customers.
                                <br />
                                <br />
                                Because of this, Rural Bank of Cauayan Inc. started branching out. Six (6) branches were opened from 1990 to 2000, Eight (8) other branches were inaugurated from 2001-2010, and 3 more branches started operating from 2011 to 2013.
                                <br />
                                <br />
                                As of now, Rural Bank of Cauayan Inc. has a total of 19 branches and 1 Extension Office operating in four provinces in Region 2–Isabela, Cagayan, Quirino and Nueva Vizcaya with resources of over a Billion pesos; and a total of 217 employees.
                                <br />
                                <br />
                                The bank’s tremendous growth over the years was fueled by the active & dynamic stewardship of its Members of the Board namely: Dr. Eduardo R. Bucag, Chairman of the Board, Charita P. Guinid, President, Mr. Edgardo R. Bucag, Board of Director, Mr. Ireneo R. Bucag Jr., Board of Director, Engr. Ronaldo R. Bucag, Board of Director, Mrs. Juana R. Bucag, Founder, Mr. Danilo San Pedro, Board of Director, Atty. Malou P. Andres, Board of Director, and Engr, Susana S. Wandag.
                                <br />
                                <br />
                                Social responsibilities have been a part of Rural Bank of Cauayan’s distinctiveness. For 5 straight years the bank have been conducting Job fair in partnership with LGU Cauayan, DOLE & POEA as a simple way of helping the jobseekers find their employment. Last January 2015, Rural Bank of Cauayan sponsored a 3-day medical, dental, surgical and ophthalmology mission in cooperation with Wichita Falls Country Medical Alliance of North Texas and LGU Cauayan. Local and Fil-Am Doctors from USA collaborated to provide free medical aid to those who are less fortunate in life in Isabela.
                                <br />
                                <br />
                                Truly, Rural Bank of Cauayan Inc. has evolved as one of the biggest rural bank in the region and has been receiving recognitions from prestigious institutions. Over the years, it has continued its legacy in good governance and excellent customer service.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="CP-mission-section">
                    <div className="CP-mission-content">
                        <h2>Our Commitment</h2>
                        <p>Since our establishment, we have been dedicated to providing simplified and affordable credit solutions
                            to farmers and businessmen in Cauayan, Isabela and neighboring municipalities. Our commitment to
                            excellence and customer satisfaction has earned us a loyal customer base that continues to grow.</p>
                    </div>
                </div>
            </section>

            {/*Board of Directors Section */}
            <section className="CP-gallery-section">
                <h2>Board of Directors</h2>
                <div className="CP-board-hierarchy">
                    <div className="CP-board-top">
                        <div className="CP-board-founder CP-board-position">
                            <div className="CP-board-card">
                                <img src="/src/Assets/Founder.jpg" alt="Founder" />
                                <div className="CP-board-info">
                                    <h3>Mrs. Juana R. Bucag</h3>
                                    <p>Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="CP-board-middle">
                        <div className="CP-board-chairman CP-board-position">
                            <div className="CP-board-card">
                                <img src="/src/Assets/Chairman.jpg" alt="Chairman" />
                                <div className="CP-board-info">
                                    <h3>Dr. Eduardo R. Bucag</h3>
                                    <p>Chairman of the Board</p>
                                </div>
                            </div>
                        </div>
                        <div className="CP-board-vice-chairman CP-board-position">
                            <div className="CP-board-card">
                                <img src="/src/Assets/ViceChairman.jpg" alt="Vice Chairman" />
                                <div className="CP-board-info">
                                    <h3>Mr. Edgardo R. Bucag</h3>
                                    <p>Vice Chairman of the Board</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="CP-board-bottom">
                        <div className="CP-board-president CP-board-position">
                            <div className="CP-board-card">
                                <img src="/src/Assets/President.jpg" alt="President" />
                                <div className="CP-board-info">
                                    <h3>Ms. Charita P. Guinid</h3>
                                    <p>President</p>
                                </div>
                            </div>
                        </div>
                        <div className="CP-board-directors">
                            {[
                                { src: "/src/Assets/BoardDirector1.jpg", name: "Mr. Ireneo R. Bucag Jr.", title: "Board of Director" },

                                { src: "/src/Assets/BoardDirector4.jpg", name: "Board Director ", title: "Board of Director" },

                                { src: "/src/Assets/BoardDirector5.jpg", name: "Board Director ", title: "Board of Director" },

                                { src: "/src/Assets/BoardDirector2.jpg", name: "Board Director ", title: "Board of Director" },

                                { src: "/src/Assets/BoardDirector3.jpg", name: "Board Director ", title: "Board of Director" }
                            ].map((director, index) => (
                                <div key={index} className="CP-board-position">
                                    <div className="CP-board-card">
                                        <img src={director.src} alt={director.name} />
                                        <div className="CP-board-info">
                                            <h3>{director.name}</h3>
                                            <p>{director.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <button
             className="CP-scroll-top"
             onClick={scrolltotop}
            >↑</button>
        </div>
    );
}

export default CompanyProfile;