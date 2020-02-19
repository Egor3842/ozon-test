import React from 'react'
import s from './Submit.module.scss'

const Submit=()=>{
    return(
        <div className={s.container}>
            <div>
                <div className={s.order}>Ваш заказ:</div>
                <span className={s.amountOrder}>3 товара на сумму</span>
                <span className={s.price}>26 746 P</span>
                </div>
                <div>
                <span className={s.sale}>Скидка</span>
                <span className={s.saleCount}>-465 P</span>
                <div className={s.devideLine}></div>
                </div>
                <div>
                    <span className={s.Total}>Общая стоимость</span>
                    <span className={s.TotalCost}>26 746 Р</span>
                </div>
                <div>
                    <span className={s.delivery}>Доступные способы и время доставки <br/> можно выбрать при оформлении заказа</span>
                    <span><button className={s.buttonSubmit}>Оформить</button></span>
                </div>

        </div>
    )
}

export default Submit