const TeamCard = (props) => {

console.log(props)



return (
    <form className="card">
    <img src={props.person.img} alt={"Person"} />
    <div className="text">
        <h3>{props.person.title}</h3>
        <p>{props.person.description}</p>
        <button>
            <a href={props.person.follow}>Follow</a>
        </button>
    </div>
</form>
)


}

export default TeamCard;