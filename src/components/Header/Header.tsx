import React from 'react'
import {Navbar} from '../Navbar/Navbar'
import s from './Header.module.css'


export const Header = () => {
    return (
        <div className={s.header}>
            <Navbar />
        </div>
    )
}