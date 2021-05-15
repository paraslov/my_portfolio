import React from 'react'
import './App.css'
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'
import {Skills} from './components/Skills/Skills'
import {Projects} from './components/Projects/Projects';
import {Remote} from './components/Remote/Remote';
import {ContactMe} from './components/ContactMe/ContactMe';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Remote/>
            <ContactMe/>
        </div>
    );
}

export default App
