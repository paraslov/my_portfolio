import React from 'react'
import s from './Projects.module.scss'
import commonStyles from '../../common/styles/style.module.scss'
import {Project} from './Project/Project'
import {Title} from '../../common/components/Title'
import {Fade} from 'react-awesome-reveal'
import {projects} from './projectsDB'


export const Projects = () => {

    const projectsList = projects.map((p, i) => <Project
        key={i}
        title={p.title}
        description={p.description}
        projectHref={p.ref}
        style={p.style}/>)

    return (
        <div id={'projects'} className={`${s.projectsBlock} ${commonStyles.block}`}>
            <div className={`${commonStyles.container} ${s.projectsContainer}`}>
                <Fade direction={'down'} triggerOnce>
                    <Title title={'My Works'}/>
                </Fade>
                <Fade direction={'up'} triggerOnce className={s.projectsItemsFade}>
                    <div className={s.projectsItems}>
                        {projectsList}
                    </div>
                </Fade>
            </div>
        </div>
    )
}