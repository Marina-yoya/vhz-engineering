import './TeamPage.css'
import { useAuthContext } from '../../contexts/AuthContext';
import TeamCard from './TeamCard';
import Person from '../../assets/person.jpg';

export const person = [
    {
        _id: 1,
        img: Person,
        title: "Valentin Zaimov",
        description: "Company Director",
        follow: "https://www.facebook.com/valentin.zaimov.54",
        likes:[]
    },
    {
        _id: 2,
        img: Person,
        title: "Stoyan Ivanov",
        description: "Electrician",
        follow: "https://www.facebook.com/valentin.zaimov.54",
        likes:[],
    },
    {
        _id: 3,
        img: Person,
        title: "Iliyan Marinov",
        description: "Electrician mate",
        follow: "https://www.facebook.com/valentin.zaimov.54",
        likes:[],
    },
    {
        _id: 4,
        img: Person,
        title: "Dimitar Dimitrov",
        description: "Electrician mate",
        follow: "https://www.facebook.com/valentin.zaimov.54",
        likes:[],
    },
    {
        _id: 5,
        img: Person,
        title: "Lubomir Karipov",
        description: "Electrician mate",
        follow: "https://www.facebook.com/valentin.zaimov.54",
        likes:[],
    },

]




const TeamPage = (props) => {

    const {user} = useAuthContext();
  
    
   


    return (
        <div className="team-page">
            <h1 className="team">Team</h1>
            <hr className="small" />

            <section className="cards">
            {person.map(person => {
               return <TeamCard key = {person._id} person = {person} user = {user} />
           })}


            </section>
        </div>
    )
}

export default TeamPage;