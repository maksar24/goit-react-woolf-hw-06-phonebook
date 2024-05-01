import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Text = styled.h3`
  font-size: 1.2em;
  font-weight: normal;
  margin-bottom: 20px;
`;
