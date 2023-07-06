import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Joke from "./components/Joke"
import Profile from "./pages/Profile"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Joke /> }></Route>
          <Route path='/about' element={<Profile /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App