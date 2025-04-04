import { LuBookmarkCheck } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import st from "./TaskDiv.module.css"

const TaskDiv = ({task, dispatch}) => {
    return (
        <div className={st.task}>
            {
                task.edit 
                ? <input 
                    className={st.newInp} 
                    value={task.text} 
                    onChange={(e) => dispatch({type: "change", payload: {id: task.id, text: e.target.value}})}
                />
                : <p 
                    className={task.completed ? st.line : ""} 
                    onDoubleClick={() => dispatch({type: "edit", payload: task})}> 
                    {task.text} 
                </p>
            }
            <div className={st.iconsDiv}>
                <button 
                    className={st.save} 
                    onClick={() => dispatch({type: "save", payload: {id: task.id, text: task.text}})}> 
                    <LuBookmarkCheck/> 
                </button>
                <button 
                    className={st.check} 
                    onClick={() => dispatch({type: "check", payload: task})}> 
                    <FaCheck/>
                </button>
                <button 
                    className={st.delete} 
                    onClick={() => dispatch({type: "delete", payload: task.id})}> 
                    <IoCloseSharp/> 
                </button>
            </div>
        </div>
    )
}

export default TaskDiv