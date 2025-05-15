import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contacts from './pages/contacts'
import Products from './pages/Products'


function App() {

  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} ></Route>
          <Route path="/about" Component={About} ></Route>
          <Route path="/contacts" Component={Contacts} ></Route>
          <Route path="/products" Component={Products} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
