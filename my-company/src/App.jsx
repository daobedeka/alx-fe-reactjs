import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path='' element={<Home />}>
      </Route>
      <Route path='Home' element={<Home />}>
      </Route>

      <Route path='About' element={<About />}></Route>
      <Route path='Services' element={<Services />}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
    </Routes>


    </BrowserRouter>
      
    </>
  )
}

export default App
