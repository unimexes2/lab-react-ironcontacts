import React from 'react'

function ContactCard(props) {
  const { contact } = props;
  console.log(contact.pictureUrl);
  return (
    <div className="ContactCards">
    <div className="pic-person">  <h3>{contact.name}</h3></div>
     <div> <img src={contact.pictureUrl}/> </div>
    <p>{contact.popularity}         </p>
      
    </div> 
  )
}

export default ContactCard;