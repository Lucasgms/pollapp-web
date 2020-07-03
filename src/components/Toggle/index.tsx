import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container, ToggleContent } from './styles';

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Toggle: React.FC<ToggleProps> = ({ children, name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, error, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <ToggleContent>
        <input ref={inputRef} type="checkbox" {...rest} />
        <span className="slider" />
      </ToggleContent>
      <label htmlFor={fieldName}>{children}</label>
    </Container>
  );
};

export default Toggle;
