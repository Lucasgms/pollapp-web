import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Routes from './routes';
import Menu from './components/Menu';

import AppProvider from './hooks';

const App: React.FC = () => (
  <Router>
    <GlobalStyle />
    <AppProvider>
      <Menu />
      <Routes />
    </AppProvider>
  </Router>
);

export default App;
