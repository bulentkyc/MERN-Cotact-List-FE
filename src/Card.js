import "./Cards.css";

const Card = ({contact}) => {
    const {fullName, email, phone, address} = contact;
    return(
        <div className="card">
            <p>{fullName}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{address}</p>
        </div>
    );
}

export default Card;