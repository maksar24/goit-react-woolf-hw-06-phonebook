import Wrapper from './Wrapper/Wrapper';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { SecondaryTitle, Title } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      <ToastContainer />
      <ContactList />
    </Wrapper>
  );
};
