import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router";
import NavBar from './components/NavBar'
import Login from './components/Login'
import Register from './components/Register'
import CartOverview from './components/CartOverview'
import UserProfile from './components/UserProfile'
import TrackOrder from './components/TrackOrder'
import ProductDetails from './components/ProductDetails'
import SearchProduct from './components/SearchProduct'
import ProductList from './components/ProductList'
import Foooter from './components/Foooter'
import Banner from './components/Banner'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
<>
{/* <Banner /> */}
{/* <NavBar /> */}
{/* <Login /> */}
{/* <Register /> */}
{/* <CartOverview /> */}
{/* <UserProfile /> */}
{/* <TrackOrder /> */}
{/* <ProductDetails /> */}
{/* <SearchProduct /> */}
{/* <ProductList mainPage={true}/> */}
{/* <Foooter /> */}
{/* <Home /> */}
<Home />
{/* <BrowserRouter>
    <Routes>
      <Route path="/hello" element={<App />} />
      <Route element={<PageNotFound />} />
    </Routes>
  </BrowserRouter> */}
</>
  )
}

export default App
