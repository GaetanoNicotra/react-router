import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contacts from './pages/contacts'
import Products from './pages/Products'
import prodotti from './pages/prodotti'
import DetailProduct from './pages/prodotti/DetailProduct'

function App() {

  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Homepage} ></Route>
          <Route path="/about" Component={About} ></Route>
          <Route path="/contacts" Component={Contacts} ></Route>

          <Route path="/products">
            <Route path="" component={Products} />
            <Route path="/:id" component={DetailProduct} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
