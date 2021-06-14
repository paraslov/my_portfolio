import React from 'react'
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
}

export const Skill: React.FC<SkillPropsType> = (props) => {
    return (
        <div className={s.skillContainer}>
            <div className={s.skillLogo}>logo</div>
            <h3>{props.title}</h3>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolor esse itaque maiores molestiae omnis praesentium qui repellat tempora vero. Nobis, officia vero?
            </span>
        </div>
    )
}