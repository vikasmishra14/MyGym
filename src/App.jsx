import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bmi from './components/Bmi'
import Details from './components/Details'
import MyHeader from './components/MyHeader'
import Home from './pages/Home'
import MyFooter from './components/MyFooter'
import PageNotFound from './components/PageNotFound'

const App = () => {

  return (
    <>
      <MyHeader />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/bmi' element={<Bmi />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <MyFooter />
    </>
  )
}

export default App