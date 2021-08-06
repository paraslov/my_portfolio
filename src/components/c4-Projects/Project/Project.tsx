import React from 'react'
import s from './Project.module.scss'



type TProjectProps = {
    title: string
    description: string
    projectHref: string
    style: {[key: string]: string}
}
export const Project: React.FC<TProjectProps> = (props) => {
    return (
        <div className={s.projectItem}>
            <div className={s.projectImg} style={props.style}>
                <a className={s.btn} href={props.projectHref} >View</a>
            </div>
            <h3>{props.title}</h3>
            <p className={s.projectDescription}>{props.description}</p>
        </div>
    )
}