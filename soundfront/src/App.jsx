import { useEffect, useState } from 'react'

import './App.css'


import { HashRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";

import Home from './pages/home';
import Examples from './pages/examples';


function App() {

    const basename = import.meta.env.BASENAME || "";


    return (
        <div className=' cont '>
            <HashRouter basename={basename}>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Examples />} path="/examples" />
                    <Route element={<h1>Not found!</h1>} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default injectContext(App)