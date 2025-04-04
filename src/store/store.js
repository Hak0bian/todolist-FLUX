
export const initState = {
    text : "",
    tasks : [],
    error : "",
}

export const reducer = (state, action) => {
    switch(action.type){
        case "inp" :
            return {
                ...state,
                text: action.payload,
                error: ""
            }
        case "add" : 
            if (!state.text.trim()){
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
                        text: action.payload,
                        completed: false,
                        edit: false,
                    }
                ], 
                text: "" 
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
                        text: action.payload.text,
                    }
                    : task
                )
            }

        case "save":
            if(!action.payload.text.trim()) {
                return {
                    ...state,
                }
            }

            return {
                ...state,
                tasks: state.tasks.map((task) => task.id === action.payload.id
                    ? { 
                        ...task, 
                        text: action.payload.text,  
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
            }

        case "clear" :
            return {
                ...state,
                tasks: action.payload
            }

        default :
            return state
    }
}