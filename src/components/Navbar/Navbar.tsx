import React from 'react'
import s from './Navbar.module.css'


export const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <div className={s.navbar}>
                <a href="#">Main</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contacts</a>
            </div>
        </div>
    )
}