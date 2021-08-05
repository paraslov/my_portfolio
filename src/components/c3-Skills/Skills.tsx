import React from 'react'
import commonStyles from '../../common/styles/style.module.scss'
import s from './Skills.module.scss'
import {Skill} from './Skill/Skill'
import {Title} from '../../common/components/Title'
import {faJava} from '@fortawesome/free-brands-svg-icons/faJava'
import {faReact} from '@fortawesome/free-brands-svg-icons/faReact'
import {faHtml5} from '@fortawesome/free-brands-svg-icons/faHtml5'
import {Fade} from 'react-awesome-reveal'


export const Skills = () => {
    return (
        <div id={'skills'} className={`${commonStyles.block} ${s.skillsBlock}`}>
            <div className={`${commonStyles.container} ${s.skillsContainer}`}>
                <Fade direction={'down'} triggerOnce>
                    <Title title={'Skills'}/>
                </Fade>
                <Fade direction={'up'} triggerOnce>
                    <div className={s.skills}>
                        <Skill title={'JS'} icon={faJava}/>
                        <Skill title={'ReactJS'} icon={faReact}/>
                        <Skill title={'HTML&CSS'} icon={faHtml5}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}