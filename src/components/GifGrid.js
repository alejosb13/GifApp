import React,{useState,useEffect} from 'react'
import GifItem from './GifItem'
import {getGift} from '../helpers/GetGifs'

export const GifGrid = ({category}) => {
    useEffect(()=>{
        // setGifs( async()=> await getGift(category) ).
        getGift(category)
        .then(setGifs);

    },[category])
    
    const [gifs, setGifs] = useState([])

    return (
       <>
            <h3>{category}</h3>  
            <div className="grid-card">
                {
                    gifs.map(gif => <GifItem key={gif.id} {...gif}  />) 
                }
            </div>
       </>
    )
}
