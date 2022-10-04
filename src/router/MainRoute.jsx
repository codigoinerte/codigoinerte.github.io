import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutScreen, ContactScreen, HomeScreen, NotFoundScreen, WorkScreen } from '../screens'

export const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="work" element={<WorkScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path="*" element={<NotFoundScreen />} />        
    </Routes>
  )
}
