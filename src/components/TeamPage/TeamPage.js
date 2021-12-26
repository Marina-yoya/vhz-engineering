import './TeamPage.css'
import TeamCard from './TeamCard';
import Person from '../../assets/person.jpg';

const person = [
    {
        id: 1,
        img: Person,
        title: "The Boss",
        description: "He is the best",
        follow: "https://www.facebook.com/valentin.zaimov.54",
    },
    {
        id: 2,
        img: Person,
        title: "The Boss",
        description: "He is the best",
        follow: "https://www.facebook.com/valentin.zaimov.54"
    },

]




const TeamPage = (props) => {


   


    return (
        <div className="team-page">
            <h1 className="team">Team</h1>
            <hr className="small" />

            <section className="cards">
            {person.map(person => {
               return <TeamCard key = {person.id} person = {person}  />
           })}

            </section>
        </div>
    )
}

export default TeamPage;