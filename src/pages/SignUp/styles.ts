import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  margin: auto;
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 450px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #b8b8ff;
  border-radius: 8px;

  h1 {
    color: #fff;
    margin-bottom: 24px;
  }

  form {
    width: 100%;
    text-align: center;
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
