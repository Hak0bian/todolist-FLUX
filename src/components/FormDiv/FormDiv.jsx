import st from "./FormDiv.module.css"

const FormDiv = ({state, dispatch}) => {
  return (
    <div>
        <div className={st.formDiv}>
            <input className={st.inp} value={state.title} onChange={(e) => dispatch({type: "inp", payload: e.target.value})}/>
            <button className={st.btn} onClick={() => dispatch({type: "add", payload: state.title})}> Add </button>
            <button className={st.clearBtn} onClick={() => dispatch({type: "clear", payload: []})}> Clear All </button>
        </div>
        { 
            state.error && <p className={st.error}> {state.error} </p> 
        }

        <div className={st.tasksCount}>
            <h3>Tasks - </h3>
            <h3>{state.tasks.length}</h3>
        </div>
    </div>
  )
}

export default FormDiv