import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import Container from './container/Container';
import Attribution from './components/Attribution/Attribution';

const App = () => {
  return (
    <Container>
      <Card />
      <Attribution />
    </Container>
  );
};

export default App;
