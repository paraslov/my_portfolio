import React, {useState} from 'react'
import s from './ContactMe.module.scss'
import commonStyles from '../../common/styles/style.module.scss'
import {Title} from '../../common/components/Title'
import {Fade} from 'react-awesome-reveal'
import axios from 'axios'
import {FormikErrors, useFormik} from 'formik'
import {Preloader} from '../../common/components/Preloader/Preloader'


export const ContactMe = () => {

    const [isFetching, setIsFetching] = useState(false)

    //* =========================================================================== Formik validate =================>>
    type TFormikErrors = {
        email?: string
        name?: string
        message?: string
    }
    const validate = (values: TFormikValues) => {
        const errors: FormikErrors<TFormikErrors> = {}
        if (!values.email) {
            errors.email = 'This field is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }

        if (!values.name) {
            errors.name = 'This field is required'
        }

        if (!values.message) {
            errors.message = 'This field is required'
        }
        return errors
    }
//* =========================================================================== Formik =============================>>
    type TFormikValues = {
        email: string
        name: string
        message: string
    }
    const formik = useFormik<TFormikValues>({
        initialValues: {
            email: '',
            name: '',
            message: ''
        },
        validate,
        onSubmit: values => {
            setIsFetching(true)
            let {name, email, message} = values

            axios.post('https://smtp-email-folio.herokuapp.com/send-message', {name, email, message})
                .then(() => {
                    setIsFetching(false)
                    formik.resetForm()
                })
                .catch((err) => {
                    console.log(err)
                    setIsFetching(false)
                })
        }
    })

    return (
        <div id={'contactMe'} className={`${s.contactMeBlock} ${commonStyles.block}`}>
            <div className={`${commonStyles.container} ${s.contactMeContainer}`}>
                <Fade direction={'down'} triggerOnce>
                    <Title title={'Contact me: '}/>
                </Fade>
                <Fade direction={'up'} triggerOnce>
                    <form className={s.contactMeForm} onSubmit={formik.handleSubmit}>
                        {isFetching && <Preloader left={'40%'} top={'10%'} size={'80px'}/>}
                        <input className={s.formItem} type="text" placeholder={'Your name'} {...formik.getFieldProps('name')}/>
                        {formik.touched.name && formik.errors.name ?
                            <span className={s.errorField}>{formik.errors.name}</span> : null}
                        <input className={s.formItem} type="text" placeholder={'Your email'} {...formik.getFieldProps('email')}/>
                        {formik.touched.email && formik.errors.email ?
                            <span className={s.errorField}>{formik.errors.email}</span> : null}
                        <textarea className={s.formItem} placeholder={'Your message'} {...formik.getFieldProps('message')}/>
                        {formik.touched.message && formik.errors.message ?
                            <span className={s.errorField}>{formik.errors.message}</span> : null}
                        <button className={s.btn} type={'submit'} disabled={isFetching}>Contact Me</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}