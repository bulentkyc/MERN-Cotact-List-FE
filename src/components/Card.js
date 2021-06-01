import "./Cards.css";
import {useState} from "react";

const Card = ({contact, deleteContact}) => {
    const {fullName, email, phone, address, avatar} = contact;
    const editedContact = {_id: contact._id};
    //delete editedContact._id;
    
    const [isEditable, setIsEditable] = useState(false);
    const [bgColor, setBgColor] = useState('white');

    const editToggle = () => {
        setIsEditable(!isEditable);
        setBgColor(isEditable?'white':'lavender');
    }

    const editCardHandler = (e) => {
        const id = e.target.getAttribute("data-id");
        const info = e.target.innerText;
        /* console.log({id, info}); */
        editedContact[id]=info;
    }

    const editCheckHandler = (e) => {
        console.log(e)
        if (e.charCode == 13) {
            e.preventDefault();
        }
    }

    const updateContactHandler = () => {
        console.log(editedContact);

        const url = 'http://localhost:8080/contacts/update';
        const options = {
        method: 'POST',
        headers: {
            'x-auth-token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedContact)
        }

        fetch(url, options)
        .then(data => data.json().then(output => {
            if (output.status === 'success') {
                setIsEditable(false);
                setBgColor('green');
            } else {
                setBgColor('coral');
            }
        }))
        .catch(err => setBgColor('coral'));

    }

    return(
        <div className='card' style={{backgroundColor: bgColor}}>
            <img src = {"http://localhost:8080/avatars/" + avatar}/>
            <div data-id="fullName"
                onKeyPress={editCheckHandler}
                onBlur = {editCardHandler}
                contentEditable={isEditable}>
                {fullName}
            </div>
            <div data-id="email"
                onKeyPress={editCheckHandler}
                onBlur = {editCardHandler}
                contentEditable={isEditable}>
                {email}
            </div>
            <div data-id="phone"
                onKeyPress={editCheckHandler}
                onBlur = {editCardHandler}
                contentEditable={isEditable}>
                {phone}
            </div>
            <div data-id="address"
                onKeyPress={editCheckHandler}
                onBlur = {editCardHandler}
                contentEditable={isEditable}>
                {address}
            </div>
            <button onClick={editToggle}>✏️</button>
            <button onClick={updateContactHandler}>💾</button>
            <button onClick={deleteContact} >🗑️</button>
        </div>
    );
}

export default Card;