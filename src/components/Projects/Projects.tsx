import React from 'react'
import s from './Projects.module.scss'
import commonStyles from '../../common/styles/style.module.css'
import {Project} from './Project/Project';
import {Title} from '../../common/components/Title';


export const Projects = () => {
    return (
        <div className={`${s.projectsBlock} ${commonStyles.block}`}>
            <div className={`${commonStyles.container} ${s.projectsContainer}`}>
                <Title title={'My Works'}/>
                <div className={s.projectsItems}>
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    )
}