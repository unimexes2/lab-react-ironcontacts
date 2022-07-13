import { useState } from "react";
import contacts from "./contacts.json";
import ContactCard from "./ContactCards";
import './index.css';


function App() {

  const cont = contacts.filter((val, ind) => {

    if (ind < 5) { return val } else { return }

  })

  const [contactArr, setContacts] = useState(cont);

  const clickToAdd = () => {

    var dim = Math.floor(Math.random() * contacts.length - 4)
    var elem = contacts[dim + 4];
    const filteredContacts = [...contactArr, elem];
    contacts.splice([dim+4],1)
    
    setContacts(filteredContacts);
  };

  const sortDes = () => {
    const newArr = [...contactArr].sort(function (a, b) {
      if (a.popularity < b.popularity)
              return -1;
      if (a.popularity > b.popularity)
            return 1;
      return 0;
    });

    setContacts(newArr);
  }

    const sortAcs = () => {
      const newArr = [...contactArr].sort(function (a, b) {
        if (a.popularity > b.popularity)
                 return -1;
        if (a.popularity < b.popularity)
                 return 1;
        return 0;
      });

     setContacts(newArr);
  };

  const deleteCont= (contId) => {
    const filteredCont = contactArr.filter((cont) => {
      return cont.id !== contId;
    });
    setContacts(filteredCont);
  }



  return (<div className="App">
    
    <div className="ContactCards">
    
          <h3> PICTURE </h3>
    
     <div>

          <h3> NAME </h3>

      </div>
    
      <div>

          <h3> POPULARITY </h3>

      </div>
    
    </div>

    <button onClick={() => clickToAdd()} className="btn-new">
      Add a random
    </button>
    <button onClick={() => sortDes()} className="btn-new">
      Desc
    </button>
    <button onClick={() => sortAcs()} className="btn-new">
      Acs
    </button>

   
    {contactArr.map((contact, index) => {

return (
        <ContactCard
          key={contact.id}
          contact={contact}
          deleteCont={deleteCont}
        />
      );
    })}
  </div>)
}
export default App;

