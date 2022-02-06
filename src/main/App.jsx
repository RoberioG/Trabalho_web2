import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import Routes from "./Routes"
import Logo from '../components/template/Logo'
import Nav from '../components/template/nav/Nav'
import Footer from '../components/template/footer/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default prop =>
    <BrowserRouter>
        <div className='app'>
            <Logo/>
            <Nav/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>