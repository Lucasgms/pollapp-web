import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import Button from '../../components/Button';
import api from '../../services/api';

import { Container, PollsList, PollCard } from './styles';

interface PollData {
  id: string;
  title: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const history = useHistory();
  const [userPolls, setUserPolls] = useState<PollData[]>([]);

  useEffect(() => {
    async function getUserPolls(): Promise<void> {
      const response = await api.get('/polls');

      setUserPolls(response.data);
    }

    getUserPolls();
  }, []);

  return (
    <Container>
      <Button onClick={() => history.push('/new-poll')}>
        <FiPlus size={20} />
        New poll
      </Button>
      {userPolls.length > 0 && (
        <div>
          <h2>My Polls</h2>
          <PollsList>
            {userPolls.map(poll => (
              <PollCard
                key={poll.id}
                onClick={() => history.push(`/polls/${poll.id}`)}
              >
                <div>
                  <h3>{poll.title}</h3>
                  <p>{poll.description}</p>
                </div>
                <FiArrowRight size={24} color="#fff" />
              </PollCard>
            ))}
          </PollsList>
        </div>
      )}
    </Container>
  );
};

export default Dashboard;
