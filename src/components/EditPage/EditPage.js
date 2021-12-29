import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import * as service from '../../services/teamService';







const EditPage = () => {
    const { user } = useAuthContext()
    const { teamId } = useParams();
    const [member, setMember] = useState([]);
    const history = useHistory();

    useEffect(() => {
        service.getOneMember(teamId)
            .then(result => {
                console.log(result);
                setMember(result)
            })
    }, [teamId]);

    const onEdit = (e) => {
        e.preventDefault();
        let form = new FormData(e.currentTarget);
        let name = form.get('name');
        let description = form.get('description');
        let link = form.get('follow');
        let imageUrl = form.get('imageUrl');
        service.changeMember(teamId, user.accessToken, { name, description, link, imageUrl })
        history.push('/my-team')

    }


    return (
        <>
            <div className="create-img"></div>
            <section id="create-page" className="create">
                <form id="create-form" onSubmit={onEdit} method="POST">
                    <fieldset>
                        <legend>Edit Team Member</legend>
                        <p className="field">
                            <label htmlFor="name">Name</label>
                            <span className="input">
                                <input type="text" name="name" id="name" defaultValue={member.name} />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="input">
                                <textarea name="description" id="description" defaultValue={member.description}></textarea>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="follow">Link to LinkedIn</label>
                            <span className="input">
                                <textarea name="follow" id="follow" defaultValue={member.link}></textarea>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="image">Image Url</label>
                            <span className="input">
                                <input type="text" name="imageUrl" id="image" defaultValue={member.imageUrl} />
                            </span>
                        </p>


                        <input className="button submit" type="submit" value="Edit Member" />
                    </fieldset>
                </form>
            </section>
        </>
    )
}



export default EditPage;