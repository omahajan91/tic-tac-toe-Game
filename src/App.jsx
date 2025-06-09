import React from 'react'
import { useState } from 'react'
import { HashRouter as Router } from 'react-router-dom';

import './App.css'
import Board from './Components/Board'

function App() {

  return (
    <>
      <div className="App">
      {/* <h1>Tic-Tac-Toe</h1> */}
      <Board />
      </div>
    </>
  )
}

export default App
