import React from 'react'
import s from './ContactMe.module.css'
import commonStyles from '../../common/styles/style.module.css'


export const ContactMe = () => {
    return (
        <div className={`${s.contactMeBlock} ${commonStyles.block}`}>
            <div className={`${commonStyles.container} ${s.contactMeContainer}`}>
                <h2>Contact Me: </h2>
                <form className={s.contactMeForm}>
                    <input className={s.formItem} type="text"/>
                    <input className={s.formItem} type="text"/>
                    <textarea className={s.formItem}/>
                </form>
                <button className={s.btn}>Contact Me</button>
            </div>
        </div>
    )
}