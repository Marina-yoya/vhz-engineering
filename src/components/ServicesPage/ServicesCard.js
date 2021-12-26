
const ServiceCard = (props) => {

    return(
        
            
                <article className="service-info">
                    <img className="round" src={props.service.img} alt={"services"} />
                    <div className="text">
                        <h4>{props.service.title}</h4>
                        <p>{props.service.description}</p>

                    </div>
                </article>
               
       
    )
}

export default ServiceCard;