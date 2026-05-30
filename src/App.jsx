
import { useDispatch } from 'react-redux'
import './App.css'

import Header from "./Header"
import Product from './Product'
import { clearItem } from './redux/slice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartList from './CartList'

function App() {

  const dispatch=useDispatch()

  return (
    <div>
      <BrowserRouter>

      <Header/>
      
      <Routes>
      <Route path='/' element={<Product/>}></Route>
      <Route path='/cart' element={<CartList/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
