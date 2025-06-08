import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EthoSUSJobsVision from './EthoSUSJobsVision';
import PainelGestor from './PainelGestor';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EthoSUSJobsVision />} />
        <Route path="/gestor" element={<PainelGestor />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
