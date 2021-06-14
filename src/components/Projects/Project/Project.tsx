import React from 'react'
import s from './Project.module.scss'
import commonStyles from '../../../common/styles/style.module.scss'


type TProjectProps = {
    title: string
    description: string
}
export const Project: React.FC<TProjectProps> = (props) => {
    return (
        <div className={s.projectItem}>
            <div className={s.projectImg}>
                <a className={commonStyles.btnLink} href="#" >View</a>
            </div>
            <h3>{props.title}</h3>
            <p className={s.projectDescription}>{props.description}</p>
        </div>
    )
}