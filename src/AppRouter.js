import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppHome from './AppHome';
import AppTrabalheConosco from './AppTrabalheConosco';
import Applogininterno from './Applogininterno';
import AppInternoOrcamento from './AppInternoOrcamento';
/*import AppInternoStatusPedidos from './components/AppInternoStatusPedidos';
import AppInternoCadastrodeVendas from './AppInternoCadastrodeVendas';
import AppInternoRH from './AppInternoRH';*/

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppHome />} />
                <Route path="/trabalhe_conosco" element={<AppTrabalheConosco />} />
                <Route path="/login" element={<Applogininterno />} />
                <Route path="/AppInternoOrcamento" element ={<AppInternoOrcamento/>} />
               
                {/* <Route path="/AppInternoRH" element ={<AppInternoRH/>} />
                <Route path="/AppInternoStatusPedidos" element ={<AppInternoStatusPedidos/>} />
                <Route path="/AppInternoCadastrodeVendas" element ={<AppInternoCadastrodeVendas/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
