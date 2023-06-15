import { useDispatch, useSelector } from 'react-redux';
import { deleteContactOperation } from '../../redux/contacts/operations';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactOperation(contactId));
  };

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}: </p> <p>{contact.number}</p>
            <button
              type="button"
              onClick={e => deleteContact(contact.id)}
            ></button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
