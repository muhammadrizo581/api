import React from 'react'
import Header from './Components/Header/Header'
import Users from './Components/Users/Users'
import Footer from './Components/Footer/Footer'
import Products from './Components/Products/Products'
import Posts from './Components/Posts/Posts'


const App = () => {
  return (
    <>
      <Header />
      <Users />
      <Posts />
      <Products/>
      <Footer/>
    </>
  )
}

export default App