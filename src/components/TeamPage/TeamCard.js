import { useHistory } from "react-router-dom";

const TeamCard = (props) => {

    const history = useHistory();

    const onLikeClick = (e) => {
        e.preventDefault()
        if (props.person.likes.includes(props.user._id)) {
            // TODO: add notification
            console.log('User already liked');
            return alert('you alredy liked this member')
        }
        props.person.likes.push(props.user._id)
        
        localStorage.setItem('likes', JSON.stringify(props.person.likes))
        // let likeStorage = JSON.parse(localStorage.getItem("likes"));

        // let likes = likeStorage.length;
        
        history.push('/team')
    }

    const userButton = <button onClick={onLikeClick}>Like</button>;

    return (
        <form className="card">
            <img src={props.person.img} alt={"Person"} />
            <div className="text">
                <h3>{props.person.title}</h3>
                <p>{props.person.description}</p>
                <button>
                    <a href={props.person.follow}>Follow</a>
                </button>

                <div className="likes">

                    <span id="total-likes">Likes: {props.person.likes?.length}</span>
                </div>
                {props.user._id ?
                    userButton
                    : ''
                }

            </div>
        </form>
    )


}

export default TeamCard;