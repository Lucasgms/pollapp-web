import React, { useRef, useCallback } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name required'),
          email: Yup.string()
            .required('E-mail required')
            .email('Enter a valid e-mail address'),
          password: Yup.string().min(6, 'At least 6 characters'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        addToast({
          type: 'success',
          title: 'Registered successfully',
          description: 'You have already been able to log-in on PollApp',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Register error',
          description:
            'An error occurred while trying to register, please try again',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <h1>Register</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Name" icon={FiUser} />
          <Input name="email" type="email" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            icon={FiLock}
          />
          <Button type="submit">Register</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
