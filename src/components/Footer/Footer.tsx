import React from 'react'
import s from './Footer.module.css'
import commonStyles from '../../common/styles/style.module.scss'


export const Footer = () => {
    return (
        <div className={`${s.footerBlock} ${commonStyles.block}`}>
            <div className={`${commonStyles.container} ${s.footerContainer}`}>
                <h2>Sergey Balanov</h2>
                <div className={s.contacts}>
                    <a href={'#'} className={s.contactsItem}/>
                    <a href={'#'} className={s.contactsItem}/>
                    <a href={'#'} className={s.contactsItem}/>
                    <a href={'#'} className={s.contactsItem}/>
                </div>
                <h3 className={s.rights}>@2021 Para Slov. All rights reserved</h3>
            </div>
        </div>
    )
}