
import './AboutPage.css'
import AboutImg from '../../assets/about.jpg';
const AboutPage = () => {


    return (
        <>
            <div className="about-page">
                <h2 id="about">About</h2>
                <hr className="small" />
                <section className="about-container">
                    <div className="about-content">
                        <p>VHZ Engineering was formed in 2016 to provide high quality electrical engineering services to industries based in the home counties.
                            Over 5 years, the companys capabilities have grown in tandem with its reputation.
                            We have brought our vast experience and electrical engineering expertise to complex,
                            large-scale electrical project. VHZ Engineering has established
                            an unparalleled reputation for quality workmanship.
                            We are well-known for quality and reliability through our collaborative management approach.
                            From conception through to completion, our uncompromising commitment to the highest standards
                             is reflected throughout all aspects of the business.
                        </p>
                    </div>
                    <div className="about-image">
                        <img className="about-img" src={AboutImg} alt={"About info"} />
                    </div>
                </section>
            </div>
        </>

    )
}

export default AboutPage;