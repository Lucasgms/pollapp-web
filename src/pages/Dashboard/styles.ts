import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 200px);
  width: 100vw;
  padding: 24px 12px;

  button {
    display: flex;
    width: 150px;
    margin-left: auto;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
    justify-content: space-around;
  }
`;
