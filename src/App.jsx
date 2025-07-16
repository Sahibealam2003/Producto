import React from 'react'
import { HomePage,CartPage,CategoryProduct,ProductSinglePage,SearchPage } from './pages/pages';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
    <Header/>
    <SideBar/>
    </div>
  )
}

export default App