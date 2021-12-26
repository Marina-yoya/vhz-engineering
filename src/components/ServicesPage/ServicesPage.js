import './ServicesPage.css';
import ServiceCard from './ServicesCard';
import ServiceImg from '../../assets/services1.jpg'
import ServiceImg2 from '../../assets/service2.jpg'
import ServiceImg3 from '../../assets/service3.jpg'
const services = [
    {
        id: 1,
        img: ServiceImg,
        title: "Advising",
        description: "some description",
        
    },
    {
        id: 2,
        img: ServiceImg2,
        title: "Advising2",
        description: "some description2",
        
    },
    {
        id: 2,
        img: ServiceImg3,
        title: "Advising2",
        description: "some description3",
        
    }

]
const ServicesPage = (props) => {

    console.log(props)

    return (
        <div className="services-page">
            <h1 id="service">Services</h1>
            <hr className="small" />
            <section className="services">
           {services.map(service => {
               return <ServiceCard service = {service}  />
           })}
            </section>
        </div>
    )

}

export default ServicesPage