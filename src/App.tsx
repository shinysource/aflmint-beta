import React from 'react'
import { Routes, Route } from 'react-router-dom'

import SignupPage from './pages/auth/Signup'
import HomePage from './pages/main/Home'
import Thanks from './pages/main/Thanks'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/register" element={<SignupPage />}></Route>
      <Route path="/thank-you" element={<Thanks />}></Route>
    </Routes>
  )
}

export default App
