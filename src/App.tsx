import React from 'react'
import './App.scss'
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'
import {Skills} from './components/Skills/Skills'
import {Projects} from './components/Projects/Projects';
import {Remote} from './components/Remote/Remote';
import {ContactMe} from './components/ContactMe/ContactMe';
import {Footer} from './components/Footer/Footer';

const App = () => {
    return (
        <div className="App">
            <Header/>
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
