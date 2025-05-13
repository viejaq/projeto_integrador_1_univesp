import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppHome from './frontEnd/AppHome';
import AppTrabalheConosco from './frontEnd/AppTrabalheConosco';
import Applogininterno from './frontEnd/Applogininterno';
import AppInternoOrcamento from './frontEnd/appInterno/AppInternoOrcamento';
import AppInternoStatusPedido from './frontEnd/appInterno/AppInternoStatusPedido'
import AppInternoCadastrodeVenda from './frontEnd/appInterno/AppInternoCadastrodeVenda';
import AppInternoRH from './frontEnd/appInterno/AppInternoRH';
import AppInternoDashboard from './frontEnd/appInterno/AppInternoDashboard';

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppHome />} />
                <Route path="/trabalhe_conosco" element={<AppTrabalheConosco />} />
                <Route path="/login" element={<Applogininterno />} />
                <Route path="/AppInternoDashboard" element={<AppInternoDashboard />} />
                <Route path="/AppInternoOrcamento" element={<AppInternoOrcamento />} />
                <Route path="/AppInternoRH" element={<AppInternoRH />} />
                <Route path="/AppInternoStatusPedido" element={<AppInternoStatusPedido />} />
                <Route path="/AppInternoCadastrodeVenda" element={<AppInternoCadastrodeVenda />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
