import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import Button from '../../components/Button';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Button onClick={() => history.push('/new-poll')}>
        <FiPlus size={20} />
        New poll
      </Button>
    </Container>
  );
};

export default Dashboard;
