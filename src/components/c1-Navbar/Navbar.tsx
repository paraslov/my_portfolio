import React from 'react'
import s from './Navbar.module.scss'
import {Fade} from 'react-awesome-reveal'
import {Link} from 'react-scroll/modules'


export const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <Fade direction={'right'} triggerOnce>
                <div className={s.navbar}>
                    <Link to={'main'} smooth>Main</Link>
                    <Link to={'skills'} smooth>Skills</Link>
                    <Link to={'projects'} smooth>Projects</Link>
                    <Link to={'contactMe'} smooth>Contact me</Link>
                </div>
            </Fade>
        </div>
    )
}