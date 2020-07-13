import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 200px);
  width: 100vw;
  padding: 24px 12px;

  button {
    display: flex;
    margin-left: auto;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
    justify-content: center;

    @media screen and (min-width: 768px) {
      width: 150px;
      justify-content: space-around;
    }

    svg {
      margin-right: 12px;
    }
  }

  h2 {
    margin: 16px 0;
  }
`;

export const PollsList = styled.div`
  margin-top: 24px;
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 12px;
  }
`;

export const PollCard = styled.div`
  padding: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 12px;
  background-color: #b8b8ff;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s;

  + div {
    margin-top: 16px;

    @media screen and (min-width: 768px) {
      margin-top: 0;
    }
  }

  &:hover {
    background-color: #9381ff;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

    svg {
      transform: translateX(4px);
    }
  }

  p {
    margin-top: 12px;
  }

  svg {
    transition: all 0.2s;
  }
`;
