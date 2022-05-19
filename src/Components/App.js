import React, { useState } from 'react'
import TodoList from './TodoList'

function App() {

//   const items = [
//     {
//      id: 1,
//      text: 'Membuang sampah',
//      completed: false
//    },
//    {
//      id: 2,
//      text: 'Membuat roti',
//      completed: false
//    },
//    {
//      id: 3,
//      text: 'Belajar React',
//      completed: false
//    }
//  ]
  const [items, setItems] = useState([])

  const title = 'Things to do'

  const addNewItem = (text) => {
    setItems( items => {
    const nextId = items.length + 1
    const newItem = {
        id: nextId,
        text: text
    }
    return [...items,newItem]
    })
  }

  return (
    <div className="container">
      <div className="row">
      <TodoList items={items} title={title} addNewItem={addNewItem} />
      </div>
    </div>
  )
}

export default App
