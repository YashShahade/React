import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);


  const addValue = () => {
    setCounter(counter + 1)
  }

    const subValue = () => {
    setCounter(counter - 1)
  }
  return(
    <>
       <h1>React course with hitesh{counter}</h1>
       <h2>counter value{counter}</h2>
       <button
       onClick={addValue}>Add value</button>{""}
       <button
       onClick={subValue}>Remove Value</button>{""}
       <p>footer{counter}</p>
    </>
  )
}

export default App
