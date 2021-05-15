import React from 'react'
import s from './Project.module.css'


export const Project = () => {
    return (
        <div className={s.projectItem}>
            <div className={s.projectImg}>
                <a className={s.viewProject} href="#" >View</a>
            </div>
            <h3>Project Title</h3>
            <p className={s.projectDescription}>Project description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae harum id quia reprehenderit tempora vel veniam voluptatum.</p>
        </div>
    )
}