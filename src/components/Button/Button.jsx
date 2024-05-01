import { CustomButton } from './Button.styles';

const Button = ({ children, action, type }) => {
  return (
    <CustomButton type={type} onClick={action}>
      {children}
    </CustomButton>
  );
};

export default Button;
