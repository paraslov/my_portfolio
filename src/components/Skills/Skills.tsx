import React from 'react'
import s from './Skills.module.css'
import commonStyles from '../../common/styles/style.module.css'
import {Skill} from './Skill/Skill';


export const Skills = () => {
    return (
        <div className={`${commonStyles.block} ${s.skillsBlock}`}>
            <div className={`${commonStyles.container} ${s.skillsContainer}`}>
                <h2>My skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'}/>
                    <Skill title={'ReactJS'}/>
                    <Skill title={'HTML&CSS'}/>
                </div>
            </div>
        </div>
    )
}