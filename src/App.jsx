import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='d-flex align-items-center justify-content-center w-100 flex-column'style={{height:'100vh'}}>
      <div className="d-flex align-items-center justify-content-center flex-column p-5 rounded"style={{backgroundColor:'white'}}>
        <h2 style={{color:'blue'}}>Counter Application</h2>
     <Count/>
      </div>
     </div>
    </>
  )
}

export default App
