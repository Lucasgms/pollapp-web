import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > label {
    color: #fff;
    cursor: pointer;
  }
`;

export const ToggleContent = styled.label`
  position: relative;
  margin-right: 12px;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: #9381ff;

      &:before {
        transform: translateX(26px);
        background-color: #f8f7ff;
      }
    }

    &:focus + .slider {
      box-shadow: 0 0 1px #9381ff;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f8f7ff;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: #9381ff;
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;
