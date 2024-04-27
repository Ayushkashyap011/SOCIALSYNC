import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserPage from './UserPage'
import LoginUser from './LoginUser'
import RegisterPageC from './RegisterPageC'
import Dashboard from './Dashboard'
import Home from './Home'
import User from './User'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/user/login' element={<LoginUser/>}></Route>
        <Route path="/user/id" element={<UserPage/>}></Route>
        <Route path="/company/register" element={<RegisterPageC/>}></Route>
        <Route path='/company' element={<Dashboard/>}></Route>
    </Routes>
  )
}
export default AllRoutes;
