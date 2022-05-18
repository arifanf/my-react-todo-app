import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'

const TodoList = (props) => {
  return (
    <div>
        <div className="todo-list">
        <Header title={props.title} />
          <ul className="list-group list-group-flush">
          {props.items.map((item, index) => (
            <TodoItem item={item} key={index} />
          ))}
          </ul>
        </div>
    </div>
  )
}

export default TodoList