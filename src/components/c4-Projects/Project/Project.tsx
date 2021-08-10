import React from 'react'
import s from './Project.module.scss'


type TProjectProps = {
    title: string
    description: { implemented: string[], techsUsed: string[] }
    projectHref: string
    style: { [key: string]: string }
}
export const Project: React.FC<TProjectProps> = ({title, description, style, projectHref}) => {
    return (
        <div className={s.projectItem}>
            <div className={s.projectImg} style={style}>
                <a className={s.btn} href={projectHref}>View</a>
            </div>
            <h3>{title}</h3>
            <div className={s.description}>
                <p>
                    <b>Implemented:</b>
                    <ul>
                        {description.implemented.map((imp, i) => <li key={i}>{imp}</li>)}
                    </ul>
                </p>
                <p>
                    <b>Techs used:</b>
                    <ul>
                        {description.techsUsed.map((tech, i) => <li key={i}>{tech}</li>)}
                    </ul>
                </p>
            </div>
        </div>
    )
}