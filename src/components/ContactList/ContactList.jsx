import ContactItem from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/selectors';

const getFilterContacts = (contacts, filterValue) => {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterValue.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const filterContacts = getFilterContacts(contacts, filterValue);

  return (
    <List>
      {filterContacts?.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} id={id} />;
      })}
    </List>
  );
};

export default ContactList;
