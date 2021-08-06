import React from 'react'
import s from './Navbar.module.scss'
import {Fade} from 'react-awesome-reveal'
import {Link} from 'react-scroll'


export const Navbar = () => {
    return (
        <div className={s.navbarContainer}>
            <Fade direction={'right'} triggerOnce>
                <div className={s.navbar}>
                    <Link to={'main'} smooth duration={600} spy activeClass={s.active}>Main</Link>
                    <Link to={'skills'} smooth duration={600} spy activeClass={s.active} offset={5}>Skills</Link>
                    <Link to={'projects'} smooth duration={600} spy activeClass={s.active} offset={5}>Projects</Link>
                    <Link to={'contactMe'} smooth duration={600} spy activeClass={s.active} offset={5}>Contact me</Link>
                </div>
            </Fade>
        </div>
    )
}