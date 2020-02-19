import React from 'react'
import s from './Header.module.scss'
import basket from '../img/basket.svg'
import {NavLink} from 'react-router-dom'


class Header extends React.Component  {
    state={
        isClicked:true
    }
    ToBasket=()=>{
        this.setState({isClicked:false})
    }
    render(){
    return (
        <div className={s.container}>
                <div className={s.icon}>
                    OZON
                </div>
                <div className={s.bar}>
                    <ul>
                        <li className={this.state.isClicked===true ? s.catalog:''}> Католог </li>
                         <li>Доставка </li>
                        <li>Оплата</li>
                        <li>Поддержка</li>
                    </ul>
                </div>
                <div className={s.buy}>
                   
                   <NavLink to='/basket'> <img onClick={this.ToBasket} src={basket}/></NavLink>
                    <div className={s.circle}>2</div>
                </div>
            </div>
    )
    }
}

export default Header