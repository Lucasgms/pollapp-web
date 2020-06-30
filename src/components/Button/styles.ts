import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  padding: 16px;
  margin-top: 16px;
  width: 100%;
  background-color: #9381ff;
  border-radius: 8px;
  border: none;
  color: #f8f7ff;
  font-weight: 600;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#9381FF')};
  }
`;
