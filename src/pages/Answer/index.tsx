import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import { Container } from './styles';

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

const Answer: React.FC = () => {
  const { hash } = useParams();
  const [poll, setPoll] = useState<PollData>({} as PollData);

  useEffect(() => {
    async function getPollData(): Promise<void> {
      const { data: pollData } = await api.get(`public-polls/${hash}`);
      setPoll(pollData);
    }

    getPollData();
  }, [hash]);

  return <Container>Resposta</Container>;
};

export default Answer;
