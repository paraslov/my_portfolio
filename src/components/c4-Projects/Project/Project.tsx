import React from 'react'
import s from './Project.module.scss'


type TProjectProps = {
    title: string
    description: { implemented: string[], techsUsed: string[] }
    refs: {project: string, sourceCode: string}
    style: { [key: string]: string }
}
export const Project: React.FC<TProjectProps> = ({title, description, style, refs}) => {
    return (
        <div className={s.projectItem}>
            <div className={s.projectImg} style={style}>
                <a className={s.btn} href={refs.project}>View project</a>
                <a className={s.btn} href={refs.sourceCode}>View source code</a>
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