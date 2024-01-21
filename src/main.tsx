import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet, Link } from 'react-router-dom'
import App from './App.tsx'
import Main from './Pages/Main.tsx'
import './index.css'

import NotFound from './Pages/NotFound.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
)