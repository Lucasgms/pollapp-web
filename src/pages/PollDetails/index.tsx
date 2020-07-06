import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { uuid } from 'uuidv4';
import {
  FiType,
  FiInfo,
  FiPlus,
  FiList,
  FiShare2,
  FiEdit,
} from 'react-icons/fi';
import api from '../../services/api';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';
import Toggle from '../../components/Toggle';

import { Container, Content, OptionsContainer, EditButton } from './styles';

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
}

const PollDetails: React.FC = () => {
  const { id } = useParams();
  const formRef = useRef<FormHandles>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [poll, setPoll] = useState<PollData>({} as PollData);

  useEffect(() => {
    async function getPollData(): Promise<void> {
      const { data: pollData } = await api.get(`polls/${id}`);
      setPoll(pollData);
    }

    getPollData();
  }, [id]);

  const addNewOption = useCallback(() => {
    const newOptions = Object.assign(poll.options);

    newOptions.options.push({
      id: uuid(),
      label: '',
    });

    setPoll({
      ...poll,
      options: newOptions,
    });
  }, [poll]);

  const handleSubmit = useCallback(() => {
    /*
      TODO: update method submit.
    */
  }, []);

  const sharePoll = useCallback(() => {
    /*
      TODO: share method.
    */
  }, []);

  return (
    <Container>
      <Content>
        <h2>Poll details</h2>
        <EditButton
          type="button"
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          <FiEdit size={24} color="#fff" />
        </EditButton>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="title"
            type="text"
            placeholder="Title"
            icon={FiType}
            defaultValue={poll.title}
            disabled={!isEditing}
          />
          <Textarea
            name="description"
            placeholder="Description"
            icon={FiInfo}
            defaultValue={poll.description}
            disabled={!isEditing}
          />
          <OptionsContainer>
            <p>Options: </p>
            {poll.options?.options.map((option, index) => (
              <Input
                key={option.id}
                name={`pollOptions[${index}]${option.label}`}
                type="text"
                placeholder={`Option ${index + 1}`}
                defaultValue={option.label}
                icon={FiList}
                disabled={!isEditing}
              />
            ))}
            {isEditing && (
              <Button onClick={addNewOption}>
                <FiPlus size={18} />
                Add option
              </Button>
            )}
          </OptionsContainer>
          <Toggle
            name="isPublic"
            id="isPublic"
            defaultChecked
            disabled={!isEditing}
          >
            Only accept logged user's answers
          </Toggle>
          {isEditing ? (
            <Button type="submit">Save</Button>
          ) : (
            <div>
              <Button onClick={sharePoll}>
                Share
                <FiShare2 size={20} />
              </Button>
            </div>
          )}
        </Form>
      </Content>
    </Container>
  );
};

export default PollDetails;
