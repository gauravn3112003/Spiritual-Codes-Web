import React, { useContext } from "react";
import contactContext from "../../Context/Contact/contactContext";
export default function ContactUs(props) {
  const context = useContext(contactContext);
  const { deleteContact, setCountContact, countContact } = context;

  return (
    <>
      <tr>
        <td>1</td>
        <td>{props.name}</td>
        <td>{props.number}</td>
        <td>{props.email}</td>
        <td>{props.message}</td>
        <td className="operations">
          <div className="delete"  onClick={() => {
                deleteContact(props._id);
                setCountContact(countContact - 1);
              }}>
            <i class="bi bi-trash"></i>
          </div>
        </td>
      </tr>
    </>
  );
}
