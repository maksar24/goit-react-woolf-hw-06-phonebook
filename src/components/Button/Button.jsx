import { CustomButton } from './Button.styled';

const Button = ({ type = 'button', children, ...otherProps }) => {
  return (
    <CustomButton type={type} {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
