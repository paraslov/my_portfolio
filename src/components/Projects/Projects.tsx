import React from 'react'
import s from './Projects.module.css'
import commonStyles from '../../common/styles/style.module.css'
import {Project} from './Project/Project';


export const Projects = () => {
    return (
        <div className={`${s.projectsBlock} ${commonStyles.block}`}>
            <div className={`${commonStyles.container} ${s.projectsContainer}`}>
                <h2>My Works</h2>
                <div className={s.projectsItems}>
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    )
}