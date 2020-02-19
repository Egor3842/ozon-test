import React from 'react'
import s from './ChooseThing.module.scss'
import Thing from '../Thing/Thing'
import Submit from '../Submit/Submit'


const ChooseThing=(props)=>{
    const InfoThing=props.state.map((u)=><Thing image={u.image} description1={u.description1} description2={u.description2}
     isInCart={u.isInCart} price={u.price} name={u.name} />)
    return(
        <div className={s.container}>
            <label >
  <input type='checkbox'/>
  <span ></span>
</label>
<span className={s.chooseAll}>Выбрать все</span>
            <span className={s.delete}>Удалить выбранные</span>
            {InfoThing}
            <Submit/>
        </div>
    )
}

export default ChooseThing