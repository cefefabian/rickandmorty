import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataFillFn, dataFillFn2 } from '../redux/sliceRickMorty';

const List = ({personaje}) => {

    const dispacht = useDispatch()
    const {dataFill} = useSelector(state=> state.rickMorty)

  return (
<div onMouseEnter={()=> dispacht(dataFillFn(personaje.id))} onMouseLeave={()=> dispacht(dataFillFn2())}
    className={dataFill === personaje.id ? ('card cardHover') : ('card')} key={personaje.name}>
    
    <div className='img'>
        <img src={personaje.image} alt=""/>
    </div>
    <div className='description'>
        <h2>{personaje.name}</h2>
        <p>{personaje.status}</p>
        <p>{personaje.species}</p>
    </div>
    
</div>
  )
}

export default List