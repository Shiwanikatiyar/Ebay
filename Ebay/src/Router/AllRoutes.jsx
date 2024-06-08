import React from 'react'
import Register from '../components/Register'
import Home from '../Pages/Home'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../components/SignIn'
import DailyDeals from '../Pages/DailyDeals'
import HelpContact from '../Pages/Help&Contact'
import Sell from '../Pages/Sell'

export const AllRoutes = () => {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/dailydeals' element={<DailyDeals/>}/>
    <Route path='/help&contact' element={<HelpContact/>} />
    <Route path='/sell' element={<Sell/>}/>
   </Routes>
   </>
  )
}
