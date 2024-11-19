import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="" element={} />
      <Route path="" element={} />
      <Route path="" element={} /> */}

    </Routes>
  )
}

export default App