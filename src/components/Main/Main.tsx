import React from 'react'
import s from './Main.module.css'
import commonStyles from '../../common/styles/style.module.css'


export const Main = () => {
    return (
        <div className={`${s.mainBlock} ${commonStyles.block}`}>
            <div className={commonStyles.container}>
                <div className={s.aboutMe}>
                    <span>Hi, there</span>
                    <h1>I'm Sergey Balanov</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={s.photo}>
                    Photo here
                </div>
            </div>
        </div>
    )
}