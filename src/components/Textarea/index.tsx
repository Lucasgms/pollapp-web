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

const Textarea: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
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
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <textarea
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
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
