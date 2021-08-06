import React, {useState} from 'react'
import s from './BurgerMenu.module.scss'
import {Link} from 'react-scroll'


export const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const onClickHandler = () => setIsOpen(!isOpen)

    return (
        <div className={s.burgerMenuContainer}>
            <div className={`${s.burgerBtn} ${isOpen ? s.openBtn : ''}`} onClick={onClickHandler}><span/></div>
            <div className={`${s.navbar} ${isOpen ? s.open : ''}`}>
                <Link to={'main'} smooth duration={600} spy activeClass={s.active} onClick={onClickHandler}>Main</Link>
                <Link to={'skills'} smooth duration={600} spy activeClass={s.active} offset={5} onClick={onClickHandler}>Skills</Link>
                <Link to={'projects'} smooth duration={600} spy activeClass={s.active} offset={5} onClick={onClickHandler}>Projects</Link>
                <Link to={'contactMe'} smooth duration={600} spy activeClass={s.active} offset={5} onClick={onClickHandler}>Contact me</Link>
            </div>
        </div>
    )
}