import './CreateTeam.css'
import { useHistory } from 'react-router-dom';
import * as service from '../../services/teamService';
import { useAuthContext } from '../../contexts/AuthContext';
const CreateTeam = () => {

    const { user } = useAuthContext();
    const history = useHistory();
    service.getUserTeam(user._id)

    const onCreate = (e) => {
        e.preventDefault()

        let formData = new FormData(e.currentTarget);

        let name = formData.get('name');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let link = formData.get('follow');

        service.createTeam({ name, description, imageUrl, link }, user.accessToken)
        history.push('/my-team')

    }


    return (
        <>
            <div className="create-img"></div>
            <section id="create-page" className="create">
                <form id="create-form" onSubmit={onCreate} method="POST">
                    <fieldset>
                        <legend>Add New Team</legend>
                        <p className="field">
                            <label htmlFor="name">Name</label>
                            <span className="input">
                                <input type="text" name="name" id="name" placeholder="Name" />
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="description">Description</label>
                            <span className="input">
                                <textarea name="description" id="description" placeholder="Description"></textarea>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="follow">Link to LinkedIn</label>
                            <span className="input">
                                <textarea name="follow" id="follow" placeholder="Follow on"></textarea>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="image">Image Url</label>
                            <span className="input">
                                <input type="text" name="imageUrl" id="image" placeholder="Image" />
                            </span>
                        </p>


                        <input className="button submit" type="submit" value="Add Team" />
                    </fieldset>
                </form>
            </section>
        </>

    )
}

export default CreateTeam;