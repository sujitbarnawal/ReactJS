import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(0)

  // let counter = 5

  function addValue() {
    if(counter<20){
    counter++
    setCounter(counter)
    }else{
      setCounter(counter)
    }
  }
  function removeValue() {
    if(counter>0){
    counter--
    setCounter(counter)
    }else{
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Sujit</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
