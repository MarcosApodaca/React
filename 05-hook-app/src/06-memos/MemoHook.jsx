import { useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavyStuff = ( iterationNumbre = 100) =>{
  for( let i = 0; i < iterationNumbre; i++) {
    console.log('alli vamos');
  }

  return `${iterationNumbre} iteraciones realizadas`
}


export const MemoHook = () => {
    
    const {counter, increment} = useCounter(10)

    return (
    <>
            <h1>Counter: <small>{counter}</small> </h1>
            <hr/>

            <h4>{heavyStuff(5000)}</h4>

            <button className="btn btn-primary" onClick={() => increment}>
                +1
            </button>
    
    </>
  )
}
