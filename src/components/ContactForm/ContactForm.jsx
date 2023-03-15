import { useState } from 'react';
import { nanoid } from 'nanoid';
import { AddBtn, Form } from './ContactFrom.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'redux/users/userSelectors';
import { addContacts } from 'services/fetchApi';

export const ContactForm = () => {
  const [user, setUser] = useState({ name: '', number: '' });
  const contactUser = useSelector(getUsers);
  const dispatch = useDispatch();

  const handleInputNameChange = e => {
    setUser({ ...user, name: e.currentTarget.value });
  };

  const handleInputTelChange = e => {
    setUser({ ...user, number: e.currentTarget.value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const ContactId = nanoid();

    const contact = {
      name: user.name,
      id: ContactId,
      number: user.number,
    };

    if (contactUser.find(item => item.name === user.name)) {
      alert(`${user.name} is already in contacts.`);
      return;
    } else if (contactUser.find(item => item.number === user.number)) {
      alert(`${user.number} is already in contacts.`);
      return;
    }
    dispatch(addContacts(contact));
    resetForm();
  };

  const resetForm = () => {
    setUser({ name: '', number: '' });
  };

  return (
    <>
      <Form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="name">
          <p>Name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputNameChange}
            value={user.name}
          />
        </label>
        <label htmlFor="number">
          <p>Number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputTelChange}
            value={user.number}
          />
        </label>

        <AddBtn type="submit">Add contact</AddBtn>
      </Form>
    </>
  );
};
