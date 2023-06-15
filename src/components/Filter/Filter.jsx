import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContactThunk } from '../../redux/contacts/contactSlice';
import { Input, Label, NameInput } from './Filter.styled';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const filterContacts = ({ target: { value } }) => {
    setFilter(value);
    dispatch(filterContactThunk(value));
  };

  return (
    <Label>
      <NameInput> Search contacts by name</NameInput>
      <Input
        onChange={filterContacts}
        name="filter"
        type="text"
        value={filter}
        placeholder="Please enter a name "
      />
    </Label>
  );
};

export default Filter;
