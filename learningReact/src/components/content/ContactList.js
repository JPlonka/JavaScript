import React from 'react'
import ContactCard from './contact/ContactCard'

function ContactList() {
    return (
        <div className="contact-list">
            <ContactCard 
                info={{
                    name: "Mr. Whiskerson",
                    imgUrl: "http://placekitten.com/300/200", 
                    phone: "(212) 555-1234", 
                    email: "mr.whiskaz@catnap.meow"
                }} 
            />
            <ContactCard
                info={{
                    name: "Fluffy",
                    imgUrl: "http://placekitten.com/400/200",
                    phone: "(212) 555-2345",
                    email: "fluff@me.com" 
                }}
                
            />
            <ContactCard 
                info={{
                    name: "Kitty",
                    imgUrl: "http://placekitten.com/400/300", 
                    phone: "(212) 555-3456",
                    email: "kit@kmail.com"
                }}
                
            />
            <ContactCard 
                info={{
                    name: "Garfield", 
                    imgUrl: "http://placekitten.com/200/100",
                    phone: "(212) 555-4567",
                    email: "gar@catoo.com" 
                }}
                
            />
        </div>
    )
}

export default ContactList