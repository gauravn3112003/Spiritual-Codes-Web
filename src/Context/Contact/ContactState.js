import ContactContext from "./contactContext";

const ContactState = (props)=>{
const state={
    "name":"gaurav"
}
    return(
        <ContactContext.Provider value={state} >
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;