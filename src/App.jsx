import { useState } from 'react'
import './App.css'

function App() {
  const [backg,setBackg] = useState("white")
  const [buttonC,setButtonC] = useState("white")
  const [textC,setTextC] = useState("#1b1b1b")
  function handleClick(){
    setBackg(backg === 'white'? 'black' : 'white')
    setButtonC(buttonC === 'white'? '#1b1b1b' : 'white')
    setTextC(textC === '#1b1b1b' ? "#ffa31a" : '#1b1b1b')
  }
  return (
    <section style={{backgroundColor:backg,color: textC}}>
      <button 
        style={{
          buttonC,
          color:textC,
          border:`2px solid ${textC}`
        
        }}
        onClick={handleClick}  
      >
        {backg === 'white'? 'Dark' : 'White'}
      </button>
      <section className='content'>
        <h1>Welcome to the real world</h1>
      </section>
    </section>
  )
}

export default App
