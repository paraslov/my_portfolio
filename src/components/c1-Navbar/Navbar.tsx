import React from 'react'
import s from './Navbar.module.scss'
import {Fade} from 'react-awesome-reveal'


export const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <Fade direction={'right'} triggerOnce>
                <div className={s.navbar}>
                    <a href="#">Main</a>
                    <a href="#">Skills</a>
                    <a href="#">Projects</a>
                    <a href="#">Contacts</a>
                </div>
            </Fade>
        </div>
    )
}