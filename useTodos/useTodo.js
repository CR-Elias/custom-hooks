import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const init =() =>{
    return  JSON.parse(localStorage.getItem("todos"))||[];

}

export const useTodo = () => {
const [todos, dispatch] = useReducer(todoReducer, [],init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
    const handleNewTodo = (todo) => {
        const action ={
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) =>{
        const action ={
            type: '[TODO] Remove Todo',
            payload: id,
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) =>{
        const action ={
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatch(action);
    }



  return {
    todos,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}

