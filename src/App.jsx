import { useState } from 'react'
import './App.css'
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home';
import Layout from './Components/Layout';
import Admin from './Page/Admin';
import Add from './Page/Add';
import Edit from './Page/Edit';


function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />} path='/'>
          <Route index element={<Home />}></Route>
        </Route>
        <Route element={<Admin />} path='/admin'></Route>
        <Route element={<Add />} path='/add'></Route>
        <Route element={<Edit />} path='/edit/:id'></Route>
      </Routes>
    </>
  )
}

export default App
