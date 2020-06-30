import React, { useRef, useCallback } from 'react';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    console.log('submit');
  }, []);

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
