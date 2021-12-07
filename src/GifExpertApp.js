import React,{useState} from 'react'
import {AddCategory} from './components/AddCategory'


export default function GifExpertApp() {
    const [categories, setCategories] = useState(["OnePunchMan","DBZ","Invencible"])
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleClick}>Agregar</button> */}
            <ol>
                {
                    categories.map((category) =>{
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}
