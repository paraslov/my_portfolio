import React from 'react'
import s from './Title.module.scss'


type TTitleProps = {
    title: string
}
export const Title: React.FC<TTitleProps> = (props) => {
    return (
        <div>
            <h2 className={s.title}>{props.title}</h2>
        </div>
    )
}