import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCouter] = useState(initialValue)

    const increment = (value = 1) => {
        setCouter( counter + value)

    }

    const decrement = (value = 1) =>{
        if (counter === 0) return;

        setCouter(counter - value)
    }

    const reset = () =>{
        setCouter(initialValue)
    }

    return{

        counter,
        increment,
        decrement,
        reset

    }

}