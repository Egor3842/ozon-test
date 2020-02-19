import React from 'react'
import s from './Item.module.scss'
import star from '../img/star.png'
import Mask from '../img/Mask.png'

class Item extends React.Component{
    AddBasket=(i)=>{
        this.props.state[i].isInCart=true
        console.log(this.props.state[i].isInCart,this.props.state[i].id)
    }
    OffBasket=(i)=>{
        this.props.state.isInCart=false
        console.log(this.props.state[i].isInCart,this.props.state[i].id)
    }
render(){
    return (
        this.props.state.map((u)=>
        <span className={s.container} >
            
            <div className={s.imageContainer}>
                <img className={s.img} src={u.image}/>
            </div>
           
            {u.discount===0 ? <div className={s.price}> {u.price} Р</div>:
            <div>
             <div className={s.sail}>-30%</div>
            <span className={s.lowprice}>7321 Р</span> 
            <span className={s.oldprice}>1 000 000 Р</span>
            </div>
            }
            <div className={s.description}>
                {u.description1}<br/>
                {u.description2}
            </div>
            {u.starsCount===5?
            <span>
            <span><img className={s.star} src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span className={s.report}>123к отзывов</span>
            <br/>
            </span>
            :
            <span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={star}/></span>
            <span><img src={Mask}/></span>
            <span className={s.report}>123к отзывов</span>
            <br/>
            </span>
            }
                {u.isInCart===false
                ? <button onClick={()=>{this.AddBasket(u.id)}}  className={s.false}><div className={s.inBasket}>В корзину</div></button>
                :<button onClick={()=>{this.OffBasket(u.id)}}  className={s.true}><div className={s.outBasket}>В корзине</div></button>}
        </span>)
    )
}}

export default Item