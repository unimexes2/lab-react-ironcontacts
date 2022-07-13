import React from 'react'

function ContactCard(props) {
  const { contact,deleteCont } = props;
    return (
    <div>
   
    <div className="ContactCards">
    <h3>{contact.name}</h3></div>
     <div>  <div > <img className="pic-person" src={contact.pictureUrl}/> </div>
    <p>{contact.popularity}         </p>
      {contact.wonOscar?(<p>won</p>):(<></>)} 
      {contact.wonEmmy?(<p>won</p>):(<></>)} 
      <button onClick={() => deleteCont(contact.id)} className="btn-new">
      Delete
    </button>

       </div>
       </div> 
  )
}

export default ContactCard;