
import { useState } from "react";
import './App.css';
import contacts from "./contacts.json";
import ContactCard from "./ContactCards";
function App() {
  const deleteMovie = (movieId) => {
    const filteredMovies = contact.filter((contact) => {
      return movie._id !== movieId;
    });}
  //const [contacts, setContacts] = useState(contacts);
  return (<div className="App">;
    <div className="ContactCards">
      <div className="pic-person">
        PICTURE
      </div>
      <div>

        <h3> NAME </h3>

      </div>
      <div>

        <h3> POPULARITY </h3>

      </div>
    </div>

    {contacts.map((contact,index) => {
      
      if (index>4){return}
      return (


        <ContactCard
          contact={contact}
          clickToDelete={deleteMovie}
       
       
       
          />
      );
    })}
  </div>)
}
export default App;

