import React, {useState} from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

    // {id:"1", name:"Plumber", email:"plumber@gmail.com" },
    // {id:"2", name:"Builder", email:"builder@gmail.com" }

    const [contacts, setContacts ] = useState([]);
  
  
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;