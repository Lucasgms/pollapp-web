import React, { InputHTMLAttributes, useRef, useEffect, useState } from 'react';
import { useField } from '@unform/core';

import { Container, ToggleContent } from './styles';

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Toggle: React.FC<ToggleProps> = ({
  children,
  name,
  disabled,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);
  const [isDisabled, setIsDisabled] = useState(!!disabled);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });

    setIsDisabled(!!disabled);
  }, [fieldName, registerField, disabled]);

  return (
    <Container>
      <ToggleContent isDisabled={!!isDisabled}>
        <input
          ref={inputRef}
          type="checkbox"
          {...rest}
          defaultValue={defaultValue}
          disabled={!!isDisabled}
        />
        <span className="slider" />
      </ToggleContent>
      <label htmlFor={fieldName}>{children}</label>
    </Container>
  );
};

export default Toggle;
