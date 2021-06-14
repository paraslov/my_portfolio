import React from 'react'
import s from './ContactMe.module.scss'
import commonStyles from '../../common/styles/style.module.scss'
import {Title} from '../../common/components/Title';


export const ContactMe = () => {
    return (
        <div className={`${s.contactMeBlock} ${commonStyles.block}`}>
            <div className={`${commonStyles.container} ${s.contactMeContainer}`}>
                <Title title={'Contact me: '}/>
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