/* eslint-disable no-unused-vars */
import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (todo, id) => { },
    delete: (id) => { },
    toggleComplete: (id) => { }
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider