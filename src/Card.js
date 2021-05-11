import "./Cards.css";

const Card = ({contact, deleteContact}) => {
    const {fullName, email, phone, address} = contact;
    const editedContact = {...contact};

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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedContact)
        }

        fetch(url, options)
        .then(data => data.json().then(output => console.log({output})));

    }

    return(
        <div className="card">
            <div data-id="fullName"
                onKeyPress={editCheckHandler}
                onBlur = {editCardHandler}
                contentEditable={true}>
                {fullName}
            </div>
            <div data-id="email"
                onKeyPress={editCheckHandler}
                onBlur = {editCardHandler}
                contentEditable={true}>
                {email}
            </div>
            <div data-id="phone"
                onKeyPress={editCheckHandler}
                onBlur = {editCardHandler}
                contentEditable={true}>
                {phone}
            </div>
            <div data-id="address"
                onKeyPress={editCheckHandler}
                onBlur = {editCardHandler}
                contentEditable={true}>
                {address}
            </div>
            <button >✏️</button>
            <button onClick={updateContactHandler}>💾</button>
            <button onClick={deleteContact} >🗑️</button>
        </div>
    );
}

export default Card;