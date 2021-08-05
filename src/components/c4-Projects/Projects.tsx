import React from 'react'
import s from './Projects.module.scss'
import commonStyles from '../../common/styles/style.module.scss'
import {Project} from './Project/Project'
import {Title} from '../../common/components/Title'
import socNetImg from '../../assets/img/projectsImg/SocNet.jpg'
import todoImg from '../../assets/img/projectsImg/todoImg3.jpg'
import {Fade} from 'react-awesome-reveal'


export const Projects = () => {

    const socialStyle = {
        backgroundImage: `url(${socNetImg})`
    }
    const todoStyle = {
        backgroundImage: `url(${todoImg})`
    }

    return (
        <div id={'projects'} className={`${s.projectsBlock} ${commonStyles.block}`}>
            <div className={`${commonStyles.container} ${s.projectsContainer}`}>
                <Fade direction={'down'} triggerOnce>
                    <Title title={'My Works'}/>
                </Fade>
                <Fade direction={'up'} triggerOnce className={s.projectsItemsFade}>
                    <div className={s.projectsItems}>
                        <Project title={'Social Network'}
                                 description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur 
                             ea eligendi esse est et, ex illum ipsum laborum maxime modi molestiae odit perferendis 
                             placeat quos, recusandae repellat, unde ut!Lorem ipsum dolor sit amet, consectetur 
                             adipisicing elit. Alias consequuntur ea eligendi esse est et, ex illum ipsum laborum maxime
                              modi molestiae odit perferendis placeat quos, recusandae repellat, unde ut!`}
                                 style={socialStyle}/>

                        <Project title={'To do list project'}
                                 description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur 
                             ea eligendi esse est et, ex illum ipsum laborum maxime modi molestiae odit perferendis 
                             placeat quos, recusandae repellat, unde ut!`}
                                 style={todoStyle}/>
                    </div>
                </Fade>
            </div>
        </div>
    )
}