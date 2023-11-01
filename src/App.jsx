import { useState } from 'react'
import { NavBar } from './components/NavBar'
import { Provider } from 'react-redux'
import {store} from './redux/store.js'
import { Hero } from './components/Hero'
import Feature from './components/Feature'
import Trending from './components/Trending'
import {Toaster} from "react-hot-toast"
import Banner from './components/Banner'
import NewArrivals from './components/NewArrivals'
import Footer from './components/Footer'
import Cart from './components/Cart'
const App = () => {
  const [showCart,setShowCart]=useState(false)
  return (
    <div>
      <Provider store={store}>
       <NavBar setShowCart={setShowCart}/>
       {showCart&&<Cart setShowCart={setShowCart}/>}
       <Hero/>
       <Feature/>
       <Trending/>
       <Toaster  reverseOrder={false}/>
       <Banner/>
       <NewArrivals/>
       <Footer/>
      </Provider>
    </div>
  )
}

export default App