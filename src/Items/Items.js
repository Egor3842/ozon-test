import React from 'react'
import s from '../Item/Item.module.scss'

import Item from '../Item/Item'

const Items=(props)=> {
 
     
    return(
        <div className={s.Info}>
           <Item state={props.state}/>
        
        </div>
    )
    
}

export default Items