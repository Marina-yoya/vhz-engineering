import './TeamPage.css'
import Person from '../../assets/person.jpg';
const TeamPage = () => {


    
    
    return(
        <div className="team-page">
            <h1 className="team">Team</h1>
            <hr className="small" />

            <section className="cards">
                <form className="card">
                <img src={Person} alt={"Person"} />
                    <div className="text">
                        <h3>The Boss</h3>
                        <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
                        <button>
                            <a href="https://www.facebook.com/valentin.zaimov.54">Follow</a>
                        </button>
                    </div>
                </form>
                <form className="card">
                    <img src={Person} alt={"Person"}
                         />
                    <div className="text">
                        <h3>Best in className</h3>
                        <p>Imagine jumping into that boat, and just letting it sail wherever the wind takes you...</p>
                        <button>Just do it...</button>
                    </div>
                </form>
                </section>
        </div>
    )
}

export default TeamPage;