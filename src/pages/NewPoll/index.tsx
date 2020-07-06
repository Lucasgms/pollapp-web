import React, { useRef, useCallback, useState } from 'react';
import { FiType, FiInfo, FiPlus, FiList } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { uuid } from 'uuidv4';
import { useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Container, Content, OptionsContainer } from './styles';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import Toggle from '../../components/Toggle';

interface PollOptionsObject {
  id: string;
  label: string;
}

interface NewPollFormData {
  title: string;
  description: string;
  pollOptions: Array<PollOptionsObject>;
  isPublic: boolean;
}

interface PollOptionData {
  label: string;
}

const NewPoll: React.FC = () => {
  const { user } = useAuth();
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [pollOptions, setOptions] = useState<PollOptionData[]>([
    {
      label: '',
    },
    {
      label: '',
    },
  ]);

  const addNewOption = useCallback(() => {
    setOptions([
      ...pollOptions,
      {
        label: '',
      },
    ]);
  }, [pollOptions]);

  const handleSubmit = useCallback(
    async (data: NewPollFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          title: Yup.string().required('Title required'),
          options: Yup.array().min(2, 'Minimum two options required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const optionsWithId = data.pollOptions.map(({ label }) => ({
          id: uuid(),
          label,
        }));

        await api.post('polls', {
          options: { options: optionsWithId },
          owner_id: user,
          ...data,
        });

        addToast({
          type: 'success',
          title: 'New Poll created successfully',
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
    [addToast, history, user],
  );

  return (
    <Container>
      <Content>
        <h2>Create new poll</h2>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="title" type="text" placeholder="Title" icon={FiType} />
          <Textarea
            name="description"
            placeholder="Description"
            icon={FiInfo}
          />
          <OptionsContainer>
            <p>Options: </p>
            {pollOptions.map((option, index) => (
              <Input
                key={index}
                name={`pollOptions[${index}]${option.label}`}
                type="text"
                placeholder={`Option ${index + 1}`}
                defaultValue={`Option ${index + 1}`}
                icon={FiList}
              />
            ))}
            <Button onClick={addNewOption}>
              <FiPlus size={18} />
              Add option
            </Button>
          </OptionsContainer>
          <Toggle name="isPublic" id="isPublic" defaultChecked>
            Only accept logged user's answers
          </Toggle>
          <Button type="submit">Create</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default NewPoll;
