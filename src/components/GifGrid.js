import React from 'react'
import GifItem from './GifItem'
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
    const {data:gifs,status} = useFetchGifs(category)

    return (
       <>
            <h3 className="animate__animated animate__bounce">{category}</h3>  
            {status && <p className="animate__animated animate__flash">Cargando...</p>}  
            
            <div className="grid-card">
                { gifs.map(gif => <GifItem key={gif.id} {...gif}  />) }
            </div>
       </>
    )
}
