import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const Text = styled.h3`
  font-size: 1.2em;
  font-weight: normal;
  margin: 0;
`;

export const Input = styled.input`
  height: 45px;
  line-height: 30px;
  padding: 0 5rem;
  padding-left: 3rem;
  border: 2px solid transparent;
  border-radius: 10px;
  outline: none;
  background-color: #cce7db;
  transition: 0.5s ease;
  &:focus,
  &:hover {
    outline: none;
    border-color: #2ea44f;
    background-color: #fff;
    box-shadow: 0 0 0 5px rgb(129 140 248 / 30%);
  }
`;
