import React from 'react'

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.info.imgUrl} />
            <h3>{props.info.name}</h3>
            <p>Phone: {props.info.phone}</p>
            <p>Email: {props.info.email}</p>
        </div>
    )
}

export default ContactCard