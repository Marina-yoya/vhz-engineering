
import './AboutPage.css'
import AboutImg  from '../../assets/about.jpg';
const AboutPage = () => {


    return(
        <>
        <div className="about-page">
        <h2 id="about">About</h2>
        <hr className="small"/>
        <section className="about-container">
            <div className="about-content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolore tempore nemo quisquam obcaecati praesentium, quibusdam corrupti itaque,
                    ducimus cum alias sequi provident dicta iste excepturi consequatur, eaque sed minus laborum.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Explicabo sapiente ratione, veritatis voluptatum a consequuntur reprehenderit recusandae
                    nesciunt,
                    ex provident tempora, omnis esse. Officia expedita dignissimos tempore commodi esse veritatis.
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