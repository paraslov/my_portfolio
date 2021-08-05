import React, {FormEvent} from 'react'
import s from './ContactMe.module.scss'
import commonStyles from '../../common/styles/style.module.scss'
import {Title} from '../../common/components/Title';
import {Fade} from 'react-awesome-reveal'


export const ContactMe = () => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget)
        event.preventDefault()
        formData.forEach(d => {console.log(d)})
    }

    return (
        <div id={'contactMe'} className={`${s.contactMeBlock} ${commonStyles.block}`}>
            <div className={`${commonStyles.container} ${s.contactMeContainer}`}>
                <Fade direction={'down'} triggerOnce>
                    <Title title={'Contact me: '}/>
                </Fade>
                <Fade direction={'up'} triggerOnce>
                    <form className={s.contactMeForm} onSubmit={(e) => {
                        handleSubmit(e)
                        console.log(e)
                        console.log('HIHIH')
                    }}>
                        <input className={s.formItem} type="text" placeholder={'Your name'} name={'name'}/>
                        <input className={s.formItem} type="text" placeholder={'Your email'} name={'email'}/>
                        <textarea className={s.formItem} placeholder={'Your message'} name={'message'}/>
                        <button className={s.btn} type={'submit'}>Contact Me</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}