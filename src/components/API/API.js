export const API = {
    getTodos(dispatch){
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((res) => res.json())
            .then((res) => dispatch({type: "todos", payload: res}))
    }
}