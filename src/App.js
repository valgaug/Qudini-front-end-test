import React from 'react';
import 'normalize.css';
import Container from './components/Container';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import QueueScreen from './Queue/QueueScreen';
import './App.css';
import logo from './qudini-logo.png';
import Content from './components/Content';

const App = () => (
  <Container>
    <Navigation>
      <Logo src={logo} />
    </Navigation>
    <Content>
      <QueueScreen />
    </Content>
  </Container>
);

export default App;
