import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dataFn } from '../redux/sliceRickMorty';
import List from './List';
import Paginacion from './Paginacion';


const Home = () => {
    const dispatch = useDispatch()
    dispatch(dataFn())

    const {data, dataPage} = useSelector(state=> state.rickMorty)

    // console.log(dataPage);
  
  return (
    <div className='main'>

        {
            data == undefined 
            ? (<h2>cargando</h2>)
            :(
            data.map((personaje)=>(
                <List personaje={personaje} key={personaje.id}/>
            ))
            )
        }
      <Paginacion/>
    </div>
  )
}

export default Home