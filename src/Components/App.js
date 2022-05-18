import TodoList from './TodoList'

function App() {

  const items = [
    {
     id: 1,
     text: 'Membuang sampah',
     completed: false
   },
   {
     id: 2,
     text: 'Membuat roti',
     completed: false
   },
   {
     id: 3,
     text: 'Belajar React',
     completed: false
   }
 ]

 const title = 'Things to do'

  return (
    <div className="container">
      <div className="row">
        <TodoList items={items} title={title} />
      </div>
    </div>
  )
}

export default App
