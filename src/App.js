import { useState } from "react";
import './App.css';
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
    setContacts(filteredContacts);
  };

  const sortDes = () => {
    let newArr = contactArr.sort(function (a, b) {
      return (parseInt(a.popularity) - parseInt(b.popularity))
    });

    setContacts(newArr);

  }



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

    <button onClick={() => clickToAdd()} className="btn-new">
      Add a random
    </button>
    <button onClick={() => sortDes()} className="btn-new">
      Desc
    </button>
    {contactArr.map((contact, index) => {


      return (


        <ContactCard
          contact={contact}
          clickToAdd={clickToAdd}



        />
      );
    })}
  </div>)
}
export default App;

