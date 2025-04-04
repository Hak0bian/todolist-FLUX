import { useEffect, useReducer } from 'react'
import { initState, reducer } from './store/store'
import { FormDiv, TaskDiv, API } from "./components"
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    API.getTodos(dispatch)
  }, [])

  return (
    <section className="app">
      <FormDiv state={state} dispatch={dispatch} />
      {
        state.tasks.map((task) => {
          return (
            <TaskDiv task={task} key={task.id} dispatch={dispatch} />
          )
        })
      }
    </section>
  )
}

export default App