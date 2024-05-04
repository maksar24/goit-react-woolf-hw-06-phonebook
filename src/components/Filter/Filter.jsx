import { useDispatch } from 'react-redux';
import { Input } from './Filter.styled';
import { setValue } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const searchContact = e => {
    dispatch(setValue(e.target.value));
  };

  return <Input onChange={searchContact}></Input>;
};

export default Filter;
