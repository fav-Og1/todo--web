import { Header } from "./components/Header"
import { TodoInput } from "./components/TodoInput"
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/Todolist"
import { useState, useEffect } from "react"


function App() {
  // const todos =[   { input: 'Hello! Add your first todo!', complete: true },
  //  { input: 'Get the groceries!', complete: false },
  //  { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos,setTodos]= useState([ { input: 'Hello! Add your first todo!', complete: true }])

  const [selectedTab, setSelectedTab] = useState('All')

  function handleAddTodo (newTodo){
     const newTodoList = [...todos, {input: newTodo, complete: false}]
     setTodos(newTodoList)
     handleTodoData(newTodoList)
  }

  function handleEditTodo(index){
      let newTodoList = [...todos]
      let completedTodo = todos[index]
       completedTodo['complete'] = true
       newTodoList[index] = completedTodo
       setTodos(newTodoList)
        handleTodoData(newTodoList

        )
  }

function handleDeleteTodo (index){
  let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
  })
  setTodos(newTodoList)
  handleTodoData(newTodoList)
}

function handleTodoData (currTodos){
  localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
}
    useEffect( () => {
       if (!localStorage || !localStorage.getItem('todo-app')) 
        {return}
        let db =JSON.parse(localStorage.getItem('todo-app'))
        setTodos(db.todos)
    }, [

    ])

  return (
    <>
      <Header todos={todos}/>

      <Tabs selectedTab = {selectedTab}
        setSelectedTab= {setSelectedTab}
      todos={todos}/>

      <TodoList todos={todos}
       selectedTab = {selectedTab}
       handleDeleteTodo = {handleDeleteTodo}
       handleEditTodo={handleEditTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo}
                todos={todos}/>
       
    </>
  )
}

export default App
