import React from 'react'

function ContactCard(props) {
  const { contact, clickToDelete } = props;
  console.log(contact.pictureUrl);
  return (
    <>
    <div className="ContactCards">
    <div className="pic-person">  <h3>{contact.name}</h3></div>
     <div> <img src={contact.pictureUrl}/> </div>
    <p>{contact.popularity}         </p>
      {contact.wonOscar?(<p>won</p>):(<></>)} 
      {contact.wonEmmy?(<p>won</p>):(<></>)} 
       </div>
        <button onClick={() => clickToDelete(contact._id)} className="btn-delete">
        Delete 🗑
      </button></> 
  )
}

export default ContactCard;