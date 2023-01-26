
import React, { useEffect, useState } from 'react'

const apiRest = (page = 1) => {
    const [data, setdata] = useState()
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`

    useEffect(() => {
      res()
    }, [])
    

    const res = () =>{
        fetch(url)
        .then((res)=> res.json())
        .then((res)=> res.results)
        .then((res)=> setdata(res))
    }

  return {
    data
  }
}

export default apiRest