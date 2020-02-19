import React from 'react'
import s from './About.module.scss'



const About = () => {
    return (
        <div className={s.container}>
        <span className={s.Name}>
            Дом и сад  
        </span>
        <span className={s.amount}>
            24 товара
        </span>    
        </div>
    )
}

export default About