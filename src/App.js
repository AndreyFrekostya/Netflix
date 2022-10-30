import React from 'react'
import Home from './pages/home'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Browse from './pages/browse'
import { Routes, Route } from 'react-router-dom'
import * as ROUTES from './constans/routes'
import firebase from './lib/firebase.prod'
const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home/>}/>
      <Route path={ROUTES.SIGNIN} element={<Signin/>}/>
      <Route path={ROUTES.SIGNUP} element={<Signup/>}/>
      <Route path={ROUTES.BROWSE} element={<Browse/>}/>
    </Routes>
  )
}

export default App
