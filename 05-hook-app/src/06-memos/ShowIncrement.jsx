

export const Showincrement = ({increment}) => {
  return (
        <button className="btn btn-primary" onClick={() => {
            increment()
        }}>
            incrementar

        </button>
  )
}
