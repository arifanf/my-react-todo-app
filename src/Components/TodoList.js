import React from 'react'
import Header from './Header'
import PaginateList from './PaginateList'
import Footer from './Footer'

const TodoList = (props) => {
  return (
    <div>
        <div className="todo-list">
        <Header title={props.title} addNewItem={props.addNewItem} />
        <PaginateList items={props.items} initialPage={1} itemPerPage={2} />
            <Footer count={props.items.length} />
        </div>
    </div>
  )
}

export default TodoList