import ContactContext from "./contactContext";
import { useState } from "react";

const ContactState = (props)=>{


    const initialContact=[
        {
            "name":"Gaurav",
            "email":"gauravnarnaware3112@003gmail.com",
            "number":"7796305801",
            "message":"hey gaurav"
        },
        {
            "name":"Gauradshckjv",
            "email":"gauravnarnaware3112@003gmail.com",
            "number":"7796305801",
            "message":"hey gaurav"
        },
        {
            "name":"Gaurav11235",
            "email":"gauravnarnaware3112@003gmail.com",
            "number":"7796305801",
            "message":"hey gaurav"
        }
    ]
    const [contacts, setContacts] = useState(initialContact)

const addContact= (name, email, number, message)=>{
    const contact ={
        "name":"Gauravnext",
        "email":"gauravnarnaware3112@003gmail.com",
        "number":"7796305801",
        "message":"hey gaurav"
    };
    setContacts(contacts.push (contact));
}
    return(
        <ContactContext.Provider value={addContact} >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;