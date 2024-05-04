import Button from 'components/Button/Button';
import { Form, Input, Text } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContactAction } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      number: e.target.number.value,
    };

    const checkName = contacts.some(
      ({ name }) => name.toLowerCase() === formData.name.toLowerCase()
    );

    if (checkName) {
      return alert(`${formData.name} is already in contacts.`);
    }

    dispatch(addContactAction(formData));

    toast.success('Element added successfully!', {
      position: 'top-right',
    });

    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Text>Name</Text>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Text>Number</Text>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
