import React from 'react'
import s from './Footer.module.scss'
import commonStyles from '../../common/styles/style.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMailBulk} from '@fortawesome/free-solid-svg-icons/faMailBulk'
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub'
import {faYoutube} from '@fortawesome/free-brands-svg-icons/faYoutube'
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone'
import {Fade} from 'react-awesome-reveal'


export const Footer = () => {
    return (
        <div className={`${s.footerBlock} ${commonStyles.block}`}>
            <Fade direction={'up'} className={s.footerFade} triggerOnce >
                <div className={`${commonStyles.container} ${s.footerContainer}`}>
                    <h2>Sergey Balanov</h2>
                    <div className={s.contacts}>
                        <a href={'#'}>
                            <FontAwesomeIcon icon={faGithub} className={s.contactsItem}/>
                        </a>
                        <a href={'#'}>
                            <FontAwesomeIcon icon={faYoutube} className={s.contactsItem}/>
                        </a>
                        <a href={'#'}>
                            <FontAwesomeIcon icon={faMailBulk} className={s.contactsItem}/>
                        </a>
                        <a href={'#'}>
                            <FontAwesomeIcon icon={faPhone} className={s.contactsItem}/>
                        </a>
                    </div>
                    <h3 className={s.rights}>@2021 Para Slov. All rights reserved</h3>
                </div>
            </Fade>
        </div>
    )
}