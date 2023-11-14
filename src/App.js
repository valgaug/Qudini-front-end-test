import React from 'react';
import 'normalize.css';
import Container from './Layouts/Container';
import Logo from './Layouts/Logo';
import Navigation from './Layouts/Navigation';
import QueueScreen from './Components/Queue/QueueScreen';
import './App.css';
import logo from './qudini-logo.png';
import Content from './Layouts/Content';

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
