import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: calc(100vh - 80px);
  padding-top: 24px;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  margin: auto;
  width: 100%;
  max-width: 500px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #b8b8ff;
  border-radius: 8px;

  h2 {
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

export const OptionsContainer = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;

  p {
    margin: 8px 0;
    color: #fff;
    text-align: left;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #9381ff;
    background-color: transparent;
    color: #9381ff;
  }
`;
