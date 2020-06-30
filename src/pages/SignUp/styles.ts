import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.div`
  margin: auto;
  width: 100%;
  max-width: 500px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #b8b8ff;
  border-radius: 8px;

  h1 {
    color: #fff;
    margin-bottom: 24px;
  }

  > a {
    color: #9381ff;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#9381FF')};
    }
  }
`;

export const Title = styled.h1``;
