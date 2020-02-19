import React from 'react'
import s from './Basket.module.scss'
import ChooseThing from '../ChooseThing/ChooseThing'

const Basket= (props)=>{
return(
    <div>
        <div className={s.container}>
            <span className={s.basket}>Корзина</span> <span className={s.amount}>2 товара</span>
        </div>
        <div>
            <ChooseThing state={props.state}/>
        </div>
    </div>
)
}

export default Basket