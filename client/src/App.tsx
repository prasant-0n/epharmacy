import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './pages/home'
import Product from './pages/product'
import ProductList from './pages/productlist'
import PageNotFound from './pages/pageNotFound'

function App() {

  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Product />} />
        <Route path="/search/:query" element={<ProductList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
