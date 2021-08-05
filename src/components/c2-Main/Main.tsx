import React from 'react'
import commonStyles from '../../common/styles/style.module.scss'
import s from './Main.module.scss'
import Particles from 'react-tsparticles'
import Tilt from 'react-parallax-tilt'
import ReactTypingEffect from 'react-typing-effect'
import { Fade } from "react-awesome-reveal"

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
        <div id={'main'} className={`${s.mainBlock} ${commonStyles.block}`}>
            <Particles options={particlesParams} className={s.particles}/>
            <div className={`${s.mainContainer} ${commonStyles.container}`}>
                <Fade direction={'left'} triggerOnce>
                    <div className={s.aboutMe}>
                        <span>Hi, there</span>
                        <span>I'm Sergey <span>Balanov</span></span>
                        <span><ReactTypingEffect typingDelay={1500} eraseDelay={3000} text={'Frontend developer.'}/></span>
                    </div>
                </Fade>
                <Fade direction={'right'} triggerOnce><Tilt>
                    <div className={s.photo}>
                        <div className={s.photoFrame}/>
                    </div>
                </Tilt></Fade>
            </div>
        </div>
    )
}