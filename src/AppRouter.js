import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import AppHome from './AppHome'
import AppTrabalheConosco from './AppTrabalheConosco'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <AppHome />
                } />

                <Route path="/trabalhe_conosco" element={
                    <AppTrabalheConosco />
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter