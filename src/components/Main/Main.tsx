import React from 'react'
import commonStyles from '../../common/styles/style.module.scss'
import s from './Main.module.scss'



export const Main = () => {
    return (
        <div className={`${s.mainBlock} ${commonStyles.block}`}>
            <div className={`${s.mainContainer} ${commonStyles.container}`}>
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