import React from 'react'
import s from './Remote.module.scss'
import commonStyles from '../../common/styles/style.module.scss'
import {Fade} from 'react-awesome-reveal'


export const Remote = () => {
    return (
        <div className={`${commonStyles.block} ${s.remoteBlock}`}>
            <Fade direction={'up'} triggerOnce>
                <div className={`${commonStyles.container} ${s.remoteContainer}`}>
                    <h2>Remote work is acceptable for me.</h2>
                    <a className={commonStyles.btnLink} href="#contactMe">Hire Me</a>
                </div>
            </Fade>
        </div>
    )
}