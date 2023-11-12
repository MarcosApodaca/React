import { useState } from "react"
import { AddCateory } from "./components/AddCateory"
import { GifGrid } from "./components/GifGrid"


export const GifExpertApp = () => {

        const [categories, setCategories] = useState(['One Punch'])

        const onAddCategory = (newCategory) => {

            if( categories.includes(newCategory)) return;
            
            setCategories( [newCategory, ...categories] )

        }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCateory 
        // setCategories={setCategories}

        onNewCategory= {event => onAddCategory(event)}
        />

            { categories.map( (category) =>(
                    <GifGrid key={category}/>
                ) )
            }
            
      
    
    </>





  )
}
