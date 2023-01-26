import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { avanzar } from '../redux/sliceRickMorty'

const Paginacion = () => {
    const {page, dataPage} = useSelector(state=> state.rickMorty)
    console.log(dataPage);
    const dispatch = useDispatch()
  return (
    <div className='paginacion'>
        <div onClick={()=>dispatch(avanzar(page))}>a</div>
        <div>b</div>
    </div>
  )
}

export default Paginacion