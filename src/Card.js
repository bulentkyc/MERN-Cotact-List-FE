import "./Cards.css";

const Card = ({contact, deleteContact}) => {
    const {fullName, email, phone, address} = contact;
    return(
        <div className="card">
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
            <button>✏️</button>
            <button onClick={deleteContact} >🗑️</button>
        </div>
    );
}

export default Card;