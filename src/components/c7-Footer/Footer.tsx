import React from 'react'
import s from './Footer.module.scss'
import commonStyles from '../../common/styles/style.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMailBulk} from '@fortawesome/free-solid-svg-icons/faMailBulk'
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub'
import {faYoutube} from '@fortawesome/free-brands-svg-icons/faYoutube'
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone'
import {Fade} from 'react-awesome-reveal'
import {faLinkedinIn, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
    return (
        <div className={`${s.footerBlock} ${commonStyles.block}`}>
            <Fade direction={'up'} className={s.footerFade} triggerOnce >
                <div className={`${commonStyles.container} ${s.footerContainer}`}>
                    <h2>Sergey Balanov</h2>
                    <div className={s.contacts}>
                        <a href={'https://github.com/paraslov'}>
                            <FontAwesomeIcon icon={faGithub} className={s.contactsItem}/>
                        </a>
                        <a href={'https://www.youtube.com/channel/UC-ikUsjn0OTGHjumm35HbhQ'}>
                            <FontAwesomeIcon icon={faYoutube} className={s.contactsItem}/>
                        </a>
                        <a href={'https://t.me/srjoyme'}>
                            <FontAwesomeIcon icon={faTelegramPlane} className={s.contactsItem}/>
                        </a>
                        <a href={'https://www.linkedin.com/in/sergey-balanov-b770841ba/'}>
                            <FontAwesomeIcon icon={faLinkedinIn} className={s.contactsItem}/>
                        </a>
                        <a href={'mailto:tsfoe@mail.ru'}>
                            <FontAwesomeIcon icon={faMailBulk} className={s.contactsItem}/>
                        </a>
                        <a href={'tel:+79636656564'}>
                            <FontAwesomeIcon icon={faPhone} className={s.contactsItem}/>
                        </a>
                    </div>
                    <h3 className={s.rights}>@2021 Para Slov. All rights reserved</h3>
                </div>
            </Fade>
        </div>
    )
}