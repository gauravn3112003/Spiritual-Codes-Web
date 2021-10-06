import ContactContext from "./contactContext";

const ContactState = (props)=>{

const addContact =  () => {
  
}


    return(
        <ContactContext.Provider value={addContact} >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;