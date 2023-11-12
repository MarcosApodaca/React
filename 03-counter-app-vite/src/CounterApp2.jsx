import PropTypes from 'prop-types'

export const CounterApp2 = ({valor}) => {
  return (
    <>
        <h1>Hola que tal</h1>
        <h2>{valor}</h2>
    
    </>
  )
}

CounterApp2.propTypes = {
    valor: PropTypes.number
}
