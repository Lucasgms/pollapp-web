import styled from 'styled-components';

export const Container = styled.div`
  margin: 24px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  label {
    width: 100%;
    padding: 32px;

    + label {
      margin-top: 12px;
    }

    background-color: #b8b8ff;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  input[type='radio'] {
    visibility: hidden;
    opacity: 0;

    &:checked + label {
      background-color: #9381ff;
    }
  }
`;
