import React, { useState } from 'react'

function AddBoard({ boardAdd }) {

    const [value, setValue] = useState('')

    function submitHandler(event) {
        event.preventDefault()
        boardAdd(value)
        setValue('')
    }

  return (
    <form onSubmit={submitHandler}>
        <input type='text' placeholder='добавить доску' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='submit'>add</button>
    </form>
  )
}

export default AddBoard