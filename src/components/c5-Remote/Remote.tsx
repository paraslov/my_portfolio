import React from 'react'
import s from './Remote.module.scss'
import commonStyles from '../../common/styles/style.module.scss'


export const Remote = () => {
    return (
        <div className={`${commonStyles.block} ${s.remoteBlock}`}>
            <div className={`${commonStyles.container} ${s.remoteContainer}`}>
                <h2>Remote work is acceptable for me.</h2>
                <a className={commonStyles.btnLink} href="#contactMe">Hire Me</a>
            </div>
        </div>
    )
}