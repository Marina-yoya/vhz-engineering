import './MyTeam.css'
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { Link } from 'react-router-dom'
import * as service from '../../services/teamService';


const MyTeam = () => {

    const { user } = useAuthContext();

    const [team, setTeam] = useState([])
    console.log(team)
   

    useEffect(() => {
        service.getUserTeam(user._id)
            .then(result => {
                console.log(result);
                setTeam(result)
            })
    }, [user._id]);


    return (
        <>

            <div className="team-page"></div>
                <h1 className="team">My Team</h1>
                <hr className="small" />


                <section className="cards">
                    {team.map(team => {  return(
                          <form className="card">
                          <img src={team.imageUrl} alt={"Person"} />
                          <div className="text">
                              <h3>{team.name}</h3>
                              <p className="desc">{team.description }</p>
                              <button>
                                  <a href={team.link}>Follow</a>
                              </button>
                              <Link className="button btn" to={`/details/${team._id}`}>Details</Link>
                          </div>
                      </form>
                    )
                      
                    })}

                </section>
            

        </>
    )
}


export default MyTeam;