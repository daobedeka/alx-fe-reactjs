import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>The Header</h1>

     <AddRecipeForm />
     <RecipeList />
    </>
  )
}

export default App
