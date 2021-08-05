import React, {useState} from 'react'
import s from './BurgerMenu.module.scss'
import {Link} from 'react-scroll/modules'


export const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const onClickHandler = () => setIsOpen(!isOpen)

    return (
        <div className={s.burgerMenuContainer}>
            {isOpen ? <div className={`${s.burgerBtn} ${isOpen ? s.openBtn : ''}`}
                  onClick={onClickHandler}>☒</div>
            :
                <div className={`${s.burgerBtn} ${isOpen ? s.openBtn : ''}`}
                     onClick={onClickHandler}>☰</div>}
            <div className={`${s.navbar} ${isOpen ? s.open : ''}`}>
                <Link to={'main'} smooth>Main</Link>
                <Link to={'skills'} smooth>Skills</Link>
                <Link to={'projects'} smooth>Projects</Link>
                <Link to={'contactMe'} smooth>Contact me</Link>
            </div>
        </div>
    )
}