import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'
import Footer from './Footer'

const TodoList = (props) => {
  return (
    <div>
        <div className="todo-list">
        <Header title={props.title} addNewItem={props.addNewItem} />
          <ul className="list-group list-group-flush">
          {props.items.map((item, index) => (
            <TodoItem item={item} key={index} />
          ))}
          </ul>
            <Footer count={props.items.length} />
        </div>
    </div>
  )
}

export default TodoList