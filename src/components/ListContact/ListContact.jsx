import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from '../../redux/contacts/operations';
import { Contact, Item, List } from './ListContact.styled';
import { Btn } from './ListContact.styled';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <List>
        {filteredContacts.map(contact => (
          <Item key={contact.id}>
            <Contact>{contact.name}: </Contact>{' '}
            <Contact>{contact.number}</Contact>
            <Btn type="button" onClick={e => deleteContact(contact.id)}>
              Delete
            </Btn>
          </Item>
        ))}
      </List>
    </>
  );
};

export default ContactList;
