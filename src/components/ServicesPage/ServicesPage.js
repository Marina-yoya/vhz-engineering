import './ServicesPage.css';
import ServiceImg from '../../assets/services1.jpg'
const ServicesPage = (props) => {

console.log(props)

return(
    <div className="services-page">
            <h1 id="service">Services</h1>
            <hr className="small" />
            <section className="services">
                <article className="service-info">
                    <img className="round" src={ServiceImg} alt={"services"} />
                    <div className="text">
                        <h4>Consulting</h4>
                        <p>Objectively innovate empowered
                             manufactured products whereas
                              parallel platforms.</p>

                    </div>
                </article>
                </section>
        </div>
)

}

export default ServicesPage