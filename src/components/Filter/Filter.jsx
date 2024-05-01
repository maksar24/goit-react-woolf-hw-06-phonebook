import { Input } from './Filter.styles';

const Filter = ({ onSearch }) => {
  return <Input onChange={onSearch}></Input>;
};

export default Filter;
