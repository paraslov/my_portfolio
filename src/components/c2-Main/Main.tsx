import React from 'react'
import commonStyles from '../../common/styles/style.module.scss'
import s from './Main.module.scss'
import Particles from 'react-tsparticles'

const particlesParams = {
    particles: {
        color: {
            value: 'grey',
        },
        links: {
            color: '#999',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            enable: true,
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                value_area: 800,
            },
            value: 120,
        },
        opacity: {
            value: 0.8,
        },
        shape: {
            type: 'circle',
        },
    },
}

export const Main = () => {
    return (
        <div className={`${s.mainBlock} ${commonStyles.block}`}>
            <Particles options={particlesParams} className={s.particles}/>
            <div className={`${s.mainContainer} ${commonStyles.container}`}>
                <div className={s.aboutMe}>
                    <span>Hi, there</span>
                    <h1>I'm Sergey Balanov</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={s.photo}>
                    <div className={s.photoFrame}/>
                </div>
            </div>
        </div>
    )
}