
export const initState = {
    title : "",
    tasks : [],
    error : "",
}

export const reducer = (state, action) => {
    switch(action.type){
        case "todos":
            return {
                ...state,
                tasks: action.payload 
            };
        case "inp" :
            return {
                ...state,
                title: action.payload,
                error: ""
            };
        case "add" : 
            if (!state.title.trim()){
                return {
                    ...state,
                    error: "Field is Required !"
                }
            }

            return {
                ...state,
                tasks: [
                    ...state.tasks, 
                    {
                        id: Date.now(),
                        title: action.payload,
                        completed: false,
                        edit: false,
                    }
                ], 
                title: "" 
            };
        case "edit" : 
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id
                    ? {
                        ...task,
                        edit: !task.edit,
                    }
                    : task
                )
            };
        case "change" : 
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id
                    ? {
                        ...task,
                        title: action.payload.title,
                    }
                    : task
                )
            };
        case "save":
            if(!action.payload.title.trim()) {
                return {
                    ...state,
                }
            }

            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id
                    ? { 
                        ...task, 
                        title: action.payload.title,  
                        edit: false  
                      }
                    : task
                )
            };
        case "check":
            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id 
                    ? { 
                        ...task, 
                        completed: !task.completed 
                      } 
                    : task 
                )
            };
        case "delete" : 
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case "clear" :
            return {
                ...state,
                tasks: action.payload
            };
        default :
            return state
    }
}