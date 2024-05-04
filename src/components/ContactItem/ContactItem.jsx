import Button from 'components/Button/Button';
import { Item, Text } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactAction } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const deleteContact = () => {
    dispatch(deleteContactAction(id));
    toast.success('Element deleted successfully!', {
      position: 'top-right',
      style: {
        backgroundColor: '#ffcc00',
        color: '#333',
      },
    });
  };

  return (
    <Item>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <Button onClick={deleteContact}>Delete</Button>
    </Item>
  );
};

export default ContactItem;
