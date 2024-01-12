import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import {Somos} from './pages/Somos.jsx'
import { Productos} from './pages/Productos.jsx'
import {Contacto} from './pages/Contacto.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProteinasNac } from './pages/Nacionales/ProteinasNac.jsx'
import { PreWorkNac } from './pages/Nacionales/PreWorkNac.jsx'
import { AminoacidosNac } from './pages/Nacionales/AminoacidosNac.jsx'
import { CreatinaNac } from './pages/Nacionales/CreatinaNac.jsx'
import { CarnitinaNac } from './pages/Nacionales/CarnitinaNac.jsx'
import { BCAAsMain } from './pages/ProductosDesc/BCAAsMain.jsx'
import {ProteEnaPerformance} from './pages/ProductosDesc/ProteEnaPerformance.jsx'
import {PreWorkDest} from './pages/ProductosDesc/PreWorkDest.jsx'
import { CreatinaDest } from './pages/ProductosDesc/CreatinaDest.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route  path='/' element={<App/>}/>
        <Route  path='/somos' element={<Somos/>}/>
        <Route  path='/producto' element={<Productos/>}/>
        <Route  path='/contacto' element={<Contacto/>}/>
        <Route  path='/protNac' element={<ProteinasNac/>}/>
        <Route  path='/preWorkNac' element={<PreWorkNac/>}/>   
        <Route  path='/aminoacidosNac' element={<AminoacidosNac/>}/>
        <Route  path='/creatinaNac' element={<CreatinaNac/>}/>
        <Route  path='/carnitinaNac' element={<CarnitinaNac/>}/>
        <Route path='/bcaa' element={<BCAAsMain/>}/>
        <Route path='/proteEnaPerformance' element={<ProteEnaPerformance/>}/>
        <Route path='/preWorkDest' element={<PreWorkDest/>}/>
        <Route path='/creatinaDest' element={<CreatinaDest/>}/>
      </Routes>
    
    
    
    </BrowserRouter>
  </React.StrictMode>,
)
