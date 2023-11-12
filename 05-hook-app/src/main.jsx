import React from 'react'
import ReactDOM from 'react-dom/client'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'
import './index.css'
// import { CounterWithCustomHooks } from './01-useState/counterWithCustomHooks'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWhitCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-userRef/FocusScreen'
// import { Layaout } from './05-useLayoutEffect/Layaout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <TodoApp />
  //  </React.StrictMode>,
)
