import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SignupPage from './pages/auth/Signup'
import HomePage from './pages/main/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  )
}

export default App
