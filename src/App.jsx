import { useReducer } from 'react'
import { initState, reducer } from './store/store'
import TaskDiv from './components/TaskDiv/TaskDiv'
import FormDiv from './components/FormDiv/FormDiv'
import './App.css'

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

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