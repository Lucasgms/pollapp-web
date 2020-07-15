import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface PollOptionsObject {
  id: string;
  label: string;
}

interface AnswerOptionsProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: PollOptionsObject[];
}

const AnswerOptions: React.FC<AnswerOptionsProps> = ({
  name,
  options,
  ...rest
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, defaultValue = [], registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.filter(ref => ref.checked).map(ref => ref.value);
      },
      setValue: (refs: HTMLInputElement[], values: string[]) => {
        refs.forEach(ref => {
          if (values.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      {options.map((option, index) => (
        <React.Fragment key={option.id}>
          <input
            ref={ref => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            name={fieldName}
            value={option.id}
            type="radio"
            id={option.id}
            defaultValue={defaultValue[index]}
            {...rest}
          />
          <label htmlFor={option.id}>
            <span>{option.label}</span>
          </label>
        </React.Fragment>
      ))}
    </Container>
  );
};

export default AnswerOptions;
