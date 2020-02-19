import React from 'react'
import s from './Thing.module.scss'

const Thing=(props)=>{
    return (
        <div className={s.container}>
       {props.isInCart===true?
       <span>
        <label >
        <input type='checkbox'/>
        <span ></span>
      </label>
       <img className={s.image} src={props.image}/>
       <span className={s.description}>
       <span>{props.description1}</span><br/>
       <span>{props.description2}</span>
       </span>
        {props.name=='cat'
        ?
        <div><span className={s.doubleprice}>{props.price*2} P</span>
          <div className={s.devide}></div></div>
        :<div><span className={s.price}>{props.price} P</span>
        <div className={s.devide}></div> </div>}
      
       </span>:
       ''}
       
       </div>
    )
}
export default Thing