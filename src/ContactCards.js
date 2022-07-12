import React from 'react'

function ContactCard(props) {
  const { contact, clickToAdd } = props;
    return (
    <>
   
    <div className="ContactCards">
    <h3>{contact.name}</h3></div>
     <div>  <div > <img className="pic-person" src={contact.pictureUrl}/> </div>
    <p>{contact.popularity}         </p>
      {contact.wonOscar?(<p>won</p>):(<></>)} 
      {contact.wonEmmy?(<p>won</p>):(<></>)} 
       </div>
       </> 
  )
}

export default ContactCard;