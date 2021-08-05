import React from 'react'
import './App.scss'
import {Main} from './components/c2-Main/Main'
import {Skills} from './components/c3-Skills/Skills'
import {Projects} from './components/c4-Projects/Projects';
import {Remote} from './components/c5-Remote/Remote';
import {ContactMe} from './components/c6-ContactMe/ContactMe';
import {Footer} from './components/c7-Footer/Footer';
import {Navbar} from './components/c1-Navbar/Navbar'
import {BurgerMenu} from './components/c9-BurgerMenu/BurgerMenu'

const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <BurgerMenu/>
            <Main/>
            <Skills/>
            <Projects/>
            <Remote/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default App
