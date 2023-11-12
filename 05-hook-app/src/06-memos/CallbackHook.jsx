import { useState } from "react"
import { Showincrement } from "./Showincrement"


export const CallbackHook = () => {
  
   const [counter, setCounter] = useState(10)
  
    const incrementFather = () => {
            setCounter(counter + 2)
    }
    return (
    <>
    
        <h1>useCallback Hook: {counter}</h1>
        <hr/>
        
        <Showincrement increment={incrementFather}/>
    </>
  )
}
