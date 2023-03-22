import './App.css'
import Card from './components/Card'
import { Todo } from './models/todo'
import { todos } from './common/todos'
import { useState } from 'react'

function App() {
  const [myTodos, setMyTodos] = useState<Todo[] | null>(todos);
  const [title, setTitle] = useState("");
  var todosJson = '';

  fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((json) => todosJson = json);

  const addTodo = () => {
    if(!myTodos)
      return;
    
    const newTodo: Todo = {
      userId: 1,
      id: myTodos[myTodos.length - 1].id + 1,
      title: title,
      completed: false
    } 

    const newTodos = [...myTodos, newTodo];
    setMyTodos(newTodos);
  }

  const removeTodo = (id: number) => {
    if(!myTodos)
    return;

    const newTodos = myTodos.filter(x => x.id !== id);
    setMyTodos(newTodos);
  }

  return (
    <>
        <h2>My Todo's</h2>
        <div className='cardGrid'>
          {myTodos && myTodos.map(todo => (
            <Card todo={todo} removeClick={() => removeTodo(todo.id)} key={todo.id}></Card>
          ))}
        </div>
        <div className='addTodo'>
          <form>
            <textarea id='title' name='title' placeholder='Name' rows={3} cols={50} value={title}
             onChange={(e) => setTitle(e.target.value)}></textarea>
          </form>
          <button onClick={addTodo}>Add Todo</button>
        </div>
    </>
  )
}

export default App
