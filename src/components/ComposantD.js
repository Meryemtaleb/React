import React,{useContext} from 'react'
import {CountContext} from '../App'

function ComposantD() {
    const countContext = useContext(CountContext)
  return (
    <div>ComposantD{countContext.countState}


        <button  onClick={()=>countContext.countDispatch('increment')}>Incrément</button>
        <button onClick={()=>countContext.countDispatch('decrement')}>Decrément</button>
        <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComposantD
