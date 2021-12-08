import { useState,useEffect } from 'react'
import {getGift} from '../helpers/GetGifs'


export const useFetchGifs = (category) => {
    
    const [estado, setEstado] = useState({
        data:[],
        status:true
    })
    
    useEffect(()=>{
        getGift(category)
            .then(img =>{
                setEstado({
                    data:[...img],
                    status:false
                })
            });
    },[category])
    
    return estado
}
