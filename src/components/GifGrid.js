import React,{useState,useEffect} from 'react'
import GifItem from './GifItem'

export const GifGrid = ({category}) => {
    useEffect(()=>{
        getGift()
    },[])
    
    const [gifs, setGifs] = useState([])
    
    const getGift = async () =>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=loxEViF3I7FLloLWtUY05Qoz00mGVlHT&q=OnePunchMan&limit=25&offset=0&rating=g&lang=es`
        const resp = await fetch(url)      
        const {data} = await resp.json()
        

        
        const gifs = data.map((img)=>{
            return {
                id : img.id,
                title : img.title,
                url : img.images?.downsized_medium.url
            }
        })
        setGifs(gifs)
        
    }

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
