import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  width: 100%;
  height: 80px;
  padding: 12px;
  background-color: #9381ff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  color: #f8f7ff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    color: inherit;
    font-size: 36px;
    font-weight: bold;
  }
`;

export const Navigation = styled.nav`
  ul {
    padding: 0;
    list-style: none;

    li {
      font-size: 24px;
      font-weight: bold;

      button {
        border: 0;
        background: transparent;
        display: flex;
        align-items: center;
        color: inherit;
        font-size: 18px;
        font-weight: bold;
        transition: color 0.2s;

        &:hover {
          color: ${shade(0.2, '#f8f7ff')};
        }
      }

      svg {
        margin-left: 8px;
      }
    }
  }
`;
