import { Reorder } from 'framer-motion'
import React, { useState } from 'react'
import Card from '../Card/Card'

import style from './Board.module.css'



function Board({ title }) {

  const initialState =['Title Card 1', 'Title Card 2']

  const [cards, setCards] = useState(initialState)
  const [inputValue, setInputValue] = useState('')

  function submitHandler(e) {
    e.preventDefault()
    if(inputValue.trim().length === 0) {
      return
    }
    setCards([...cards, inputValue])
    setInputValue('')
  }

  return (
    <div className={style.board}>
      <h2 className={style.title}>{ title }</h2>
      <form onSubmit={submitHandler} className={style.addForm} >
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className={style.addInput} />
        <button type='submit' className={style.addBtn} >add</button>
      </form>
      <Reorder.Group axis='y' onReorder={setCards} values={cards} className={style.boardList} >
        {
          cards.map((card) => <Card key={card} title={card} />)
        }
      </Reorder.Group>
    </div>
  )
}

export default Board