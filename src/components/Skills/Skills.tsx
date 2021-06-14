import React from 'react'
import commonStyles from '../../common/styles/style.module.scss'
import s from './Skills.module.scss'
import {Skill} from './Skill/Skill';
import {Title} from '../../common/components/Title';


export const Skills = () => {
    return (
        <div className={`${commonStyles.block} ${s.skillsBlock}`}>
            <div className={`${commonStyles.container} ${s.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={s.skills}>
                    <Skill title={'JS'}/>
                    <Skill title={'ReactJS'}/>
                    <Skill title={'HTML&CSS'}/>
                </div>
            </div>
        </div>
    )
}