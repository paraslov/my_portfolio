import React from 'react'
import commonStyles from '../../common/styles/style.module.scss'
import s from './Skills.module.scss'
import {Skill} from './Skill/Skill'
import {Title} from '../../common/components/Title'
import {Fade} from 'react-awesome-reveal'
import {skills} from './skillsDB'


export const Skills = () => {

    const skillsList = skills.map(s => <Skill title={s.title} icon={s.icon} description={s.description}/>)

    return (
        <div id={'skills'} className={`${commonStyles.block} ${s.skillsBlock}`}>
            <div className={`${commonStyles.container} ${s.skillsContainer}`}>
                <Fade direction={'down'} triggerOnce>
                    <Title title={'Skills'}/>
                </Fade>
                <Fade direction={'up'} triggerOnce>
                    <div className={s.skills}>
                        {skillsList}
                    </div>
                </Fade>
            </div>
        </div>
    )
}