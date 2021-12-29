import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import * as service from '../../services/teamService'
import './DetailsPage.css';

const Details = () => {

    const history = useHistory()
    const { user } = useAuthContext()
    const { teamId } = useParams();
    const [member, setMember] = useState([]);

    useEffect(() => {
        service.getOneMember(teamId)
            .then(result => {
                console.log(result);
                setMember(result)
            })
    }, [teamId]);




    const deleteClickHandler = () => {
        console.log('del')
        service.delMember(teamId, user.accessToken)
        history.push('/my-team')
    }


    return (
        <>

            <div className="team-page">
                <h1 className="team">Team</h1>
                <hr className="small" />

                <section className="cards">

                    <form className="card">
                        <img src={member.imageUrl} alt={"Person"} />
                        <div className="text">
                            <h3>{member.name}</h3>
                            <p className="desc">{member.description}</p>
                            <button>
                                <a href={member.link}>Follow</a>
                            </button>
                            <div className='details-btn'>
                                
                                    <a className="dbtn" href="#" onClick={deleteClickHandler}>Delete</a>
                               
                                    <Link className="dbtn" to={`/edit/${member._id}`}>Edit</Link>
                                
                            </div>
                        </div>
                    </form>




                </section>
            </div>

        </>
    )
}

export default Details;