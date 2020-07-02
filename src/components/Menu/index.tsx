import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { Container, Navigation } from './styles';

const Menu: React.FC = () => {
  const { user, signOut } = useAuth();
  const history = useHistory();

  const handleLogout = useCallback(() => {
    signOut();
    history.push('/');
  }, [history, signOut]);

  return (
    <Container>
      <button type="button">PollApp</button>
      <Navigation>
        <ul>
          <li>
            {user ? (
              <button type="button" onClick={handleLogout}>
                Logout
                <FiLogOut size={20} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  history.push('/');
                }}
              >
                Login
                <FiLogIn size={20} />
              </button>
            )}
          </li>
        </ul>
      </Navigation>
    </Container>
  );
};

export default Menu;
