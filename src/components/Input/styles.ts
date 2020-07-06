import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isErrored: boolean;
  isFocused: boolean;
  isFilled: boolean;
  isDisabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 16px;
  width: 100%;
  background: #F8F7FF;
  border-radius: 8px;
  border: 2px solid #F8F7FF;
  color: #9381FF;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c76100;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #9381ff;
      border-color: #9381ff;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #9381ff;
    `}

  ${props =>
    props.isDisabled &&
    css`
      background: ${lighten(0.08, '#b8b8ff')};
    `}

  input {
    border: 0;
    flex: 1;
    background: transparent;
    color: #9381FF;

    &::placeholder {
      color: #9381FF;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c76100;
    color: #f8f7ff;

    &::before {
      border-color: #c76100 transparent;
    }
  }
`;
