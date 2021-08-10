import React from 'react'
import s from './Project.module.scss'


type TProjectProps = {
    title: string
    description: {implemented: string, techsUsed: string}
    projectHref: string
    style: {[key: string]: string}
}
export const Project: React.FC<TProjectProps> = ({title, description, style, projectHref}) => {
    return (
        <div className={s.projectItem}>
            <div className={s.projectImg} style={style}>
                <a className={s.btn} href={projectHref} >View</a>
            </div>
            <h3>{title}</h3>
            <div className={s.description}>
                <p><b>Implemented:</b> {description.implemented}</p>
                <p><b>Techs used:</b> {description.techsUsed}</p>
            </div>
        </div>
    )
}