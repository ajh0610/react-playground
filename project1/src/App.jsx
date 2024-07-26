import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [color, setColor] = useState(0);
  const colorArray = ["white", "black", "purple", "green", "yellow", "red"];
  const ref = useRef(0);

  useEffect(()=>{
    ref.current.style.backgroundColor = colorArray[color];
  }, [color])
  return (
    <>
    <div ref={ref} style={{minHeight: "100vh"}}>
      <Navbar setColor={setColor}></Navbar>    
    </div>
    </>
  )
}

export default App
