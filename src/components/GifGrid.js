import React from 'react'
import GifItem from './GifItem'
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
    const {data:gifs,status} = useFetchGifs(category)

    return (
       <>
            <h3>{category}</h3>  
            <h4>{status && <p>Cargando...</p>}</h4>  
            
            <div className="grid-card">
                {
                    gifs.map(gif => <GifItem key={gif.id} {...gif}  />) 
                }
            </div>
       </>
    )
}
