import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  addContactThunk,
  fetchContactsThunk,
} from '../../redux/contacts/operations';
import { Btn, FormStyles, Input, NameInput } from './FormContact.styled';
import Filter from '../Filter/Filter';

export const FormContact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state.contacts);

  // console.log(contacts);
  const addContact = contact => {
    contacts.some(el => el.name.includes(contact.name))
      ? alert('This contact is already exist')
      : dispatch(addContactThunk(contact));
  };

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'number') setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    addContact(contact);
    setName('');
    setNumber('');
  };

  return (
    <>
      <Filter />
      <FormStyles onSubmit={handleSubmit}>
        <div>
          <label>
            <NameInput>Name</NameInput>
            <Input
              type="text"
              name="name"
              placeholder="👤 Please enter your name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={e => handleChange(e)}
              value={name}
            />
          </label>
        </div>

        <div>
          <label>
            <NameInput>Number</NameInput>

            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              placeholder="📞 Please enter valid number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={e => handleChange(e)}
              value={number}
            />
          </label>
        </div>
        <Btn>Save contact</Btn>
      </FormStyles>
    </>
  );
};
