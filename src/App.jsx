import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Shop from './Component/Shop/Shop'
import Catagory from './Component/Catagory/Catagory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Catagory></Catagory>
    </div>
  )
}

export default App
