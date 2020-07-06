import React, {
  TextareaHTMLAttributes,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Textarea: React.FC<InputProps> = ({
  name,
  icon: Icon,
  disabled,
  ...rest
}) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(!!disabled);
  const { fieldName, error, defaultValue, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });

    setIsDisabled(!!disabled);
  }, [fieldName, registerField, disabled]);

  return (
    <Container
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      isDisabled={!!isDisabled}
    >
      {Icon && <Icon size={20} />}
      <textarea
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        disabled={!!isDisabled}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c76100" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Textarea;
