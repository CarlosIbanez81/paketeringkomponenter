import './App.css';
import Board from './components/Board/Board';
import Cell from './components/Cell/Cell';
import Footer from './components/Footer/Footer';
import Game from './components/Game/Game';
import React from 'react';  
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Board />
      <Cell />
      <Footer />
      <Game />
      <Header />   
     </>
  );
}

export default App;
