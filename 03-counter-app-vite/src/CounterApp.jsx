import { useState } from 'react'
import PropTypes from 'prop-types'


export const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value)

  function handleAdd(event) { 
      setCounter(counter + 1)
  }

  function menos(){
      setCounter(counter - 1)
  }

  function reset(){
    setCounter(value)
  }
  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd}> +1 </button>
        <button onClick={menos}> -1 </button>
        <button onClick={reset}> reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number,
 }