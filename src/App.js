import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board'
import { Reorder } from 'framer-motion';

function App() {

  const initialState = ['Board 1', 'Board 2']
  const [boards, setBoards] = useState(initialState)

  return (
    <div className='kanban-container'>
      <Reorder.Group axis='x' values={boards} onReorder={setBoards} className='board-container'>
        {
          boards.map(board => (
            <Reorder.Item key={board} value={board} >
              <Board title={board} />
            </Reorder.Item>
          ))
        }
      </Reorder.Group>
    </div>
  );
}

export default App;
