import './App.css';
import {useState, useEffect} from "react";
import Card from "./Card"

function App() {

  const [form, setForm] = useState({fullName:'', email: '', phone: '', address:''});
  const [contacts, setContacts] = useState([{
    _id:'1', 
    fullName:'test', 
    email: 't@t.com', 
    phone: '123456', 
    address:'test'}
  ]);
  const fillForm = (e, field) => {
    let newForm = {...form};
    newForm[field] = e.target.value;
    setForm(newForm);
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const url = 'http://localhost:8080/contacts/new';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }

    fetch(url, options)
  }

  useEffect(() => {
    const url = 'http://localhost:8080/contacts/all';
    
    fetch(url).then(data => data.json().then(contacts => {
      setContacts(contacts);
    }));
  }, []);
  
  

  const cards = contacts.map(contact => <Card key = {contact['_id']} contact = {contact}/>);

  console.log(cards, contacts)
  return (
    <div className="App">
      <form className="form" onSubmit = {formSubmitHandler}>
        <input required placeholder="Full name" value = {form.fullName} onChange = {(e) => fillForm(e, 'fullName')}/>
        <input type = "email" placeholder="Email" value = {form.email} onChange = {(e) => fillForm(e, 'email')}/>
        <input type = "tel" placeholder="Phone number" value = {form.phone} onChange = {(e) => fillForm(e, 'phone')}/>
        <input placeholder="Address" value = {form.address} onChange = {(e) => fillForm(e, 'address')}/>
        <button>Create Contact</button>
      </form>

      <section className="contact-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
