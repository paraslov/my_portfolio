import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import s from './Skill.module.scss'
import {IconDefinition} from '@fortawesome/free-brands-svg-icons'


type SkillPropsType = {
    title: string
    icon: IconDefinition
}

export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={s.skillContainer}>
            <FontAwesomeIcon icon={props.icon} className={s.skillLogo}/>
            <h3>{props.title}</h3>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolor esse itaque maiores molestiae omnis praesentium qui repellat tempora vero. Nobis, officia vero?
            </span>
        </div>
    )
}