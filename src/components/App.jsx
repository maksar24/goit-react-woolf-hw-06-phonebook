import { useEffect, useState } from 'react';
import Wrapper from './Wrapper/Wrapper';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { SecondaryTitle, Title } from './App.styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = newContact => {
    const checkName = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (checkName) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    setContacts(contacts => [newContact, ...contacts]);

    toast.success('Element added successfully!', {
      position: 'top-right',
    });
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));

    toast.success('Element deleted successfully!', {
      position: 'top-right',
      style: {
        backgroundColor: '#ffcc00',
        color: '#333',
      },
    });
  };

  const searchContact = e => {
    setFilterValue(e.target.value);
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addNewContact} />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter onSearch={searchContact} />
      <ToastContainer />
      <ContactList data={filterContacts()} handleDelete={deleteContact} />
    </Wrapper>
  );
};
