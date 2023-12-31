import { useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const initialState = [
{
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
},

{
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del alma',
    done: false,
}
]

export const TodoApp = () => {
  
    const [ todos, dispatch] = useReducer(todoReducer, initialState)

    const handleNewTodo = (todo) => {
            console.log({todo});
    }
  
    return (
    <>
        <h1>TodoApp: (10) <samll>pendientes: 2</samll></h1>
        <hr/>

        <div className="row">
            <div className="col-7">
                <TodoList todos = {todos}/>
            </div>
        </div>
        <div className="col-5">
            <h4>Agregar TODO</h4>

                <TodoAdd onNewTodo={ handleNewTodo}/>

            <hr/>
           

        </div>
    </>
  )
}
