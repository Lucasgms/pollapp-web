import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { useParams, Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import AnswerOptions from '../../components/AnswerOptions';
import Button from '../../components/Button';

import { Container } from './styles';

interface UserObject {
  id: string;
}

interface PollOwner {
  name: string;
}

interface PollOptionData {
  id: string;
  label: string;
}

interface PollOptionsObject {
  options: PollOptionData[];
}

interface PollData {
  id: string;
  title: string;
  description: string;
  options: PollOptionsObject;
  is_public: boolean;
  hash: string;
  owner: PollOwner;
}

interface NewAnswerFormData {
  option: Array<string>;
}

const Answer: React.FC = () => {
  const { hash } = useParams();
  const { user } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const [poll, setPoll] = useState<PollData>({} as PollData);
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function getPollData(): Promise<void> {
      const { data: pollData } = await api.get(`public-polls/${hash}`);
      setPoll({ ...pollData, owner: pollData.__owner__ });
    }

    getPollData();
  }, [hash]);

  const handleSubmit = useCallback(
    async ({ option }: NewAnswerFormData) => {
      try {
        const userObject = user as UserObject;
        formRef.current?.setErrors({});

        const [chooseOption] = option;

        await api.post('answers', {
          poll_id: poll.id,
          option: chooseOption,
          user_id: userObject.id,
        });

        addToast({
          type: 'success',
          title: 'Answer registered',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Create new Poll error',
          description:
            'An error occurred while trying to create a new Poll, please try again',
        });
      }
    },
    [addToast, poll, user],
  );

  return (
    <Container>
      <h2>{poll.title}</h2>
      <p>
        a poll by:
        <strong>{` ${poll.owner?.name}`}</strong>
      </p>
      <p>{poll.description}</p>
      <Form ref={formRef} onSubmit={handleSubmit}>
        {poll.options && (
          <AnswerOptions name="option" options={poll.options.options} />
        )}
        {!poll.is_public && !user ? (
          <div>
            <p>This Poll is not public, please login to answer.</p>
            <Link to="/signin">
              Login
              <FiLogIn size={16} />
            </Link>
          </div>
        ) : (
          <Button type="submit">Answer</Button>
        )}
      </Form>
    </Container>
  );
};

export default Answer;
