import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 64px auto;
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;

  h2 {
    color: #9381ff;
    font-size: 48px;
  }

  p {
    margin: 12px 0;
    color: #9381ff;
  }

  a {
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
