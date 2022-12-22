import React, { useState } from 'react'
import './App.css';
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App() {
  let [colors, setColors] = useState([
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'
  ])

  let colorMap = colors.map((color, i) => {
    return (
      <div className="App">
      <ColorBlock key={i} color={color} />
      </div>
    )
  })

  const addColor = (newColor)=> {
    setColors([ ...colors, newColor])
  }

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}/>
    </div>
  )
}

export default App;
